import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  FlatList,
  ViewToken,
} from "react-native";
import { Page } from "../../models/onboarding/page.model";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { changeIndex } from "../../store/onboarding-slice";
import Title from "../common/labels/Title";
import SubTitle from "../common/labels/SubTitle";

const { width } = Dimensions.get("window");

interface OnboardingScreenImagesListProps {
  pages: Page[];
}

const OnboardingScreenImagesList: React.FC<OnboardingScreenImagesListProps> = ({
  pages,
}) => {
  const selectedIndex = useSelector((state: RootState) => state.onboarding);
  const dispatch = useDispatch();
  const flatListRef = useRef<FlatList<Page>>(null);
  const viewableItemsChangedRef =
    useRef<(info: { viewableItems: ViewToken[] }) => void>();

  // Keep track of scrolling to avoid unnecessary dispatches
  const isScrollingRef = useRef(false);

  useEffect(() => {
    if (flatListRef.current && !isScrollingRef.current) {
      flatListRef.current.scrollToIndex({
        animated: true,
        index: selectedIndex,
      });
    }
    isScrollingRef.current = false;
  }, [selectedIndex]);

  viewableItemsChangedRef.current = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
  }) => {
    if (viewableItems.length > 0) {
      const index = viewableItems[0].index;
      if (index !== null && index !== undefined && index !== selectedIndex) {
        isScrollingRef.current = true;
        dispatch(changeIndex(index));
      }
    }
  };

  const OnboardingScreenImage = ({ page }: { page: Page }) => {
    return (
      <View className="flex-1 w-screen">
        <Image className="h-screen/2 w-screen" source={page.image} />
        <View className="py-6 px-4">
          <Title title={page.title} />
          <SubTitle title={page.subTitle} />
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={pages}
        renderItem={({ item }) => <OnboardingScreenImage page={item} />}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        initialScrollIndex={0}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={viewableItemsChangedRef.current}
        getItemLayout={(data, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
      />
    </View>
  );
};

export default OnboardingScreenImagesList;
