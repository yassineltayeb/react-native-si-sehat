import { FlatList } from "react-native";
import React from "react";
import MedicalSpecialtyItem from "./MedicalSpecialtyItem";
import { MedicalSpecialty } from "../../models/appointment/medical-specialty.model";

const medicalSpecialties: MedicalSpecialty[] = [
  {
    id: 1,
    title: "Ear, Nose & Throat",
    description: "Wide selection of doctor's specialties",
    image: "👂🏻",
  },
  {
    id: 2,
    title: "Psychiatrist",
    description: "Wide selection of doctor's specialties",
    image: "🧠",
  },
  {
    id: 3,
    title: "Dentist",
    description: "Wide selection of doctor's specialties",
    image: "🦷",
  },
  {
    id: 4,
    title: "Dermato-venereologia",
    description: "Wide selection of doctor's specialties",
    image: "🤌",
  },
];

const MedicalSpecialtiesList = () => {
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
