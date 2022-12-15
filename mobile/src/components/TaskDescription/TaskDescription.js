import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useContext, useState } from "react";
import ViewMoreText from "react-native-view-more-text";
import Checkbox from "expo-checkbox";

import { AuthContext } from "../../navigation/AuthProvider";

export default function TaskDescription({ navigation }) {
  const { isCheckIn, setIsCheckIn, isCheckOut, setIsCheckOut } =
    useContext(AuthContext);

  const renderViewMore = (onPress) => {
    <Text style={styles.view} onPress={onPress}>
      View more
    </Text>;
  };

  const renderViewLess = (onPress) => {
    <Text style={styles.view} onPress={onPress}>
      View less
    </Text>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>Description</Text>
      </View>
      <ViewMoreText
        numberOfLines={3}
        renderViewMore={renderViewMore}
        renderViewLess={renderViewLess}
      >
        <View style={styles.content}>
          <Text style={styles.text}>
            Collect garbage at MCP No.01, MCP No.03, MCP No.05.
          </Text>
          <Text style={styles.text}>Vehicle's ID: 400</Text>
        </View>
      </ViewMoreText>
      <View style={styles.buttonGroupGroup}>
        <View style={styles.buttonGroup}>
          <Text style={styles.buttonContent}>Check In</Text>
          <Checkbox
            style={styles.checkbox}
            value={isCheckIn}
            onValueChange={setIsCheckIn}
            disabled={isCheckOut ? true : false}
            color={"#7FC060"}
          />
        </View>
        <View style={styles.buttonGroup}>
          <Text style={styles.buttonContent}>Check out</Text>
          <Checkbox
            style={styles.checkbox}
            value={isCheckOut}
            onValueChange={setIsCheckOut}
            disabled={isCheckIn ? false : true}
            color={"#7FC060"}
          />
        </View>
        <View style={[styles.buttonGroup, { marginHorizontal: 40 }]}>
          <Text style={styles.buttonContent}>View Path</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Routes")}>
            <Image
              style={styles.pathImage}
              source={require("../../../assets/images/path_button.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 26,
    height: 300,
  },
  titleBox: {
    marginTop: 20,
    padding: 5,
  },
  title: {
    fontSize: 20,
    lineHeight: 21,

    alignItems: "center",
    textAlign: "center",
    padding: 5,
  },
  content: {
    // height: 10,

    padding: 30,
    alignContent: "center",
    marginBottom: 15,
  },
  text: {
    textAlign: "justify",
    fontSize: 18,
    lineHeight: 20,
    margin: 3,
    color: "rgba(0, 0, 0, 0.5)",
    overflow: "flow",
  },
  buttonGroupGroup: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "space-between",
    // paddingVertical: 0,
    paddingHorizontal: 15,
    marginHorizontal: 10,
  },
  buttonGroup: {
    marginHorizontal: 10,
    alignContent: "center",
    alignItems: "center",
  },
  checkbox: {
    width: 32,
    height: 32,
    borderRadius: 15,
    margin: 5,
  },
  buttonContent: { fontSize: 18 },
  pathImage: {
    width: 40,
    height: 40,
  },
});
