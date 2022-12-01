import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import Logo from "../../../assets/images/team_logo.png";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

export default function LogInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { height } = useWindowDimensions();

  const onLogInPressed = () => {
    console.warn("Log in");
  };

  const onForgotPassWord = () => {
    console.warn("Forgot Password");
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Welcome to UWC 2.0</Text>
      <Image
        source={Logo}
        style={(styles.logo, { height: height * 0.2 })}
        resizeMode="contain"
      />
      <Text style={styles.index}>Email Address</Text>
      <CustomInput
        placeholder={"Enter your email"}
        value={email}
        setValue={setEmail}
        secureTextEntry={false}
      />
      <Text style={styles.index}>Password</Text>
      <CustomInput
        placeholder={"Enter your password"}
        value={password}
        setValue={setPassword}
        secureTextEntry
      />

      <CustomButton text="Log in" onPress={onLogInPressed} />
      <CustomButton
        text="Forgot password?"
        onPress={onForgotPassWord}
        type="TERTIARY"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: "50%",
    maxWidth: 300,
    maxHeight: 200,
  },
  title: {
    fontSize: 32,
    lineHeight: 30,
    display: "flex",

    textAlign: "center",
    padding: 30,
  },
  index: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "bold",

    alignItems: "left",
    textAlign: "left",
    padding: 5,
  },
});
