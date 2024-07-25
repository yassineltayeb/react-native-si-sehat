import { View, TouchableOpacity, Image } from "react-native";
import React from "react";
import SubTitle from "../common/labels/SubTitle";
import { Ionicons } from "@expo/vector-icons"; // Adjust the import based on the icon library you're using
import { useColorScheme } from "nativewind";
import { ColorScheme } from "../../enums/ColorScheme.enum";
import { useNavigation } from "@react-navigation/native";
import AppointmentTitle from "../appointment/AppointmentTitle";
import { SpecialistDoctor } from "../../models/appointment/specialist-doctor.model";

interface SpecialistDoctorsItemProps {
  specialistDoctor: SpecialistDoctor;
}

const SpecialistDoctorsItem: React.FC<SpecialistDoctorsItemProps> = ({
  specialistDoctor,
}) => {
  const { colorScheme } = useColorScheme();
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => {}} activeOpacity={0.8} className="my-5">
      <View className="flex flex-row justify-between items-start">
        <View className="flex flex-row">
          <View className="flex flex-row">
            {/* Icon */}
            <View className="bg-primary-50 dark:bg-primary-900 border border-primary-100 dark:border-primary-800 rounded-2xl h-[48] w-[48] justify-center items-center overflow-hidden">
              <Image
                className="h-full w-full"
                resizeMode="contain"
                source={specialistDoctor.image}
              />
            </View>
            <View className="ml-4">
              <AppointmentTitle title={specialistDoctor.name} />
              <View className="mt-1">
                <SubTitle title={specialistDoctor.specialty} />
              </View>
              <AppointmentTitle title={`AED ${specialistDoctor.price}`} />
            </View>
          </View>
        </View>
        <View className="flex flex-row">
          <Ionicons
            name="star-sharp"
            size={20}
            color={colorScheme === ColorScheme.Light ? "#F38744" : "#EF6820"}
          />
          <View className="ml-2">
            <SubTitle title={specialistDoctor.rating.toString()} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SpecialistDoctorsItem;
