import React, { useState, useEffect } from "react";
import { firebase } from "./config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LogInScreen from "./screens/LogInScreen";
import FocuScreen from "./screens/FocuScreen";
import ReportScreen from "./screens/ReportScreen";
import SignUpScreen from "./screens/SignUpScreen";
import Dashboard from "./screens/Dashboard";
import OnboardingScreen from "./screens/OnboardingScreen";
import CameraScreen from "./screens/CameraScreen";
import Screen from "./screens/Screen";
import Predict from "./model/Predict";
import HistoryScreen from "./screens/HistoryScreen";
import ProecessImageScreen from "./screens/ProecessImageScreen";

const Stack = createStackNavigator();

function App() {
  // const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState();

  // function onAuthStateChanged(user) {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // }

  // useEffect(() => {
  //   const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber;
  // }, []);

  // if (initializing) return null;

  // if (!user) {
  //   return (
  //     <NavigationContainer>
  //       <Stack.Navigator>
  //       <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{ header: () => null }} />
  //         <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ header: () => null }} />
  //         <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ header: () => null }} />
  //       </Stack.Navigator>
  //     </NavigationContainer>
  //   );
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="OnboardingScreen"
          component={OnboardingScreen}
          options={{ header: () => null }}
        /> */}

        <Stack.Screen
          name="CameraScreen"
          component={CameraScreen}
          options={{ header: () => null }}
        />

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
          name="Predict"
          component={Predict}
          options={{ header: () => null }}
        />

        <Stack.Screen
          name="LogInScreen"
          component={LogInScreen}
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
