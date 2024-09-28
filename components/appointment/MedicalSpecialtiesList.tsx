import { FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import MedicalSpecialtyItem from "./MedicalSpecialtyItem";
import specializationsApi from "../../api/specializations.api";
import toast from "../../utils/toast";
import { GetSpecializationsResponse } from "../../types/specializations/get-specializations";

interface MedicalSpecialtiesListProps {
  searchTerm: string;
}

const MedicalSpecialtiesList: React.FC<MedicalSpecialtiesListProps> = ({
  searchTerm,
}) => {
  const [medicalSpecialties, setMedicalSpecialties] = useState<
    Array<GetSpecializationsResponse>
  >([]);
  useEffect(() => {
    getSpecialties();
  }, [searchTerm]);

  const getSpecialties = async () => {
    try {
      const response = await specializationsApi.getSpecializations(searchTerm);
      setMedicalSpecialties(response);
    } catch (error) {
      toast.error(
        "Medical Specializations",
        "Unable to retrieve specializations, please try again later"
      );
      console.log(error);
    }
  };

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
