import { FlatList } from "react-native";
import React from "react";
import { MedicalSpecialty } from "../../models/appointment/medical-specialty.model";
import SpecialistDoctorsItem from "./SpecialistDoctorsItem";
import { SpecialistDoctor } from "../../models/appointment/specialist-doctor.model";

const specialistDoctors: SpecialistDoctor[] = [
  {
    id: 1,
    name: "Dr. Patricia Ahoy",
    specialty: "Ear, Nose & Throat specialist",
    price: 120,
    rating: 4.5,
    image: require("../../assets/specialist-doctors/doctor-1.png"),
  },
  {
    id: 2,
    name: "Dr. Stone Gaze",
    specialty: "Ear, Nose & Throat specialist",
    price: 120,
    rating: 4.5,
    image: require("../../assets/specialist-doctors/doctor-2.png"),
  },
  {
    id: 3,
    name: "Dr. Wahyu",
    specialty: "Ear, Nose & Throat specialist",
    price: 120,
    rating: 4.5,
    image: require("../../assets/specialist-doctors/doctor-3.png"),
  },
  {
    id: 4,
    name: "Dr. Reza Razor",
    specialty: "Ear, Nose & Throat specialist",
    price: 120,
    rating: 4.5,
    image: require("../../assets/specialist-doctors/doctor-4.png"),
  },
  {
    id: 5,
    name: "Dr. Jacky Cun",
    specialty: "Ear, Nose & Throat specialist",
    price: 120,
    rating: 4.5,
    image: require("../../assets/specialist-doctors/doctor-5.png"),
  },
];

const SpecialistDoctorsList = () => {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={specialistDoctors}
      renderItem={({ item }) => (
        <SpecialistDoctorsItem specialistDoctor={item} />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default SpecialistDoctorsList;
