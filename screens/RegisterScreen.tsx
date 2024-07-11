import { View } from "react-native";
import React, { useState } from "react";
import Title from "../components/common/labels/Title";
import SubTitle from "../components/common/labels/SubTitle";
import PhoneNumberInput from "../components/common/inputs/PhoneNumberInput";
import TermsAndConditionWithButton from "../components/common/shared/TermsAndConditionWithButton";

const RegisterScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const onPhoneNumberInputChanged = (value: string) => {
    setPhoneNumber(value);
    if (value.length == 13) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true)
    }
  };

  const handelContinue = () => {
    console.log("phoneNumber", phoneNumber);
  };

  return (
    <View className="flex-1 bg-white dark:bg-dark-900">
      <View className="px-4 mt-4 flex-1 justify-between">
        <View>
          <Title title="Register" />
          <SubTitle title="Please enter your number to continue your registration" />
          <PhoneNumberInput onChangeText={onPhoneNumberInputChanged} />
        </View>
        <TermsAndConditionWithButton
          onClick={handelContinue}
          buttonDisabled={buttonDisabled}
        />
      </View>
    </View>
  );
};

export default RegisterScreen;
