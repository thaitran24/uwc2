import {
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

export default function MCPOverview() {
  const MCPlist = [
    { id: "mcp01", name: "MCP No.01", capacity: 0.5, loc: null },
    { id: "mcp02", name: "MCP No.02", capacity: 0.9, loc: null },
    { id: "mcp03", name: "MCP No.03", capacity: 0.1, loc: null },
    { id: "mcp04", name: "MCP No.04", capacity: 0.7, loc: null },
    { id: "mcp05", name: "MCP No.05", capacity: 0.2, loc: null },
    { id: "mcp06", name: "MCP No.06", capacity: 0.2, loc: null },
  ];

  const renderItemComponent = (item) => (
    <View key={item.id.toString()} style={styles.itemRow}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text
        style={[
          styles.itemCap,
          item.capacity >= 0.9
            ? { color: "#DC143C" } // red
            : item.capacity > 0.5
            ? { color: "#FF8C00" } // orange
            : { color: "#008000" }, // green
        ]}
      >
        {item.capacity * 100} %
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.titleBox}>
          <Text style={styles.title}>MCP Detail</Text>
        </View>
        <View style={styles.containerList}>
          {MCPlist.map((item) => renderItemComponent(item))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // height: 300,
    margin: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 26,
  },
  titleBox: {
    marginTop: 20,
    padding: 5,
  },
  title: {
    fontSize: 20,
    lineHeight: 21,
    // fontWeight: "bold",

    alignItems: "center",
    textAlign: "center",
    padding: 5,
  },
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 30,
    margin: 20,
  },
  itemName: {
    fontSize: 18,
    lineHeight: 21,
  },
  itemCap: {
    fontSize: 18,
    lineHeight: 21,
  },
  containerList: {
    maxHeight: 300,
    margin: 20,
    overflow: "scroll",
  },
});
