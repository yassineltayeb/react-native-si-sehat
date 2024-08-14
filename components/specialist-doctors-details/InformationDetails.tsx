import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons"; // Adjust the import based on the icon library you're using
import { useColorScheme } from "nativewind";
import { ColorScheme } from "../../enums/ColorScheme.enum";
import SubTitle from "../common/labels/SubTitle";
import AppointmentTitle from "../appointment/AppointmentTitle";

interface InformationDetailsProps {
  iconName: any;
  title: string;
  information: string;
}

const InformationDetails: React.FC<InformationDetailsProps> = ({
  iconName,
  title,
  information,
}) => {
  const { colorScheme } = useColorScheme();

  return (
    <View>
      <View className="flex flex-row">
        <View className="mr-2">
          <Ionicons
            name={iconName}
            size={24}
            color={colorScheme === ColorScheme.Light ? "#254EDB" : "#4F73DF"}
          />
        </View>

        <SubTitle title={title} />
      </View>
      <AppointmentTitle title={information} />
    </View>
  );
};

export default InformationDetails;
