import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import LogInScreen from "./src/screens/LogInScreen";
import Message from "./src/screens/Message";
import Routes from "./src/screens/Routes";
import JobTracker from "./src/screens/Calendar";
import CheckInOut from "./src/screens/CheckInOut";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [isLogin, setIsLogin] = useState(true);

  const onLoginPressed = () => {
    setIsLogin(true);
  };

  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LogInScreen}
          options={{ title: "Login" }}
        />
      </Stack.Navigator> */}

      <Tab.Navigator
        initialRouteName="Login"
        screenOptions={{
          tabBarActiveTintColor: "#FF5714",
        }}
      >
        {isLogin && (
          <Tab.Screen
            name="Login"
            component={LogInScreen}
            options={{
              tabBarLabel: "Login",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="login"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
        )}

        {isLogin && (
          <>
            <Tab.Screen
              name="Message"
              component={Message}
              options={{
                tabBarLabel: "Message",
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="message"
                    color={color}
                    size={size}
                  />
                ),
              }}
            />

            <Tab.Screen
              name="Routes"
              component={Routes}
              options={{
                tabBarLabel: "Routes",
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="routes"
                    color={color}
                    size={size}
                  />
                ),
              }}
            />

            <Tab.Screen
              name="Calendar"
              component={JobTracker}
              options={{
                tabBarLabel: "Calendar",
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="calendar"
                    color={color}
                    size={size}
                  />
                ),
              }}
            />

            <Tab.Screen
              name="Check"
              component={CheckInOut}
              options={{
                tabBarLabel: "Check",
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="check"
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
          </>
        )}
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
