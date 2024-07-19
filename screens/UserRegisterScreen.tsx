import { ScrollView, View } from "react-native";
import React, { useState, useEffect } from "react";
import Title from "../components/common/labels/Title";
import SubTitle from "../components/common/labels/SubTitle";
import PhoneNumberInput from "../components/common/inputs/PhoneNumberInput";
import TermsAndConditionWithButton from "../components/common/shared/TermsAndConditionWithButton";
import { useNavigation } from "@react-navigation/native";
import KeyboardAvoiding from "../components/common/shared/KeyboardAvoiding";
import TextFieldInput from "../components/common/inputs/TextFieldInput";
import Button from "../components/common/buttons/Button";
import { ButtonType } from "../enums/ButtonTypes.enum";
import ButtonLabel from "../components/common/buttons/ButtonLabel";
import PasswordChecker from "../components/common/shared/PasswordChecker";
import { PasswordComplexity } from "../enums/PasswordComplexity.enum";

const UserRegisterScreen = () => {
  const navigation = useNavigation();
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [fullName, setFullName] = useState("Yassin Mohamed");
  const [email, setEmail] = useState("yassineltayeb@live.com");
  const [password, setPassword] = useState("A@a123");
  const [confirmPassword, setConfirmPassword] = useState("A@a123");
  const [passwordComplexityChange, setPasswordComplexityChange] = useState("");

  const onFullNameInputChanged = (value: string) => setFullName(value);
  const onEmailInputChanged = (value: string) => setEmail(value);
  const onPasswordInputChanged = (value: string) => setPassword(value);
  const onConfirmPasswordInputChanged = (value: string) =>
    setConfirmPassword(value);
  const onPasswordComplexityChange = (value: string) =>
    setPasswordComplexityChange(value);

  useEffect(() => {
    const enableButton = () => {
      setButtonDisabled(
        !(
          fullName.length > 0 &&
          email.length > 0 &&
          password.length > 0 &&
          confirmPassword === password &&
          (passwordComplexityChange === PasswordComplexity.Strong ||
            passwordComplexityChange === PasswordComplexity.VeryStrong)
        )
      );
    };

    enableButton();
  }, [fullName, email, password, confirmPassword, passwordComplexityChange]);

  const handleContinue = () => {
    navigation.navigate("WelcomeScreen", { fullName: fullName });
  };

  return (
    <KeyboardAvoiding>
      <View className="flex-1 bg-white dark:bg-dark-900">
        <View className="px-4 mt-4 flex-1 justify-between">
          <View>
            <Title title="Register" />
            <SubTitle title="Please enter a form to continue the register" />
            {/* Text Inputs */}
            <View className="mt-8">
              {/* Full Name */}
              <TextFieldInput
                label="Full Name"
                placeholder="Enter your full name"
                onChangeText={onFullNameInputChanged}
              />
              {/* Email */}
              <TextFieldInput
                label="Email"
                placeholder="Enter your email"
                onChangeText={onEmailInputChanged}
              />
              {/* Password */}
              <TextFieldInput
                label="Password"
                placeholder="Enter your password"
                secure
                onChangeText={onPasswordInputChanged}
              />
              {/* Password Checker */}
              {password.length > 0 && (
                <PasswordChecker
                  password={password}
                  onPasswordComplexityChange={onPasswordComplexityChange}
                />
              )}
              {/* Confirm Password */}
              <TextFieldInput
                label="Confirm Password"
                placeholder="Confirm your password"
                secure
                onChangeText={onConfirmPasswordInputChanged}
              />
            </View>
          </View>
          <View>
            <Button
              text="Sign up"
              type={ButtonType.Primary}
              disabled={buttonDisabled}
              onClick={handleContinue}
            />
            <View className="mb-10">
              <ButtonLabel text="I have an account? Sign in" />
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoiding>
  );
};

export default UserRegisterScreen;
