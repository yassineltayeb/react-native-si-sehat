import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import AppointmentTitle from "./AppointmentTitle";
import SubTitle from "../common/labels/SubTitle";
import { Ionicons } from "@expo/vector-icons"; // Adjust the import based on the icon library you're using
import { useColorScheme } from "nativewind";
import { ColorScheme } from "../../enums/ColorScheme.enum";
import { useNavigation } from "@react-navigation/native";
import { GetSpecializationsResponse } from "../../types/specializations/get-specializations";

interface MedicalSpecialtyItemProps {
  medicalSpecialty: GetSpecializationsResponse;
}

const MedicalSpecialtyItem: React.FC<MedicalSpecialtyItemProps> = ({
  medicalSpecialty,
}) => {
  const { colorScheme } = useColorScheme();
  const navigation = useNavigation();

  const navigateToScreen = (title: string) => {
    navigation.navigate("SpecialistDoctorsScreen", { title });
  };
  
  return (
    <TouchableOpacity
      onPress={() => navigateToScreen(medicalSpecialty.name)}
      activeOpacity={0.8}
      className="mb-5"
    >
      <View className="flex flex-row justify-between items-center">
        <View className="flex flex-row">
          <View className="flex flex-row">
            {/* Icon */}
            <View className="bg-primary-50 dark:bg-primary-900 border border-primary-100 dark:border-primary-800 rounded-full h-[52] w-[52] justify-center items-center">
              <Text className="font-manrope-bold font-bold text-3xl">
                {medicalSpecialty.imageUrl}
              </Text>
            </View>
            <View className="ml-4">
              <AppointmentTitle title={medicalSpecialty.name} />
              <View className="mt-1">
                <SubTitle title={medicalSpecialty.description} />
              </View>
            </View>
          </View>
        </View>
        <View>
          <Ionicons
            name="chevron-forward-outline"
            size={24}
            color={colorScheme === ColorScheme.Light ? "#254EDB" : "#4F73DF"}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MedicalSpecialtyItem;
