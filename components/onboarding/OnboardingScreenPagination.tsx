import React from "react";
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

  const OnboardingScreenPage = ({ index }: { index: number }) => {
    const isSelected = index === selectedIndex;
    return (
      <View className="flex-row my-6">
        <View
          className={`w-[42.33px] h-[4px] rounded-[90px] mr-3 ${
            isSelected ? "bg-[#254EDB]" : "bg-[#E5E7EB]"
          }`}
        ></View>
      </View>
    );
  };

  return (
    <FlatList
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
