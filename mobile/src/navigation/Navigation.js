import React, { useState, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthContext } from "./AuthProvider";

import AppStack from "./AppStack";
import AuthStack from "./AuthStack";

export default function Navigation() {
  const { isLogin } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {isLogin ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
