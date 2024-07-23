import { Text, TouchableOpacity } from "react-native";
import React, { ComponentProps } from "react";
import { ButtonType } from "../../../enums/ButtonTypes.enum";
import { Ionicons } from "@expo/vector-icons"; // Adjust the import based on the icon library you're using
import { useColorScheme } from "nativewind";
import { Size } from "../../../enums/Size.enum";

interface IconButtonProps {
  type: string;
  size: number;
  iconName: ComponentProps<typeof Ionicons>["name"];
  containerSize?: string;
  onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({
  type,
  size,
  iconName,
  containerSize,
  onClick,
}) => {
  const { colorScheme, toggleColorScheme, setColorScheme } = useColorScheme();

  const containerStyle =
    type == ButtonType.Primary
      ? "bg-primary-500 dark:bg-primary-400 border-0"
      : "bg-gray-100 dark:bg-dark-800 border-gray-200";

  const iconColor =
    type == ButtonType.Primary
      ? "white"
      : colorScheme === "dark"
      ? "white"
      : "black";

  let padding = "p-2";
  if (containerSize === Size.Medium) padding = "p-3.5";
  if (containerSize === Size.Large) padding = "p-4";

  return (
    <TouchableOpacity
      onPress={onClick}
      activeOpacity={0.8}
      className={`rounded-lg shadow-md ${padding} mb-4 border ${containerStyle}`}
    >
      <Ionicons name={iconName} size={size} color={iconColor} />
    </TouchableOpacity>
  );
};

export default IconButton;
