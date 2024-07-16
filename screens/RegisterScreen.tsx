import { View, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import React, { useState } from "react";
import Title from "../components/common/labels/Title";
import SubTitle from "../components/common/labels/SubTitle";
import PhoneNumberInput from "../components/common/inputs/PhoneNumberInput";
import TermsAndConditionWithButton from "../components/common/shared/TermsAndConditionWithButton";
import { useNavigation } from "@react-navigation/native";
import KeyboardAvoiding from "../components/common/shared/KeyboardAvoiding";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const onPhoneNumberInputChanged = (value: string) => {
    setPhoneNumber(value);
    setButtonDisabled(value.length !== 13);
  };

  const handleContinue = () => {
    navigation.navigate("OTPCodeScreen", { phoneNumber });
  };

  return (
    <KeyboardAvoiding>
      <View className="flex-1 bg-white dark:bg-dark-900">
        <View className="px-4 mt-4 flex-1 justify-between">
          <View>
            <Title title="Register" />
            <SubTitle title="Please enter your number to continue your registration" />
            <PhoneNumberInput onChangeText={onPhoneNumberInputChanged} />
          </View>
          <TermsAndConditionWithButton
            onClick={handleContinue}
            buttonDisabled={buttonDisabled}
          />
        </View>
      </View>
    </KeyboardAvoiding>
  );
};

export default RegisterScreen;
