import React, { createContext, useState } from "react";
// import auth from "@react-native-firebase/auth";
// import firestore from "@react-native-firebase/firestore";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [isCheckIn, setIsCheckIn] = useState(false);
  const [isCheckOut, setIsCheckOut] = useState(false);

  const value = {
    isLogin,
    setIsLogin,
    login: async (email, password) => {
      //   try {
      //     await auth().signInWithEmailAndPassword(email, password);
      //   } catch (e) {
      //     console.log(e);
      //   }
      setIsLogin(true);
    },
    // // logout: async () => {
    // //   try {
    // //     await auth().signOut();
    // //   } catch (e) {
    // //     console.log(e);
    // //   }
    // // },
    isCheckIn,
    setIsCheckIn,
    isCheckOut,
    setIsCheckOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
