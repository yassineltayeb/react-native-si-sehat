import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ButtonType } from "../../../enums/ButtonTypes.enum";

interface ButtonProps {
  text: string;
  type: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, type }) => {
  const containerStyle =
    type == ButtonType.Primary
      ? "bg-primary-500"
      : "bg-gray-50 border-gray-200";

  const textStyle =
    type == ButtonType.Primary ? "text-white" : "text-typography-900";

  return (
    <TouchableOpacity
      className={`flex-1 rounded-md shadow-md mx-3 ${containerStyle}`}
    >
      <Text className={`text-center text-sm font-bold px-4 py-2 ${textStyle}`}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
