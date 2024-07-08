import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import StackNavigation from "./components/navigation/StackNavigation";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "./store/store";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView className="flex-1 bg-white">
        <StatusBar style="dark" />
        <StackNavigation />
      </SafeAreaView>
    </Provider>
  );
}
