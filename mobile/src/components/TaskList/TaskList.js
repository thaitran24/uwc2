import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import ViewMoreText from "react-native-view-more-text";

import CustomButton from "../CustomButton/CustomButton";

import { AuthContext } from "../../navigation/AuthProvider";

export default function TaskList({ date }) {
  const { isCheckIn, setIsCheckIn } = useContext(AuthContext);
  const { isCheckOut, setIsCheckOut } = useContext(AuthContext);

  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

  function formatDate(date) {
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join(".");
  }

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

  const curr_day = formatDate(new Date());

  let BUTTON_TYPE = "GROUP_DISABLE";
  let BUTTON_STATUS = true;

  if (curr_day == date) {
    BUTTON_TYPE = "GROUP_ENABLE";
    BUTTON_STATUS = false;
  }

  const onPressCheckIn = () => {
    console.log("Handle check in!");
    {
      !isCheckOut && setIsCheckIn(!isCheckIn);
    }
  };

  const onPressCheckOut = () => {
    console.log("Handle check out!");
    {
      isCheckIn && setIsCheckOut(!isCheckOut);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.title}>Collect from MCP</Text>
      <ViewMoreText
        numberOfLines={3}
        renderViewMore={renderViewMore}
        renderViewLess={renderViewLess}
      >
        <Text style={styles.text}>
          Collect garbage at MCP No.01, MCP No.03, MCP No.05.
        </Text>
      </ViewMoreText>

      <View style={styles.fixToRow}>
        <CustomButton
          text="Check in"
          disabled={BUTTON_STATUS}
          onPress={onPressCheckIn}
          type={BUTTON_TYPE}
        />
        <CustomButton
          text="Check out"
          disabled={BUTTON_STATUS}
          onPress={onPressCheckOut}
          type={BUTTON_TYPE}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    minHeight: 200,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
  },
  date: {
    color: "#8F9BB3",
    padding: 5,
    fontSize: 15,
  },
  title: {
    left: 24,
    right: 40.48,

    fontWeight: "600",
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 1,

    color: "#222B45",
  },
  text: {
    lineHeight: 18,
    padding: 30,
    alignContent: "center",
    alignItems: "center",
    textAlign: "justify",
  },
  view: {
    color: "red",
  },
  fixToRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
});
