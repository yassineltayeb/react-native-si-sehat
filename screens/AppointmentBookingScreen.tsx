import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppointmentTitle from "../components/appointment/AppointmentTitle";
import SubTitle from "../components/common/labels/SubTitle";
import TextFieldInput from "../components/common/inputs/TextFieldInput";
import FilterButton from "../components/home/FilterButton";
import { ButtonType } from "../enums/ButtonTypes.enum";
import MedicalSpecialtiesList from "../components/appointment/MedicalSpecialtiesList";

const AppointmentBookingScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-dark-900">
      <View className="m-4">
        <View className="">
          {/* Title */}
          <AppointmentTitle title="Medical Specialties" />
          <SubTitle title="Wide selection of doctor's specialties" />
          {/* Search */}
          <View className="flex flex-row justify-center items-center mt-4">
            <View className="flex-1 mr-2">
              <TextFieldInput
                icon="search"
                placeholder="symptoms, diseses..."
              />
            </View>
            <FilterButton
              type={ButtonType.Secondary}
              size={24}
              iconName="filter-sharp"
            />
          </View>
          {/* Medical Specialties */}
          <View>
            <MedicalSpecialtiesList />
          </View>
          <View></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AppointmentBookingScreen;
