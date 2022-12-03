import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const CustomButton = ({
  onPress,
  text,
  type = "PRIMARY",
  bgColor,
  fgColor,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
      ]}
    >
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? { color: fgColor } : {},
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginVertical: 5,

    alignItems: "center",
    borderRadius: 5,
  },

  container_PRIMARY: {
    width: "100%",
    backgroundColor: "#FF8758",
  },

  container_TERTIARY: {
    width: "100%",
  },

  container_GROUP: {
    width: "45%",
    backgroundColor: "#FF8758",
  },

  text: {
    fontWeight: "bold",
    color: "white",
  },

  text_TERTIARY: {
    color: "gray",
  },

  text_GROUP: {
    color: "white",
  },
});

export default CustomButton;
