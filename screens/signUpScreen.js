import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Modal,
  Pressable,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // Import Firebase auth

export default function SignUpScreen({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("Student"); // Default role
  const [termsVisible, setTermsVisible] = useState(false); // Modal for Terms
  const [privacyVisible, setPrivacyVisible] = useState(false); // Modal for Privacy
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const [fullName, setFullName] = useState(""); // State for full name

  const handleSignUp = async () => {
    try {
      // Firebase sign-up method
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Successfully signed up
      const user = userCredential.user;
      Alert.alert("Sign Up Successful", `Welcome, ${fullName}!`);
      navigation.navigate("HomeScreen"); // Redirect to HomeScreen
    } catch (error) {
      Alert.alert("Sign Up Failed", error.message); // Show error
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#3B82F6" />
          </TouchableOpacity>
          <Text style={styles.headerText}>New Account</Text>
        </View>

        {/* Role Toggle */}
        <View style={styles.roleToggleContainer}>
          <Text style={styles.inputLabel}>I am a:</Text>
          <View style={styles.roleToggle}>
            <TouchableOpacity
              style={[
                styles.roleButton,
                role === "Student" ? styles.activeRole : styles.inactiveRole,
              ]}
              onPress={() => setRole("Student")}
            >
              <Text
                style={[
                  styles.roleText,
                  role === "Student" ? styles.activeText : styles.inactiveText,
                ]}
              >
                Student
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.roleButton,
                role === "Instructor" ? styles.activeRole : styles.inactiveRole,
              ]}
              onPress={() => setRole("Instructor")}
            >
              <Text
                style={[
                  styles.roleText,
                  role === "Instructor"
                    ? styles.activeText
                    : styles.inactiveText,
                ]}
              >
                Instructor
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Input Fields */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Full name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your full name"
            placeholderTextColor="#A5D8FF"
            value={fullName}
            onChangeText={(text) => setFullName(text)}
          />

          <Text style={styles.inputLabel}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.input, styles.passwordInput]}
              placeholder="***********"
              placeholderTextColor="#A5D8FF"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={(text) => setPassword(text)}
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
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        {/* Terms and Sign-Up Button */}
        <Text style={styles.termsText}>
          By continuing, you agree to{" "}
          <Text
            style={styles.linkText}
            onPress={() => setTermsVisible(true)} // Open Terms Modal
          >
            Terms of Use
          </Text>{" "}
          and{" "}
          <Text
            style={styles.linkText}
            onPress={() => setPrivacyVisible(true)} // Open Privacy Modal
          >
            Privacy Policy
          </Text>
          .
        </Text>

        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
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
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
  roleToggleContainer: {
    marginBottom: 20,
  },
  roleToggle: {
    flexDirection: "row",
    marginTop: 10,
  },
  roleButton: {
    flex: 1,
    padding: 12,
    borderWidth: 1,
    borderColor: "#3B82F6",
    alignItems: "center",
    borderRadius: 8,
    marginHorizontal: 5,
  },
  activeRole: {
    backgroundColor: "#3B82F6",
  },
  inactiveRole: {
    backgroundColor: "#fff",
  },
  roleText: {
    fontSize: 14,
    fontWeight: "600",
  },
  activeText: {
    color: "#fff",
  },
  inactiveText: {
    color: "#3B82F6",
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
    padding: 12,
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
  termsText: {
    textAlign: "center",
    fontSize: 12,
    color: "#333",
    marginVertical: 10,
  },
  linkText: {
    color: "#3B82F6",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },

  // Modal Styles
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#3B82F6",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 14,
    color: "#333",
    lineHeight: 20,
  },
  modalCloseButton: {
    marginTop: 20,
    alignItems: "center",
    padding: 10,
    backgroundColor: "#3B82F6",
    borderRadius: 5,
  },
  modalCloseButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
