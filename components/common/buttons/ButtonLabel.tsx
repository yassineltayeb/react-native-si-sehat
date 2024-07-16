import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { ButtonType } from "../../../enums/ButtonTypes.enum";

interface ButtonLabelProps {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
}

const ButtonLabel: React.FC<ButtonLabelProps> = ({
  text,
  disabled,
  onClick,
}) => {
  const containerDisabledStyle = disabled
    ? "text-gray-100 dark:text-gray-100"
    : "";
  return (
    <TouchableOpacity
      onPress={onClick}
      activeOpacity={0.8}
      className={`flex-row items-center justify-center border-0 bg-transparent`}
      disabled={disabled}
    >
      <Text
        className={`text-center text-sm font-medium px-1 text-primary-500 dark:text-primary-400 ${containerDisabledStyle}`}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonLabel;
