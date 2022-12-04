import React, { createContext, useState } from "react";
// import auth from "@react-native-firebase/auth";
// import firestore from "@react-native-firebase/firestore";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
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
        // logout: async () => {
        //   try {
        //     await auth().signOut();
        //   } catch (e) {
        //     console.log(e);
        //   }
        // },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};