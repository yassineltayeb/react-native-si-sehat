import { Text, View } from "react-native";
import React, { useState } from "react";
import Title from "../components/common/labels/Title";
import SubTitle from "../components/common/labels/SubTitle";
import TermsAndConditionWithButton from "../components/common/shared/TermsAndConditionWithButton";
import { useRoute } from "@react-navigation/native";
import { OTPCodeScreenRouteProp } from "../types/route-params";
import OTPCodeInput from "../components/common/inputs/OTPCodeInput";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const OTPCodeScreen = () => {
  const route = useRoute<OTPCodeScreenRouteProp>();
  const { phoneNumber } = route.params;

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handelContinue = () => {};

  return (
    <View className="flex-1 bg-white dark:bg-dark-900">
      <View className="px-4 mt-4 flex-1 justify-between">
        <View>
          <Title title="Register" />
          <SubTitle
            title={`Enter the 6-digit that we have sent via the phone number to ${phoneNumber}`}
          />
          <OTPCodeInput />
          <MaterialIcons
            className="dark:text-primary-500 mt-6"
            name="timer"
            size={24}
            color="white"
          />
        </View>
        <TermsAndConditionWithButton
          onClick={handelContinue}
          buttonDisabled={buttonDisabled}
        />
      </View>
    </View>
  );
};

export default OTPCodeScreen;
