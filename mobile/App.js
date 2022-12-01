import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ToastAndroid,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import LogInScreen from "./src/screens/LogInScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // <SafeAreaView style={styles.root}>
    //   <LogInScreen />
    // </SafeAreaView>

    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LogInScreen}
          options={{ title: "Login" }}
        />
      </Stack.Navigator> */}

      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          tabBarActiveTintColor: "#FF5714",
        }}
      >
        <Tab.Screen
          name="Login"
          component={LogInScreen}
          options={{
            tabBarLabel: "Login",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="down" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F9FBFC",
  },
});
