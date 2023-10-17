import { StyleSheet, Text, View } from "react-native";
import ReportScreen from "./screens/ReportScreen";
import Screen from "./screens/Screen";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CameraScreen from "./screens/CameraScreen";
import HistoryScreen from "./screens/HistoryScreen";
import ProecessImageScreen from "./screens/ProecessImageScreen";
import OnboardingScreen from "./screens/OnboardingScreen";
import FocuScreen from "./screens/FocuScreen";
import LogInScreen from "./screens/LogInScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="OnboardingScreen"
          component={OnboardingScreen}
          options={{ header: () => null }}
        /> */}

        <Stack.Screen
          name="HistoryScreen"
          component={HistoryScreen}
          options={{ header: () => null }}
        />

        <Stack.Screen
          name="ProecessImageScreen"
          component={ProecessImageScreen}
          options={{ header: () => null }}
        />

        <Stack.Screen
          name="LogInScreen"
          component={LogInScreen}
          options={{ header: () => null }}
        />

        <Stack.Screen
          name="CameraScreen"
          component={CameraScreen}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="FocuScreen"
          component={FocuScreen}
          options={{ header: () => null }}
        />

        <Stack.Screen
          name="ReportScreen"
          component={ReportScreen}
          options={{ header: () => null }}
        />
        {/* Add more screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

/*

import { StyleSheet, Text, View } from "react-native";
import AppButton from "./components/AppButton";
import CameraScreen from "./screens/CameraScreen";
import FocuScreen from "./screens/FocuScreen";
import SignUpScreen from "./screens/SignUpScreen";
import ProecessImageScreen from "./screens/ProecessImageScreen";
import HistoryScreen from "./screens/HistoryScreen";
import AddDataScreen from "./screens/AddDataScreen";
import FetchTest from "./screens/FetchTest";
import CameraTest from "./screens/CameraTest";
import SplashScreen from "./screens/SplashScreen";
import LogInScreen from "./screens/LogInScreen";

export default function App() {
  return <SplashScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});*/
