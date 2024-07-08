import React from "react";
import { View } from "react-native";
import { Page } from "../models/onboarding/page.model";
import OnboardingScreenImagesList from "../components/onboarding/OnboardingScreenImagesList";
import OnboardingScreenPagination from "../components/onboarding/OnboardingScreenPagination";

const pages: Page[] = [
  {
    id: 1,
    image: require("../assets/onboarding/onboarding1.png"),
    title: "Welcome !",
    subTitle:
      "We will assist you in efficiently and easily scheduling appointments with doctors. Let's get started!",
  },
  {
    id: 2,
    image: require("../assets/onboarding/onboarding2.png"),
    title: "Choose Specialization",
    subTitle:
      "Select the medical specialization you need so we can tailor your experience.",
  },
  {
    id: 3,
    image: require("../assets/onboarding/onboarding3.png"),
    title: "Schedule Your First Appointment",
    subTitle:
      "Choose a suitable time and date to meet your preferred doctor. Begin your journey to better health!",
  },
];

const OnboardingScreen = () => {
  return (
    <View className="flex-1 bg-white justify-between">
      <View>
        <OnboardingScreenImagesList pages={pages} />
        <View className="mx-5">
          <OnboardingScreenPagination pages={pages} />
        </View>
      </View>
    </View>
  );
};

export default OnboardingScreen;
