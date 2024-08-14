import { RouteProp } from "@react-navigation/native";
import { SpecialistDoctor } from "../models/appointment/specialist-doctor.model";

// Define a type for the route parameters
export type RootStackParamList = {
    OTPCodeScreen: {
        phoneNumber: string;
    };
    WelcomeScreen: {
        fullName: string;
    };
    SpecialistDoctorsScreen: {
        title: string;
    },
    SpecialistDoctorsDetailsScreen: {
        specialistDoctor: SpecialistDoctor;
    }
};

// Define a type for the route object
export type OTPCodeScreenRouteProp = RouteProp<RootStackParamList, "OTPCodeScreen">;
export type WelcomeScreenRouteProp = RouteProp<RootStackParamList, "WelcomeScreen">;
export type SpecialistDoctorsScreenRouteProp = RouteProp<RootStackParamList, "SpecialistDoctorsScreen">;
export type SpecialistDoctorsDetailsScreenRouteProp = RouteProp<RootStackParamList, "SpecialistDoctorsDetailsScreen">;