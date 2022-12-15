import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import MessageScreen from "../screens/MessageScreen";
import ChatScreen from "../screens/ChatScreen/ChatScreen";
import Routes from "../screens/Routes";
import JobTracker from "../screens/Calendar";
import CheckInOut from "../screens/CheckInOut";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MessageStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen name="Messages" component={MessageScreen} />
    <Stack.Screen
      name="Chat"
      component={ChatScreen}
      options={({ route }) => ({
        title: route.params.userName,
        headerTitleStyle: { color: "black" },
        headerBackTitleVisible: false,
        headerTintColor: "#FF5714",
      })}
    />
  </Stack.Navigator>
);

export default function AppStack() {
  const getTabBarVisibility = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "";
    if (routeName === "Chat") {
      return "none";
    }
    return "flex";
  };

  return (
    <Tab.Navigator
      initialRouteName="Messages"
      screenOptions={{
        tabBarActiveTintColor: "#FF5714",
      }}
    >
      <Tab.Screen
        name="Messages"
        component={MessageStack}
        options={({ route }) => ({
          headerShown: false,
          tabBarStyle: { display: getTabBarVisibility(route) },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="message" color={color} size={size} />
          ),
        })}
      />

      <Tab.Screen
        name="Routes"
        component={Routes}
        options={{
          tabBarLabel: "Routes",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="routes" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Calendar"
        component={JobTracker}
        options={{
          tabBarLabel: "Calendar",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Daily Task"
        component={CheckInOut}
        options={{
          tabBarLabel: "Check",
          // headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="check" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
