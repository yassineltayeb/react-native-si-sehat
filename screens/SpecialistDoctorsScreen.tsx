import { ScrollView, View } from "react-native";
import React, { useEffect } from "react";
import TextFieldInput from "../components/common/inputs/TextFieldInput";
import FilterButton from "../components/home/FilterButton";
import { ButtonType } from "../enums/ButtonTypes.enum";
import { useRoute, useNavigation } from "@react-navigation/native";
import SpecialistDoctorsList from "../components/specialist-doctors/SpecialistDoctorsList";
import { SpecialistDoctorsScreenRouteProp } from "../types/route-params";
import { LabelKeyValuePairs } from "../models/shared/label-key-value-pairs.model";
import DropdownInput from "../components/common/inputs/DropdownInput";
import tw from "../lib/tailwind";
import DropdownComponent from "../components/common/inputs/DropdownComponent";

const availability: LabelKeyValuePairs[] = [
  {
    label: "Available Today",
    value: "Available Today",
  },
  {
    label: "Available Tomorrow",
    value: "Available Tomorrow",
  },
];

const genders: LabelKeyValuePairs[] = [
  {
    label: "Male",
    value: "Male",
  },
  {
    label: "Female",
    value: "Female",
  },
];

const SpecialistDoctorsScreen = () => {
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
          <ScrollView
            style={tw``}
            horizontal={true}
            contentContainerStyle={tw`gap-4 mb-8`}
          >
            <DropdownComponent
              items={availability}
              placeholder="Availability"
              onValueChange={() => {}}
            />
            <DropdownComponent
              items={genders}
              placeholder="Gender"
              onValueChange={() => {}}
            />
          </ScrollView>
          {/* Medical Specialties */}
          <SpecialistDoctorsList />
          <View></View>
        </View>
      </View>
    </View>
  );
};

export default SpecialistDoctorsScreen;
