import React, { useRef, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, FlatList } from "react-native";
import { Page } from "../../models/onboarding/page.model";

const { width, height } = Dimensions.get("screen");

interface OnboardingScreenTitlesProps {
  pages: Page[];
  selectedIndex: number;
}

const OnboardingScreenTitles: React.FC<OnboardingScreenTitlesProps> = ({
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

  const OnboardingScreenTitle = ({
    page,
    index,
  }: {
    page: Page;
    index: number;
  }) => {
    return (
      <View style={[styles.container]}>
        <Text style={styles.title}>{page.title}</Text>
        <Text style={styles.subTitle}>{page.subTitle}</Text>
        <Text></Text>
      </View>
    );
  };

  return (
    <FlatList
      ref={flatListRef}
      data={pages}
      renderItem={({ item, index }) => (
        <OnboardingScreenTitle page={item} index={index} />
      )}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      getItemLayout={(data, index) => ({
        length: width,
        offset: width * index,
        index,
      })}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    justifyContent: "center",
    alignContent: "center",
    paddingHorizontal: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#18181B",
  },
  subTitle: {
    fontWeight: "medium",
    fontSize: 14,
    color: "#18181B",
  },
});

export default OnboardingScreenTitles;
