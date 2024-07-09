import { Text } from "react-native";
import React from "react";

interface SubTitleProps {
  title: string;
}

const SubTitle: React.FC<SubTitleProps> = ({ title }) => {
  return (
    <Text className="font-medium text-md text-typography-800 dark:text-gray-50">
      {title}
    </Text>
  );
};

export default SubTitle;
