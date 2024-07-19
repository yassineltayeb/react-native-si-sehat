import { View, Text } from "react-native";
import React from "react";
import IconButton from "../common/buttons/IconButton";
import { ButtonType } from "../../enums/ButtonTypes.enum";

const HomeScreenHeader = () => {
  return (
    <View className="flex-row justify-between items-center mt-4">
      <View className="flex-1">
        <Text className="flex-1 font-manrope-bold text-2xl text-typography-800 dark:text-gray-50">
          {`Hi Yassin Mohamed`}
        </Text>
        <Text className="flex-1 font-manrope-medium font-medium text-md text-typography-800 dark:text-gray-50">
          {`May you always be in good health.`}
        </Text>
      </View>
      <View className="pl-4">
        <IconButton
          type={ButtonType.Secondary}
          size={20}
          iconName="notifications-outline"
        />
      </View>
    </View>
  );
};

export default HomeScreenHeader;
