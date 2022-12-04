import React, { useState, useContext } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { AuthContext } from "./src/navigation/AuthProvider";

import AppStack from "./src/navigation/AppStack";
import AuthStack from "./src/navigation/AuthStack";

export default function App() {
  // const { isLogin, setIsLogin } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <NavigationContainer>
      {isLogin ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F9FBFC",
  },
});
