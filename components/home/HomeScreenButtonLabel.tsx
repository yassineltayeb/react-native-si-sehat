import { Text, TouchableOpacity } from "react-native";
import React from "react";

interface HomeScreenButtonLabelProps {
  text: string;
  onClick?: () => void;
}

const HomeScreenButtonLabel: React.FC<HomeScreenButtonLabelProps> = ({
  text,
  onClick,
}) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      activeOpacity={0.8}
      className={`flex-row border-0 bg-transparent mt-1`}
    >
      <Text
        className={`font-manrope-medium font-medium text-xs text-white dark:text-dark`}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default HomeScreenButtonLabel;
