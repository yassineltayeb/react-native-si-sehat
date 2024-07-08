import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreen from "../../screens/OnboardingScreen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="OnboardingScreen"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
