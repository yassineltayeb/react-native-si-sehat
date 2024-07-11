import { View } from "react-native";
import React from "react";
import Title from "../components/common/labels/Title";
import SubTitle from "../components/common/labels/SubTitle";
import PhoneNumberInput from "../components/common/inputs/PhoneNumberInput";
import TermsAndConditionWithButton from "../components/common/shared/TermsAndConditionWithButton";

const RegisterScreen = () => {
  const onPhoneNumberInputChanged = (value: string) => {
    console.log(value);
  };

  return (
    <View className="flex-1 bg-white dark:bg-dark-900">
      <View className="px-4 mt-4 flex-1 justify-between">
        <View>
          <Title title="Register" />
          <SubTitle title="Please enter your number to continue your registration" />
          <PhoneNumberInput onChangeText={onPhoneNumberInputChanged} />
        </View>
        <TermsAndConditionWithButton />
      </View>
    </View>
  );
};

export default RegisterScreen;
