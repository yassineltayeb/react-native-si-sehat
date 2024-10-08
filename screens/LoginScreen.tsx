import { View } from "react-native";
import React, { useState, useEffect } from "react";
import Title from "../components/common/labels/Title";
import SubTitle from "../components/common/labels/SubTitle";
import { useNavigation } from "@react-navigation/native";
import KeyboardAvoiding from "../components/common/shared/KeyboardAvoiding";
import TextFieldInput from "../components/common/inputs/TextFieldInput";
import Button from "../components/common/buttons/Button";
import { ButtonType } from "../enums/ButtonTypes.enum";
import ButtonLabel from "../components/common/buttons/ButtonLabel";
import ButtonIcon from "../components/common/buttons/ButtonIcon";
import { LogInUserRequest } from "../types/users/logInUser";
import usersApi from "../api/users.api";
import toast from "../utils/toast";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [fullName, setFullName] = useState("Yassin Mohamed");
  const [password, setPassword] = useState("A@a123");

  const onFullNameInputChanged = (value: string) => setFullName(value);
  const onPasswordInputChanged = (value: string) => setPassword(value);

  useEffect(() => {
    const enableButton = () => {
      setButtonDisabled(!(fullName.length > 0 && password.length > 0));
    };

    enableButton();
  }, [fullName, password]);

  const handleContinue = () => {
    logInPatient();
  };

  const onRegisterHandler = () => {
    navigation.navigate("RegisterScreen");
  };

  const logInPatient = async () => {
    try {
      const logInUserRequest: LogInUserRequest = {
        email: fullName,
        password: password,
      };

      console.log("logInUserRequest", logInUserRequest);

      const response = await usersApi.logIn(logInUserRequest);

      console.log("access token", response.accessToken);

      await AsyncStorage.setItem("token", response.accessToken);

      navigation.navigate("HomePage", {});

      toast.success("LogIn", " LoggedIn successfully");

      console.log(response);
    } catch (error) {
      toast.error("LogIn", "Unable to logIn, please try again later");
      console.log(error);
    }
  };

  return (
    <KeyboardAvoiding>
      <View className="flex-1 bg-white dark:bg-dark-900">
        <View className="px-4 mt-4 flex-1 justify-between">
          <View>
            <Title title="Welcome Back" />
            <SubTitle title="Please fill out the form to log in to this app." />
            {/* Text Inputs */}
            <View className="mt-8">
              {/* Email or Username */}
              <TextFieldInput
                label="Email or Username"
                placeholder="Enter your email or username"
                onChangeText={onFullNameInputChanged}
              />
              {/* Password */}
              <TextFieldInput
                label="Password"
                placeholder="Enter your password"
                secure
                onChangeText={onPasswordInputChanged}
              />
              <View className="flex-row justify-end">
                <ButtonLabel text="Forgot Password" />
              </View>
              <View className="mt-8">
                <Button
                  text="Sign In"
                  type={ButtonType.Primary}
                  disabled={buttonDisabled}
                  onClick={handleContinue}
                />
              </View>
              <View className="mt-8">
                <ButtonIcon
                  text="Sign in with Google"
                  type={ButtonType.Secondary}
                  iconName="logo-google"
                  onClick={() => {}}
                />
                <ButtonIcon
                  text="Sign in with Apple"
                  type={ButtonType.Primary}
                  iconName="logo-apple"
                  onClick={() => {}}
                />
              </View>
            </View>
          </View>
          <View>
            <View className="mb-10 flex-row justify-center item-center">
              <SubTitle title="Don’t have an account?" />
              <ButtonLabel text="Register" onClick={onRegisterHandler} />
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoiding>
  );
};

export default LoginScreen;
