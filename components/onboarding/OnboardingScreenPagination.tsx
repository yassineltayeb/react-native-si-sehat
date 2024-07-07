import React, { useEffect, useRef } from "react";
import {
  View,
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

interface OnboardingScreenPaginationProps {
  pages: Page[];
  selectedIndex: number;
  onSelectedIndexChange: (index: number) => void;
}

const OnboardingScreenPagination: React.FC<OnboardingScreenPaginationProps> = ({
  pages,
}) => {
  const selectedIndex = useSelector((state: RootState) => state.onboarding);
  const dispatch = useDispatch();
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        animated: true,
        index: selectedIndex,
      });
    }
  }, [selectedIndex]);

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0) {
        const index = viewableItems[0].index;
        if (index !== null && index !== undefined) {
          dispatch(changeIndex(index ?? 0));
        }
      }
    }
  ).current;

  const OnboardingScreenPage = ({ index }: { index: number }) => {
    const isSelected = index === selectedIndex;
    return (
      <View style={styles.container}>
        <View
          style={[
            styles.pageIndicator,
            isSelected && styles.selectedPageIndicator,
          ]}
        ></View>
      </View>
    );
  };

  return (
    <FlatList
      ref={flatListRef}
      data={pages}
      renderItem={({ item, index }) => <OnboardingScreenPage index={index} />}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onViewableItemsChanged={onViewableItemsChanged}
      getItemLayout={(data, index) => ({
        length: width,
        offset: (width - 20) * index,
        index,
      })}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 16,
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
});

export default OnboardingScreenPagination;
