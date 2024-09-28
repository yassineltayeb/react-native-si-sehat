import { ActivityIndicator, FlatList, View } from "react-native";
import React, { useEffect, useState } from "react";
import MedicalSpecialtyItem from "./MedicalSpecialtyItem";
import specializationsApi from "../../api/specializations.api";
import toast from "../../utils/toast";
import { GetSpecializationsResponse } from "../../types/specializations/get-specializations";
import SubTitle from "../common/labels/SubTitle";

interface MedicalSpecialtiesListProps {
  searchTerm: string;
}

const MedicalSpecialtiesList: React.FC<MedicalSpecialtiesListProps> = ({
  searchTerm,
}) => {
  const [medicalSpecialties, setMedicalSpecialties] = useState<
    Array<GetSpecializationsResponse>
  >([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSpecialties();
  }, [searchTerm]);

  const getSpecialties = async () => {
    try {
      setIsLoading(true);
      const response = await specializationsApi.getSpecializations(searchTerm);
      setMedicalSpecialties(response);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error(
        "Medical Specializations",
        "Unable to retrieve specializations, please try again later"
      );
      console.log(error);
    }
  };

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center mt-5">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (medicalSpecialties.length === 0) {
    return (
      <View className="justify-center items-center mt-5">
        <SubTitle title="No specializations found" />
      </View>
    );
  }

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={medicalSpecialties}
      renderItem={({ item }) => (
        <MedicalSpecialtyItem medicalSpecialty={item} />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default MedicalSpecialtiesList;
