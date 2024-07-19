import { View, Text, TouchableOpacity } from "react-native";
import React, { ComponentProps } from "react";
import { ButtonType } from "../../../enums/ButtonTypes.enum";
import { Ionicons } from "@expo/vector-icons"; // Adjust the import based on the icon library you're using
import { useColorScheme } from "nativewind";

interface ButtonIconProps {
  text: string;
  type: string;
  iconName: ComponentProps<typeof Ionicons>["name"];
  onClick?: () => void;
}

const ButtonIcon: React.FC<ButtonIconProps> = ({
  text,
  type,
  iconName,
  onClick,
}) => {
  const { colorScheme, toggleColorScheme, setColorScheme } = useColorScheme();

  const containerStyle =
    type == ButtonType.Primary
      ? "bg-primary-500 dark:bg-primary-400 border-0"
      : "bg-gray-100 dark:bg-dark-800 border-gray-200";

  const textStyle =
    type == ButtonType.Primary
      ? "text-white"
      : "text-typography-900 dark:text-white";

  const iconColor =
    type == ButtonType.Primary
      ? "white"
      : colorScheme === "dark"
      ? "white"
      : "black";

  return (
    <TouchableOpacity
      onPress={onClick}
      activeOpacity={0.8}
      className={`flex-row items-center justify-center rounded-md shadow-md py-3 mb-4 border ${containerStyle}`}
    >
      <Ionicons name={iconName} size={16} color={iconColor} />
      <Text className={`font-manrope-bold text-center text-sm font-bold px-4 ${textStyle}`}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonIcon;
