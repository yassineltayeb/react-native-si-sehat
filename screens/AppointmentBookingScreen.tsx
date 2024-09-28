import { View } from "react-native";
import React, { useState } from "react";
import AppointmentTitle from "../components/appointment/AppointmentTitle";
import SubTitle from "../components/common/labels/SubTitle";
import TextFieldInput from "../components/common/inputs/TextFieldInput";
import FilterButton from "../components/home/FilterButton";
import { ButtonType } from "../enums/ButtonTypes.enum";
import MedicalSpecialtiesList from "../components/appointment/MedicalSpecialtiesList";
import ButtonLabel from "../components/common/buttons/ButtonLabel";
import { Ionicons } from "@expo/vector-icons"; // Adjust the import based on the icon library you're using
import { useColorScheme } from "nativewind";
import { ColorScheme } from "../enums/ColorScheme.enum";

const AppointmentBookingScreen = () => {
  const { colorScheme } = useColorScheme();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <View className="flex-1 bg-white dark:bg-dark-900">
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
                onChangeText={(value) => setSearchTerm(value)}
              />
            </View>
            <FilterButton
              type={ButtonType.Secondary}
              size={24}
              iconName="filter-sharp"
            />
          </View>
          {/* Medical Specialties */}
          <MedicalSpecialtiesList searchTerm={searchTerm} />
          {/* <View className="flex flex-row items-center">
            <View className="mr-3">
              <ButtonLabel text="See More" />
            </View>
            <Ionicons
              name="chevron-forward-outline"
              size={23}
              color={colorScheme === ColorScheme.Light ? "#254EDB" : "#4F73DF"}
            />
          </View> */}
          <View></View>
        </View>
      </View>
    </View>
  );
};

export default AppointmentBookingScreen;
