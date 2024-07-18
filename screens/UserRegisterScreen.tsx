import { View } from "react-native";
import React, { useState } from "react";
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

const UserRegisterScreen = () => {
  const navigation = useNavigation();
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onPasswordInputChanged = (value: string) => {
    setPassword(value);
  };

  const handleContinue = () => {
    navigation.navigate("OTPCodeScreen", {});
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
              />
              {/* Email */}
              <TextFieldInput label="Email" placeholder="Enter your email" />
              {/* Password */}
              <TextFieldInput
                label="Password"
                placeholder="Enter your password"
                secure
                onChangeText={onPasswordInputChanged}
              />
              {password.length > 0 && <PasswordChecker password={password} />}
              {/* Confirm Password */}
              <TextFieldInput
                label="Confirm Password"
                placeholder="Confirm your password"
                secure
              />
            </View>
          </View>
          <View>
            <Button
              text="Sign up"
              type={ButtonType.Primary}
              disabled={buttonDisabled}
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
