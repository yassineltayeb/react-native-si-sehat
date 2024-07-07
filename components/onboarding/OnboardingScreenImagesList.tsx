import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Image,
  StyleSheet,
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
        index: selectedIndex ?? 0,
      });
    }
  }, [selectedIndex]);

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0) {
        const index = viewableItems[0].index;
        if (index !== null && index !== undefined) {
          dispatch(changeIndex(index));
        }
      }
    }
  ).current;

  const OnboardingScreenImage = ({ page }: { page: Page }) => {
    return (
      <View style={styles.container}>
        <Image source={page.image} style={styles.image} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
  },
  image: {
    height: height * 0.5,
    width: width,
  },
  paginationContainer: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  pageIndicator: {
    width: 42.33,
    height: 4,
    borderRadius: 90,
    marginRight: 12,
    backgroundColor: "#E5E7EB",
  },
  selectedPageIndicator: {
    backgroundColor: "#254EDB",
  },
  titlesContainer: {
    paddingHorizontal: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#18181B",
  },
  subTitle: {
    fontWeight: "500", // medium is not a valid fontWeight
    fontSize: 14,
    color: "#18181B",
  },
});

export default OnboardingScreenImagesList;
