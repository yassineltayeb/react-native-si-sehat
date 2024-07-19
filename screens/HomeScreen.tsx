import { View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeScreenHeader from "../components/home/HomeScreenHeader";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-dark-900">
      <View className="flex-1 bg-white dark:bg-dark-900 p-4">
        <HomeScreenHeader />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
