import { Text, TouchableOpacity } from "react-native";
import React, { ComponentProps } from "react";
import { Ionicons } from "@expo/vector-icons"; // Adjust the import based on the icon library you're using
import { useColorScheme } from "nativewind";
import { ButtonType } from "../../enums/ButtonTypes.enum";

interface IconButtonProps {
  type: string;
  size: number;
  iconName: ComponentProps<typeof Ionicons>["name"];
  onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({
  type,
  size,
  iconName,
  onClick,
}) => {
  const { colorScheme, toggleColorScheme, setColorScheme } = useColorScheme();

  const iconColor =
      colorScheme === "light"
      ? "#254EDB"
      : "#4F73DF";

  return (
    <TouchableOpacity
      onPress={onClick}
      activeOpacity={0.8}
      className={`justify-center items-center rounded-lg h-[51] w-[51] mb-4 bg-primary-50 dark:bg-primary-900`}
    >
      <Ionicons name={iconName} size={size} color={iconColor} />
    </TouchableOpacity>
  );
};

export default IconButton;
