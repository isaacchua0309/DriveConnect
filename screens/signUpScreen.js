import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SignUpScreen({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#3B82F6" />
        </TouchableOpacity>
        <Text style={styles.headerText}>New Account</Text>
      </View>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Full name</Text>
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

        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="example@example.com"
          placeholderTextColor="#A5D8FF"
        />

        <Text style={styles.inputLabel}>Mobile Number</Text>
        <TextInput
          style={styles.input}
          placeholder="example@example.com"
          placeholderTextColor="#A5D8FF"
        />

        <Text style={styles.inputLabel}>Date Of Birth</Text>
        <TextInput
          style={styles.input}
          placeholder="DD / MM / YYYY"
          placeholderTextColor="#A5D8FF"
        />
      </View>

      {/* Terms and Sign-Up Button */}
      <Text style={styles.termsText}>
        By continuing, you agree to{" "}
        <Text style={styles.linkText}>Terms of Use</Text> and{" "}
        <Text style={styles.linkText}>Privacy Policy</Text>.
      </Text>

      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.buttonText}>Sign Up</Text>
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

      {/* Log In Link */}
      <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
        <Text style={styles.loginText}>
          already have an account? <Text style={styles.loginLink}>Log in</Text>
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    color: "#3B82F6",
    marginLeft: 10,
    fontWeight: "600",
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
  termsText: {
    textAlign: "center",
    fontSize: 12,
    color: "#333",
    marginVertical: 10,
  },
  linkText: {
    color: "#3B82F6",
    fontWeight: "bold",
  },
  signUpButton: {
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
  loginText: {
    textAlign: "center",
    fontSize: 14,
    color: "#333",
    marginTop: 20,
  },
  loginLink: {
    color: "#3B82F6",
    fontWeight: "bold",
  },
});
