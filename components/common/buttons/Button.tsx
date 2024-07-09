import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { ButtonType } from "../../../enums/ButtonTypes.enum";

interface ButtonProps {
  text: string;
  type: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, type, onClick }) => {
  const containerStyle =
    type == ButtonType.Primary
      ? "bg-primary-500 dark:bg-primary-400 border-0"
      : "bg-gray-100 dark:bg-dark-800 border-gray-200";

  const textStyle =
    type == ButtonType.Primary
      ? "text-white"
      : "text-typography-900 dark:text-white";

  return (
    <TouchableOpacity
      onPress={onClick}
      activeOpacity={0.8}
      className={`flex-row items-center justify-center rounded-md shadow-md py-3 mb-4 border ${containerStyle}`}
    >
      <Text className={`text-center text-sm font-bold px-4 ${textStyle}`}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
