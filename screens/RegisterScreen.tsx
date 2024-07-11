import { View } from "react-native";
import React from "react";
import Title from "../components/common/labels/Title";
import SubTitle from "../components/common/labels/SubTitle";
import PhoneNumberInput from "../components/common/inputs/PhoneNumberInput";

const RegisterScreen = () => {
  const onPhoneNumberInputChanged = (value: string) => {
    console.log(value);
  };

  return (
    <View className="flex-1 bg-white dark:bg-dark-900">
      <View className="px-4 mt-4">
        <Title title="Register" />
        <SubTitle title="Please enter your number to continue your registration" />
        <PhoneNumberInput onChangeText={onPhoneNumberInputChanged} />
      </View>
    </View>
  );
};

export default RegisterScreen;
