import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import Colors from "../constants/Colors";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import Welcome from "../screens/WelcomeScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CalculatorScreen from "../screens/CalculatorScreen";
import Icon from "react-native-vector-icons/FontAwesome5";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

import { RootStackParamList } from "../types";
import BmiScreen from "../screens/BmiScreen";
import KonversiSuhuScreen from "../screens/KonversiSuhuScreen";
import AboutmeScreen from "../screens/AboutmeScreen";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.background,
  },
};

export default function Navigation() {
  return (
    <NavigationContainer theme={theme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="HomeScreen" component={TabNavigator} />
      <Stack.Screen name="Calculator" component={CalculatorScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <Icon name="home" size={25} color={"#1F41BB"} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => <Icon name="user" size={25} color={"#1F41BB"} />,
        }}
      />
      <Tab.Screen
        name="Calculator"
        component={CalculatorScreen}
        options={{
          tabBarIcon: () => (
            <Icon name="calculator" size={25} color={"#1F41BB"} />
          ),
        }}
      />
      <Tab.Screen
        name="BmiCalculator"
        component={BmiScreen}
        options={{
          tabBarIcon: () => <Icon name="weight" size={25} color={"#1F41BB"} />,
        }}
      />
      <Tab.Screen
        name="KonfersiSuhu"
        component={KonversiSuhuScreen}
        options={{
          tabBarIcon: () => (
            <Icon name="temperature-low" size={25} color={"#1F41BB"} />
          ),
        }}
      />
      <Tab.Screen
        name="Aboutme"
        component={AboutmeScreen}
        options={{
          tabBarIcon: () => <Icon name="male" size={25} color={"#1F41BB"} />,
        }}
      />
    </Tab.Navigator>
  );
}
