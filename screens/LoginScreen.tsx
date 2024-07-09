import { Image, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Title from "../components/common/labels/Title";
import SubTitle from "../components/common/labels/SubTitle";
import Button from "../components/common/buttons/Button";
import { ButtonType } from "../enums/ButtonTypes.enum";
import ButtonIcon from "../components/common/buttons/ButtonIcon";

const LoginScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-dark-900">
      <Image
        className="h-screen/2 w-screen"
        resizeMode="stretch"
        source={require("../assets/login/login.png")}
      />
      <View className="flex-1 px-3 mt-5">
        {/* Titles */}
        <Title title="Si - Sehat" />
        <SubTitle title="Begin your journey to better health!" />
        <View className="flex-1">
          {/* Buttons */}
          <View className="flex-1 mt-10">
            <Button
              text="Continue With Phone Number"
              type={ButtonType.Primary}
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
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
