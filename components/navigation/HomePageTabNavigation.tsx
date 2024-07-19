import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/HomeScreen";
import { useColorScheme } from "nativewind";
import { ColorScheme } from "../../enums/ColorScheme.enum";
import { Ionicons } from "@expo/vector-icons"; // Adjust the import based on the icon library you're using

const Tab = createBottomTabNavigator();

const HomePageTabNavigation = () => {
  const { colorScheme } = useColorScheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerTintColor:
          colorScheme === ColorScheme.Light ? "#101828" : "#F3F4F6",
        tabBarActiveTintColor:
          colorScheme === ColorScheme.Light ? "#254EDB" : "#4F73DF",
        tabBarStyle: {
          backgroundColor:
            colorScheme === ColorScheme.Light ? "#F3F4F6" : "#101828",
          borderTopWidth: colorScheme === ColorScheme.Light ? 0 : 1,
          borderTopColor:
            colorScheme === ColorScheme.Light ? "transparent" : "#1D2939",
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="HomeScreen2"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomePageTabNavigation;
