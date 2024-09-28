import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import OnboardingStackNavigation from "./components/navigation/OnboardingStackNavigation";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { useColorScheme } from "nativewind";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useDeviceContext } from "twrnc";
import tw from "./lib/tailwind";
import * as Font from "expo-font";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";
import { navigationRef } from "./components/navigation/RootNavigation";

export default function App() {
  const { colorScheme, toggleColorScheme, setColorScheme } = useColorScheme();
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setColorScheme("light");

    async function loadFonts() {
      await Font.loadAsync({
        "Manrope-Bold": require("./assets/fonts/Manrope-Bold.ttf"),
        "Manrope-ExtraBold": require("./assets/fonts/Manrope-ExtraBold.ttf"),
        "Manrope-ExtraLight": require("./assets/fonts/Manrope-ExtraLight.ttf"),
        "Manrope-Light": require("./assets/fonts/Manrope-Light.ttf"),
        "Manrope-Medium": require("./assets/fonts/Manrope-Medium.ttf"),
        "Manrope-Regular": require("./assets/fonts/Manrope-Regular.ttf"),
        "Manrope-SemiBold": require("./assets/fonts/Manrope-SemiBold.ttf"),
      });
      setFontsLoaded(true);
    }

    async function checkToken() {
      try {
        const token = await AsyncStorage.getItem("token");
        if (token) {
          const decodedToken = jwtDecode(token);
    
          if (decodedToken && typeof decodedToken.exp !== "undefined") {
            const currentTime = Date.now() / 1000;
    
            if (decodedToken.exp > currentTime) {
              setIsAuthenticated(true);
            } else {
              setIsAuthenticated(false);
              await AsyncStorage.removeItem("token");
            }
          } else {
            setIsAuthenticated(false);
          }
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        setIsAuthenticated(false);
      }
    }
    

    loadFonts();
    checkToken();
  }, []);

  useDeviceContext(tw, {
    observeDeviceColorSchemeChanges: false,
    initialColorScheme: "light",
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <SafeAreaView className="flex-1 bg-white dark:bg-dark-900">
          <StatusBar style={colorScheme == "dark" ? "light" : "dark"} />
          <OnboardingStackNavigation />
        </SafeAreaView>
      </NavigationContainer>
      <Toast />
    </Provider>
  );
}
