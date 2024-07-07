import React, { useState, useRef } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  ViewToken,
} from "react-native";
import { Page } from "../../models/onboarding/page.model";

const { width, height } = Dimensions.get("window");

interface OnboardingScreenImagesListProps {
  pages: Page[];
  onSelectedIndexChange: (index: number) => void;
}

const OnboardingScreenImagesList: React.FC<OnboardingScreenImagesListProps> = ({
  pages,
  onSelectedIndexChange,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0) {
        const index = viewableItems[0].index;
        setSelectedIndex(index ?? 0);
        if (index !== null && index !== undefined) {
          onSelectedIndexChange(index ?? 0);
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
        data={pages}
        renderItem={({ item }) => <OnboardingScreenImage page={item} />}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
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
    fontWeight: "medium",
    fontSize: 14,
    color: "#18181B",
  },
});

export default OnboardingScreenImagesList;
