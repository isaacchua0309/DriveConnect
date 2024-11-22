import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function LoginScreen({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      {/* Back Button and Title */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#3B82F6" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Log In</Text>
      </View>

      {/* Welcome Text */}
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeTitle}>Welcome</Text>
        <Text style={styles.welcomeSubtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </View>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Email or Mobile Number</Text>
        <TextInput
          style={styles.input}
          placeholder="example@example.com"
          placeholderTextColor="#A5D8FF"
        />

        <Text style={styles.inputLabel}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, styles.passwordInput]}
            placeholder="***********"
            placeholderTextColor="#A5D8FF"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={20}
              color="#3B82F6"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forget Password</Text>
        </TouchableOpacity>
      </View>

      {/* Log In Button */}
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      {/* Sign Up with Options */}
      <Text style={styles.orText}>or sign up with</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="logo-google" size={24} color="#3B82F6" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="logo-facebook" size={24} color="#3B82F6" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="finger-print" size={24} color="#3B82F6" />
        </TouchableOpacity>
      </View>

      {/* Sign Up Link */}
      <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")}>
        <Text style={styles.signUpText}>
          Don’t have an account? <Text style={styles.signUpLink}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: "#fff",
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20,
    },
    headerText: {
      fontSize: 18,
      color: "#3B82F6",
      marginLeft: 10,
      fontWeight: "600",
    },
    welcomeContainer: {
      marginBottom: 20,
      alignItems: "flex-start",
    },
    welcomeTitle: {
      fontSize: 28,
      fontWeight: "bold",
      color: "#3B82F6",
    },
    welcomeSubtitle: {
      fontSize: 14,
      color: "#333",
      marginTop: 5,
      lineHeight: 22,
    },
    inputContainer: {
      marginBottom: 20,
    },
    inputLabel: {
      fontSize: 14,
      color: "#333",
      fontWeight: "600",
      marginTop: 10,
    },
    input: {
      backgroundColor: "#F0F9FF",
      padding: 15,
      borderRadius: 8,
      marginTop: 5,
      fontSize: 14,
      color: "#000",
    },
    passwordContainer: {
      position: "relative",
    },
    passwordInput: {
      paddingRight: 40, // Space for the eye icon
    },
    eyeIcon: {
      position: "absolute",
      right: 15,
      top: 15,
    },
    forgotPassword: {
      color: "#3B82F6",
      fontSize: 12,
      fontWeight: "500",
      alignSelf: "flex-end",
      marginTop: 5,
    },
    loginButton: {
      backgroundColor: "#3B82F6",
      padding: 15,
      borderRadius: 25,
      alignItems: "center",
      marginVertical: 20,
    },
    buttonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "600",
    },
    orText: {
      textAlign: "center",
      fontSize: 14,
      color: "#333",
      marginVertical: 10,
    },
    iconContainer: {
      flexDirection: "row",
      justifyContent: "center",
      marginVertical: 10,
    },
    iconButton: {
      backgroundColor: "#EAF4FF",
      padding: 15,
      borderRadius: 50,
      marginHorizontal: 10,
      alignItems: "center",
    },
    signUpText: {
      textAlign: "center",
      fontSize: 14,
      color: "#333",
      marginTop: 20,
    },
    signUpLink: {
      color: "#3B82F6",
      fontWeight: "bold",
    },
  });
  
