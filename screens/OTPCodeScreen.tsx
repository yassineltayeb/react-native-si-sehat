import { Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Title from "../components/common/labels/Title";
import SubTitle from "../components/common/labels/SubTitle";
import TermsAndConditionWithButton from "../components/common/shared/TermsAndConditionWithButton";
import { useNavigation, useRoute } from "@react-navigation/native";
import { OTPCodeScreenRouteProp } from "../types/route-params";
import OTPCodeInput from "../components/common/inputs/OTPCodeInput";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import KeyboardAvoiding from "../components/common/shared/KeyboardAvoiding";
import ButtonLabel from "../components/common/buttons/ButtonLabel";
import { VerifyOTPRequest } from "../types/phone-verification/verify-otp";
import phoneVerificationApi from "../api/phone-verification.api";
import toast from "../utils/toast";

const OTPCodeScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<OTPCodeScreenRouteProp>();
  const { phoneNumber } = route.params;
  const [otpCode, setOTPCode] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [resendButtonDisabled, setResendButtonDisabled] = useState(true);
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      setResendButtonDisabled(false);
    }
  }, [timer]);

  const handleTextChange = (text: string) => {
    setOTPCode(text);
    setButtonDisabled(text.length !== 6);
  };

  const handelContinue = () => {
    verifyOtp();
  };

  const verifyOtp = async () => {
    try {
      const verifyOTPRequest: VerifyOTPRequest = {
        phoneNumber: phoneNumber,
        otp: Number(otpCode),
      };

      console.log(verifyOTPRequest);

      const response = await phoneVerificationApi.verifyOtp(verifyOTPRequest);
      navigation.navigate("UserRegisterScreen", { phoneNumber });

      console.log(response);
    } catch (error) {
      toast.error("OTP Verification", "failed to verify otp");
      console.log(error);
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <KeyboardAvoiding>
      <View className="flex-1 bg-white dark:bg-dark-900">
        <View className="px-4 mt-4 flex-1 justify-between">
          <View>
            <Title title="Register" />
            <SubTitle
              title={`Enter the 6-digit that we have sent via the phone number to ${phoneNumber}`}
            />
            <OTPCodeInput onTextChange={handleTextChange} />
            <View className="flex-row mt-4 items-center">
              <MaterialIcons name="timer" size={20} color="#254EDB" />
              <Text className="ml-1 font-bold text-xs text-typography-700 dark:text-typography-200">
                {formatTime(timer)}
              </Text>
            </View>
          </View>
          <View>
            <View className="mb-4">
              <ButtonLabel text="Resend Code" disabled={resendButtonDisabled} />
            </View>
            <TermsAndConditionWithButton
              onClick={handelContinue}
              buttonDisabled={buttonDisabled}
            />
          </View>
        </View>
      </View>
    </KeyboardAvoiding>
  );
};

export default OTPCodeScreen;
