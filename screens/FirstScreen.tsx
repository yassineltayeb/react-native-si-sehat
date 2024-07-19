import { Image, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Title from "../components/common/labels/Title";
import SubTitle from "../components/common/labels/SubTitle";
import Button from "../components/common/buttons/Button";
import { ButtonType } from "../enums/ButtonTypes.enum";
import ButtonIcon from "../components/common/buttons/ButtonIcon";
import ButtonLabel from "../components/common/buttons/ButtonLabel";
import { useNavigation } from "@react-navigation/native";
import TermsAndCondition from "../components/common/shared/TermsAndCondition";

const FirstScreen = () => {
  const navigation = useNavigation();

  const continueWithPhoneNumber = () => {
    navigation.navigate("RegisterScreen");
  };

  const onClickSignIn = () => {
    navigation.navigate("LoginScreen");
  };

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-dark-900 items-center">
      <View className="flex-1">
        <Image
          className="h-screen/2 w-screen"
          resizeMode="stretch"
          source={require("../assets/login/login.png")}
        />
        <View className="flex-1 px-3 mt-5">
          {/* Titles */}
          <Title title="Si - Sehat" />
          <SubTitle title="Begin your journey to better health!" />
          {/* Buttons */}
          <View className="mt-10">
            <Button
              text="Continue With Phone Number"
              type={ButtonType.Primary}
              onClick={continueWithPhoneNumber}
            />
            <ButtonIcon
              text="Continue with Google"
              type={ButtonType.Secondary}
              iconName="logo-google"
              onClick={() => {}}
            />
            <ButtonIcon
              text="Continue with Apple"
              type={ButtonType.Primary}
              iconName="logo-apple"
              onClick={() => {}}
            />
          </View>
          <View className="flex-row items-center justify-center">
            <SubTitle title="Already have an account?" />
            <ButtonLabel text="Sign In" onClick={onClickSignIn} />
          </View>
        </View>
      </View>
      <TermsAndCondition />
    </SafeAreaView>
  );
};

export default FirstScreen;
