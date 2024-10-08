import React, { useEffect } from "react";
import { View } from "react-native";
import { Page } from "../models/onboarding/page.model";
import OnboardingScreenImagesList from "../components/onboarding/OnboardingScreenImagesList";
import OnboardingScreenPagination from "../components/onboarding/OnboardingScreenPagination";
import Button from "../components/common/buttons/Button";
import { ButtonType } from "../enums/ButtonTypes.enum";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { changeIndex, nextIndex } from "../store/onboarding-slice";
import { RootState } from "../store/store";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
  const selectedIndex = useSelector((state: RootState) => state.onboarding);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const goToFirstScreen = async () => {
    try {
      await AsyncStorage.setItem("isFirstLaunch", "false");
      navigation.navigate("FirstScreen");
    } catch (e) {
    }
  };

  const goToNextPage = () => {
    dispatch(nextIndex());
  };

  const onSkip = () => {
    dispatch(changeIndex(pages.length - 1));
  };

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-dark-900">
      <View className="flex-1 bg-white dark:bg-dark-900">
        <OnboardingScreenImagesList pages={pages} />
        <OnboardingScreenPagination pages={pages} />

        {selectedIndex == 2 ? (
          <View className="flex-row justify-between mb-5">
            <View className="flex-1 mx-3">
              <Button
                text="Get Started !"
                type={ButtonType.Primary}
                onClick={goToFirstScreen}
              />
            </View>
          </View>
        ) : (
          <View className="flex-row justify-between mb-5">
            <View className="flex-1 mx-3">
              <Button
                text="Skip"
                type={ButtonType.Secondary}
                onClick={onSkip}
              />
            </View>
            <View className="flex-1 mx-3">
              <Button
                text="Next"
                type={ButtonType.Primary}
                onClick={goToNextPage}
              />
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
