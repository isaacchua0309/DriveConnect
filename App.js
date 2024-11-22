import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Import your screens
import StartScreen from "./screens/startScreen";
import LoginScreen from "./screens/loginScreen";
import SignUpScreen from "./screens/signUpScreen"; // Import the SignUpScreen

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartScreen">
        {/* Start Screen */}
        <Stack.Screen
          name="StartScreen"
          component={StartScreen}
          options={{ headerShown: false }}
        />
        {/* Login Screen */}
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            title: "Log In",
            headerStyle: { backgroundColor: "#3B82F6" },
            headerTintColor: "#fff",
          }}
        />
        {/* Sign Up Screen */}
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{
            title: "Sign Up",
            headerStyle: { backgroundColor: "#3B82F6" },
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
