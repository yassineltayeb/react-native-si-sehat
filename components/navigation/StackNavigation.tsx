import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreen from "../../screens/OnboardingScreen";
import FirstScreen from "../../screens/FirstScreen";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import PhoneNumberScreen from "../../screens/PhoneNumberScreen";
import { useColorScheme } from "nativewind";
import { ColorScheme } from "../../enums/ColorScheme.enum";
import OTPCodeScreen from "../../screens/OTPCodeScreen";
import UserRegisterScreen from "../../screens/UserRegisterScreen";
import WelcomeScreen from "../../screens/WelcomeScreen";

SplashScreen.preventAutoHideAsync();
const Stack = createStackNavigator();

const StackNavigation = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const { colorScheme } = useColorScheme();

  useEffect(() => {
    const getIsFirstLaunch = async () => {
      try {
        const value = await AsyncStorage.getItem("isFirstLaunch");
        if (value !== null && value === "false") {
          console.log("value", value);
          setIsFirstLaunch(false);
        }
      } catch (e) {
        console.log("error reading local storage");
      } finally {
        setIsLoading(false);
        await SplashScreen.hideAsync();
      }
    };

    getIsFirstLaunch();
  }, []);
  if (isLoading) {
    return;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor:
          colorScheme === ColorScheme.Light ? "#1D2939" : "#F3F4F6",
        headerStyle: {
          backgroundColor:
            colorScheme === ColorScheme.Light ? "white" : "#101828",
          borderBottomWidth: 1,
          borderBottomColor:
            colorScheme === ColorScheme.Light ? "#F3F4F6" : "#1D2939",
          shadowOpacity: 0,
          shadowColor: "transparent",
          shadowRadius: 0,
          elevation: 0,
        },
        headerTitleContainerStyle: {
          marginTop: 0,
        },
      }}
    >
      {isFirstLaunch && (
        <Stack.Screen
          name="OnboardingScreen"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
      )}
      <Stack.Screen
        name="FirstScreen"
        component={FirstScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={PhoneNumberScreen}
        options={{
          title: "",
          headerTitle: "",
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="OTPCodeScreen"
        component={OTPCodeScreen}
        options={{
          title: "",
          headerTitle: "",
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="UserRegisterScreen"
        component={UserRegisterScreen}
        options={{
          title: "",
          headerTitle: "",
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
