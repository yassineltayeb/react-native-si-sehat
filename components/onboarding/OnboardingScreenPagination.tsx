import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Dimensions, FlatList } from "react-native";
import { Page } from "../../models/onboarding/page.model";

const { width, height } = Dimensions.get("window");

interface OnboardingScreenPaginationProps {
  pages: Page[];
  selectedIndex: number;
}

const OnboardingScreenPagination: React.FC<OnboardingScreenPaginationProps> = ({
  pages,
  selectedIndex,
}) => {
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        animated: true,
        index: selectedIndex,
      });
    }
  }, [selectedIndex]);

  const OnboardingScreenPage = ({
    page,
    index,
  }: {
    page: Page;
    index: number;
  }) => {
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
      renderItem={({ item, index }) => (
        <OnboardingScreenPage page={item} index={index} />
      )}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      pagingEnabled
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
