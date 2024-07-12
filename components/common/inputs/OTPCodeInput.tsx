import { useColorScheme } from "nativewind";
import React from "react";
import { StyleSheet, ViewStyle } from "react-native";
import OTPTextView from "react-native-otp-textinput";
import { ColorScheme } from "../../../enums/ColorScheme.enum";

const OTPCodeInput = () => {
  const { colorScheme } = useColorScheme();

  const textInputColorScheme = {
    color: colorScheme === ColorScheme.Light ? "#18181B" : "#FDFDFD",
    backgroundColor: colorScheme === ColorScheme.Light ? "#FDFDFD" : "#1D2939",
    borderColor: colorScheme === ColorScheme.Light ? "#D2D6DB" : "#475467",
  };

  return (
    <OTPTextView
      inputCount={6}
      tintColor={colorScheme === ColorScheme.Light ? "#254EDB" : "#254EDB"}
      offTintColor={colorScheme === ColorScheme.Light ? "#D2D6DB" : "#475467"}
      containerStyle={styles.containerStyle}
      textInputStyle={StyleSheet.flatten([
        styles.textInputStyle,
        textInputColorScheme,
      ])}
      autoFocus={true}
      secureTextEntry={true}
    />
  );
};

const styles = StyleSheet.create({
  containerStyle: {} as ViewStyle,
  textInputStyle: {
    fontWeight: "700",
    fontSize: 16,
    borderWidth: 4,
    borderRadius: 12,
    secureTextEntry: true,
  } as ViewStyle,
});

export default OTPCodeInput;
