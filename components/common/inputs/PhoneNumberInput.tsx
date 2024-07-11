import React, { useRef, useState } from "react";
import { StyleSheet, ViewStyle, View } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { Ionicons } from "@expo/vector-icons";

interface PhoneNumberInputProps {
  onChangeText: (formattedNumber: string) => void;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  onChangeText,
}) => {
  const phoneInputRef = useRef<PhoneInput>(null);

  const handleTextChange = (text: string) => {
    const code = phoneInputRef.current?.state.code;
    onChangeText(`${code}${text}`);
  };

  return (
    <PhoneInput
      ref={phoneInputRef}
      defaultCode="AE"
      containerStyle={styles.containerStyle}
      countryPickerButtonStyle={styles.countryPickerButtonStyle}
      codeTextStyle={styles.codeTextStyle}
      flagButtonStyle={styles.flagButtonStyle}
      textInputStyle={styles.textInputStyle}
      textContainerStyle={styles.textContainerStyle}
      textInputProps={{
        style: styles.textInputStyle,
        placeholderTextColor: "#A1A1AA",
      }}
      renderDropdownImage={
        <Ionicons name="chevron-down" size={16} color="#FDFDFD" />
      }
      placeholder="Enter phone number"
      onChangeText={handleTextChange}
    />
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#020E22",
    borderWidth: 1,
    borderColor: "#475467",
    borderRadius: 12,
    marginVertical: 8,
    width: "100%",
  } as ViewStyle,
  countryPickerButtonStyle: {} as ViewStyle,
  codeTextStyle: {
    color: "#FDFDFD",
    fontWeight: "500",
    fontSize: 16,
  },
  flagButtonStyle: {},
  textInputStyle: {
    fontWeight: "500",
    fontSize: 14,
    color: "#FDFDFD",
    marginTop: 1,
  },
  textContainerStyle: {
    backgroundColor: "#020E22",
    borderRadius: 12,
  },
});

export default PhoneNumberInput;
