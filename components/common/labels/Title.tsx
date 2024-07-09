import { Text } from "react-native";
import React from "react";

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <Text className="font-bold text-2xl text-typography-800 dark:text-gray-50 mb-5">
      {title}
    </Text>
  );
};

export default Title;
