import { View } from "react-native";
import React, { useEffect } from "react";
import TextFieldInput from "../components/common/inputs/TextFieldInput";
import FilterButton from "../components/home/FilterButton";
import { ButtonType } from "../enums/ButtonTypes.enum";
import ButtonLabel from "../components/common/buttons/ButtonLabel";
import { Ionicons } from "@expo/vector-icons"; // Adjust the import based on the icon library you're using
import { useColorScheme } from "nativewind";
import { ColorScheme } from "../enums/ColorScheme.enum";
import { useRoute, useNavigation } from "@react-navigation/native";
import SpecialistDoctorsList from "../components/specialist-doctors/SpecialistDoctorsList";
import { SpecialistDoctorsScreenRouteProp } from "../types/route-params";

const SpecialistDoctorsScreen = () => {
  const { colorScheme } = useColorScheme();
  const route = useRoute<SpecialistDoctorsScreenRouteProp>();
  const navigation = useNavigation();
  const { title } = route.params;

  useEffect(() => {
    navigation.setOptions({ title });
  }, [navigation, title]);

  return (
    <View className="flex-1 bg-white dark:bg-dark-900">
      <View className="m-4">
        <View className="">
          {/* Search */}
          <View className="flex flex-row justify-center items-center">
            <View className="flex-1 mr-2">
              <TextFieldInput icon="search" placeholder="Search Doctor" />
            </View>
            <FilterButton
              type={ButtonType.Secondary}
              size={24}
              iconName="filter-sharp"
            />
          </View>
          {/* Medical Specialties */}
          <SpecialistDoctorsList />
          <View></View>
        </View>
      </View>
    </View>
  );
};

export default SpecialistDoctorsScreen;
