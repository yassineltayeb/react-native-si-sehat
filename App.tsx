import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import StackNavigation from "./components/navigation/StackNavigation";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { useColorScheme } from "nativewind";
import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const { colorScheme, toggleColorScheme, setColorScheme } = useColorScheme();

  useEffect(() => {
    setColorScheme("dark");
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView className="flex-1 bg-white dark:bg-dark-900">
          <StatusBar style={colorScheme == "dark" ? "light" : "dark"} />
          <StackNavigation />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
}
