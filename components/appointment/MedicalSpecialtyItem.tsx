import { View, Text } from "react-native";
import React from "react";
import { MedicalSpecialty } from "../../models/appointment/medical-specialty.model";
import AppointmentTitle from "./AppointmentTitle";
import SubTitle from "../common/labels/SubTitle";

interface MedicalSpecialtyItemProps {
  medicalSpecialty: MedicalSpecialty;
}

const MedicalSpecialtyItem: React.FC<MedicalSpecialtyItemProps> = ({
  medicalSpecialty,
}) => {
  return (
    <View className="my-5">
      <View className="flex flex-row">
        {/* Icon */}
        <View className="bg-primary-50 dark:bg-primary-900 border border-primary-100 dark:border-primary-800 rounded-full h-[52] w-[52] justify-center items-center">
          <Text className="font-manrope-bold font-bold text-3xl">
            {medicalSpecialty.image}
          </Text>
        </View>
        <View className="ml-4">
          <AppointmentTitle title={medicalSpecialty.title} />
          <View className="mt-1">
            <SubTitle title={medicalSpecialty.description} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default MedicalSpecialtyItem;
