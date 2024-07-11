import { View } from "react-native";
import React from "react";
import ButtonLabel from "../buttons/ButtonLabel";
import SubTitle from "../labels/SubTitle";

const TermsAndCondition = () => {
  return (
    <View className="justify-center item-center mb-5">
      <SubTitle title="By signing up or logging in, I accept the apps " />
      <View className="flex-row justify-center items-center">
        <ButtonLabel text="Terms of Service" />
        <SubTitle title=" and " />
        <ButtonLabel text="Privacy Policy" />
      </View>
    </View>
  );
};

export default TermsAndCondition;
