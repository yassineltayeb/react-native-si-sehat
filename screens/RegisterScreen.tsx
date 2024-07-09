import { View, Text } from "react-native";
import React from "react";
import Title from "../components/common/labels/Title";
import SubTitle from "../components/common/labels/SubTitle";

const RegisterScreen = () => {
  return (
    <View className="flex-1 bg-white dark:bg-dark-900">
      <View className="px-4 mt-4">
        <Title title="Register" />
        <SubTitle title="Please enter yout number to continue your registration" />
      </View>
    </View>
  );
};

export default RegisterScreen;
