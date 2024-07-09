import React, { useRef, useEffect, useCallback } from "react";
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

const { width, height } = Dimensions.get("window");

interface OnboardingScreenImagesListProps {
  pages: Page[];
}

const OnboardingScreenImagesList: React.FC<OnboardingScreenImagesListProps> = ({
  pages,
}) => {
  const selectedIndex = useSelector((state: RootState) => state.onboarding);
  const dispatch = useDispatch();

  const flatListRef = useRef<FlatList<Page>>(null);

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        animated: true,
        index: selectedIndex,
      });
    }
  }, [selectedIndex]);

  const onViewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0) {
        const index = viewableItems[0].index;
        if (index !== null && index !== undefined) {
          dispatch(changeIndex(index));
        }
      }
    },
    [dispatch]
  );

  const OnboardingScreenImage = ({ page }: { page: Page }) => {
    return (
      <View className="flex-1 w-screen">
        <Image className="h-screen/2 w-screen" source={page.image} />
        <View className="py-6 px-4">
          <Text className="font-bold text-2xl text-typography-800 dark:text-gray-50">
            {page.title}
          </Text>
          <Text className="font-medium text-md  text-typography-800  dark:text-gray-50">
            {page.subTitle}
          </Text>
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
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
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
