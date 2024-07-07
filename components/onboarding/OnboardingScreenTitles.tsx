import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  ViewToken,
} from "react-native";
import { Page } from "../../models/onboarding/page.model";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { changeIndex } from "../../store/onboarding-slice";

const { width, height } = Dimensions.get("screen");

interface OnboardingScreenTitlesProps {
  pages: Page[];
}

const OnboardingScreenTitles: React.FC<OnboardingScreenTitlesProps> = ({
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
      onViewableItemsChanged={onViewableItemsChanged}
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
