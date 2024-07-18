import { View, Text } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import { Ionicons } from "@expo/vector-icons"; // Adjust the import based on the icon library you're using
import Title from "../components/common/labels/Title";
import { WelcomeScreenRouteProp } from "../types/route-params";
import { useRoute } from "@react-navigation/native";

const WelcomeScreen = () => {
  const { colorScheme } = useColorScheme();
  const route = useRoute<WelcomeScreenRouteProp>();
  const { fullName } = route.params;

  return (
    <>
      <StatusBar
        style={colorScheme}
        backgroundColor={colorScheme == "light" ? "#2145BF" : "#7896E4"}
      />
      <View className="flex-1 justify-center items-center bg-primary-600 dark:bg-primary-300">
        <View className="p-3 bg-white dark:bg-dark rounded-2xl">
          <Ionicons
            name="checkmark-done"
            size={64}
            color={colorScheme == "light" ? "#2145BF" : "#4F73DF"}
          />
        </View>
        <Text className="font-bold text-2xl	text-[#FDFDFD] dark:text-dark mt-6">{`Hello ${fullName}`}</Text>
        <Text className="font-medium text-sm text-typography-200 dark:text-typography-700 mt-2">{`Welcome to Si - Sehat Mobile Apps`}</Text>
      </View>
    </>
  );
};

export default WelcomeScreen;
