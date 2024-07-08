import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ButtonType } from "../../../enums/ButtonTypes.enum";

interface ButtonProps {
  text: string;
  type: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, type }) => {
  const style =
    type == ButtonType.Primary
      ? "text-white bg-primary-500"
      : "text-white bg-gray-50 border-gray-200";
  return (
    <TouchableOpacity className="flex-1">
      <Text className={`text-center px-4 py-2 rounded-md shadow-md ${style}`}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
