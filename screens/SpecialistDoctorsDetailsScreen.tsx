import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SpecialistDoctorsDetailsScreenRouteProp } from "../types/route-params";
import SpecialistDoctorsItem from "../components/specialist-doctors/SpecialistDoctorsItem";
import InformationDetails from "../components/specialist-doctors-details/InformationDetails";

const SpecialistDoctorsDetailsScreen = () => {
  const route = useRoute<SpecialistDoctorsDetailsScreenRouteProp>();
  const navigation = useNavigation();
  const { specialistDoctor } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: specialistDoctor.specialty });
  }, [navigation, specialistDoctor]);

  return (
    <View className="flex-1 bg-white dark:bg-dark-900">
      <View className="m-4">
        {/* Information Header */}
        <SpecialistDoctorsItem
          specialistDoctor={specialistDoctor}
          isTouchDisabled
          isRatingHidden
        />
        {/* Information Details */}
        <View className="flex flex-row justify-around items-center">
          <InformationDetails
            iconName="time-sharp"
            title="Hospital"
            information="RS. Hermina"
          />
          <InformationDetails
            iconName="time-sharp"
            title="Hospital"
            information="RS. Hermina"
          />
        </View>
      </View>
    </View>
  );
};

export default SpecialistDoctorsDetailsScreen;
