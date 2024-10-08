import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useColorScheme } from "nativewind";
import { ColorScheme } from "../../../enums/ColorScheme.enum";
import { Ionicons } from "@expo/vector-icons"; // Adjust the import based on the icon library you're using

interface TextFieldInputProps {
  label?: string;
  icon?: any;
  placeholder?: string;
  secure?: boolean;
  onChangeText?: (text: string) => void;
}

const TextFieldInput: React.FC<TextFieldInputProps> = ({
  label,
  icon,
  placeholder,
  secure = false,
  onChangeText,
}) => {
  const { colorScheme } = useColorScheme();
  const [isSecure, setIsSecure] = useState(secure);

  const toggleSecureEntry = () => {
    setIsSecure((prev) => !prev);
  };

  return (
    <View>
      {label && (
        <Text className="font-manrope-medium font-medium text-sm text-typography-900 mb-2 dark:text-[#FDFDFD]">
          {label}
        </Text>
      )}
      <View className="flex-row justify-center items-center bg-white border border-gray-300 rounded-xl p-3 mb-4 dark:bg-dark">
        {icon && (
          <View className="mr-3">
            <Ionicons
              className="mr-3"
              name={icon}
              size={24}
              color={colorScheme === ColorScheme.Light ? "#71717A" : "#A1A1AA"}
            />
          </View>
        )}
        <TextInput
          className="font-manrope-medium flex-1 font-medium text-sm text-typography-900 dark:text-[#FDFDFD]"
          placeholder={placeholder}
          placeholderTextColor={
            colorScheme === ColorScheme.Light ? "#71717A" : "#A1A1AA"
          }
          secureTextEntry={isSecure}
          onChangeText={onChangeText}
        />
        {secure && (
          <TouchableOpacity
            onPressIn={toggleSecureEntry}
            onPressOut={toggleSecureEntry}
          >
            <Ionicons
              name={isSecure ? "eye-off" : "eye"}
              size={24}
              color={colorScheme === ColorScheme.Light ? "#71717A" : "#A1A1AA"}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default TextFieldInput;
