import React, { useEffect, useRef } from "react";
import { View, Dimensions, FlatList } from "react-native";
import { Page } from "../../models/onboarding/page.model";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const { width, height } = Dimensions.get("window");

interface OnboardingScreenPaginationProps {
  pages: Page[];
}

const OnboardingScreenPagination: React.FC<OnboardingScreenPaginationProps> = ({
  pages,
}) => {
  const selectedIndex = useSelector((state: RootState) => state.onboarding);

  const flatListRef = useRef<FlatList<Page>>(null);

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        animated: true,
        index: selectedIndex,
      });
    }
  }, [selectedIndex]);

  const OnboardingScreenPage = ({ index }: { index: number }) => {
    const isSelected = index === selectedIndex;
    return (
      <View className="flex-row my-6">
        <View
          className={`w-[42.33px] h-[4px] rounded-full mr-3 ${
            isSelected
              ? "bg-primary-500 dark:bg-primary-400"
              : "bg-gray-200 dark:bg-dark-600"
          }`}
        ></View>
      </View>
    );
  };

  return (
    <FlatList
      ref={flatListRef}
      className="mx-5"
      data={pages}
      renderItem={({ item, index }) => <OnboardingScreenPage index={index} />}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      pagingEnabled
      initialScrollIndex={0}
      showsHorizontalScrollIndicator={false}
      getItemLayout={(data, index) => ({
        length: width,
        offset: width * index,
        index,
      })}
    />
  );
};

export default OnboardingScreenPagination;
