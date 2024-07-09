import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreen from "../../screens/OnboardingScreen";
import LoginScreen from "../../screens/LoginScreen";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();
const Stack = createStackNavigator();

const StackNavigation = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

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
    <Stack.Navigator>
      {isFirstLaunch ? (
        <Stack.Screen
          name="OnboardingScreen"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
      ) : null}
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
