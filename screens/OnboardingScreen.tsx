import React from "react";
import { View } from "react-native";
import { Page } from "../models/onboarding/page.model";
import OnboardingScreenImagesList from "../components/onboarding/OnboardingScreenImagesList";
import OnboardingScreenPagination from "../components/onboarding/OnboardingScreenPagination";
import Button from "../components/common/buttons/Button";
import { ButtonType } from "../enums/ButtonTypes.enum";
import { SafeAreaView } from "react-native-safe-area-context";

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
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <OnboardingScreenImagesList pages={pages} />
        <OnboardingScreenPagination pages={pages} />
        <View className="flex-row justify-between mb-5">
          <Button text="Skip" type={ButtonType.Secondary} />
          <Button text="Next" type={ButtonType.Primary} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
