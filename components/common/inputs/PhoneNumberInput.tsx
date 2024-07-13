import React, { useRef } from "react";
import PhoneInput from "react-native-phone-number-input";
import { Ionicons } from "@expo/vector-icons";
import tw from "../../../lib/tailwind";
import { useColorScheme } from "nativewind";
import { ColorScheme } from "../../../enums/ColorScheme.enum";

interface PhoneNumberInputProps {
  onChangeText: (formattedNumber: string) => void;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  onChangeText,
}) => {
  const { colorScheme } = useColorScheme();
  const phoneInputRef = useRef<PhoneInput>(null);

  const handleTextChange = (text: string) => {
    const code = phoneInputRef.current?.state.code;
    onChangeText(`+${code}${text}`);
  };

  return (
    <PhoneInput
      ref={phoneInputRef}
      defaultCode="AE"
      containerStyle={tw`justify-center items-center bg-[white] border border-[#475467] rounded-xl my-2 w-full dark:bg-[#020E22]`}
      codeTextStyle={tw`text-typography-900 dark:text-[#FDFDFD] font-medium text-base`}
      textContainerStyle={tw`bg-white dark:bg-[#020E22] rounded-xl`}
      textInputStyle={tw`font-medium text-sm text-typography-900 dark:text-[#FDFDFD] mt-0.5`}
      textInputProps={{
        style: tw`font-medium text-sm text-typography-900 dark:text-[#FDFDFD] mt-0.5`,
        placeholderTextColor:
          colorScheme == ColorScheme.Light ? "#71717A" : "#A1A1AA",
      }}
      renderDropdownImage={
        <Ionicons
          name="chevron-down"
          size={16}
          color={colorScheme === ColorScheme.Light ? "black" : "#FDFDFD"}
        />
      }
      placeholder="Enter phone number"
      onChangeText={handleTextChange}
    />
  );
};

export default PhoneNumberInput;
