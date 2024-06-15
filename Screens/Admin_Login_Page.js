import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  Image,
  Platform,
  ScrollView,
  Pressable,
} from "react-native";

const AdminLogin = ({navigation}) => {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};

    if (!Email) errors.Email = "Email is required";
    if (!password) errors.password = "Password is required";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      if (Email === "admin@gmail.com" && password === "adminiitgn") {
        navigation.navigate("AdminHome");
        console.log('Admin Login Successfully');
      } else {
        setErrors({ ...errors, login: "Invalid email or password" });
        console.log('Invalid Credentials');
      }
    }
  };
  

  return (
    <ScrollView >
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      style={styles.container}
    >
      <View style={styles.form}>
        <Image
          source={require("../assets/login-logo.png")}
          style={{
            width: 200,
            height: 200,
            alignSelf: "center",
            marginBottom: 50,
          }}
        />
        <Text style={styles.head}>Admin Login</Text>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Email ID"
          value={Email}
          onChangeText={setEmail}
        />
        {errors.Email ? (
          <Text style={styles.errorText}>{errors.Email}</Text>
        ) : null}

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {errors.password ? (
          <Text style={styles.errorText}>{errors.password}</Text>
        ) : null}

        <Pressable style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f5f5f5",
  },
  form: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ffffff",
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
    marginLeft: 5,
  },
  head: {
    fontSize: 20,
    color: "black",
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "lightblue",
    padding: 10,
    margin: 0,
    borderRadius: 10,
    width: 310,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 17,
    fontWeight: "bold",
  },
});


export default AdminLogin;
