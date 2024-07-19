import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-dark-900">
      <View className="flex-1 bg-white dark:bg-dark-900">
        <Text>HomePage</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
