import { RouteProp } from "@react-navigation/native";

// Define a type for the route parameters
export type RootStackParamList = {
    OTPCodeScreen: {
        phoneNumber: string;
    };
    WelcomeScreen: {
        fullName: string;
    };
};

// Define a type for the route object
export type OTPCodeScreenRouteProp = RouteProp<RootStackParamList, "OTPCodeScreen">;
export type WelcomeScreenRouteProp = RouteProp<RootStackParamList, "WelcomeScreen">;