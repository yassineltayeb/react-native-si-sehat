import { Text } from "react-native";
import React from "react";

interface AppointmentTitleProps {
  title: string;
}

const AppointmentTitle: React.FC<AppointmentTitleProps> = ({ title }) => {
  return (
    <>
      <Text className="font-manrope-bold font-bold text-base text-typography-800 dark:text-gray-50">
        {title}
      </Text>
    </>
  );
};

export default AppointmentTitle;
