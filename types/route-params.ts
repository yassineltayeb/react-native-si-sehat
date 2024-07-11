import { RouteProp } from "@react-navigation/native";

// Define a type for the route parameters
export type RootStackParamList = {
    OTPCodeScreen: {
        phoneNumber: string
    };
};

// Define a type for the route object
export type OTPCodeScreenRouteProp = RouteProp<RootStackParamList, "OTPCodeScreen">;