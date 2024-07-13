import { useColorScheme } from "nativewind";
import React, { useEffect } from "react";
import { View } from "react-native";
import OTPTextView from "react-native-otp-textinput";
import { ColorScheme } from "../../../enums/ColorScheme.enum";
import tw from "../../../lib/tailwind";

const OTPCodeInput = () => {
  const { colorScheme } = useColorScheme();

  const textInputColorScheme = {
    borderColor: colorScheme === ColorScheme.Light ? "#D2D6DB" : "#475467",
  };

  return (
    <View className="border-1">
      <OTPTextView
        inputCount={6}
        tintColor={"#254EDB"}
        offTintColor={colorScheme === ColorScheme.Light ? "#D2D6DB" : "#475467"}
        textInputStyle={tw`font-bold text-base border-4 rounded-xl text-typography-900 dark:text-typography-100 bg-[#FDFDFD] dark:bg-dark-800 border-typography-50 dark:border-[#475467]`}
        autoFocus={true}
        secureTextEntry={true}
      />
    </View>
  );
};

export default OTPCodeInput;
