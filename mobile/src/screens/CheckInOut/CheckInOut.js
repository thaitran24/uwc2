import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import TaskDescription from "../../components/TaskDescription/TaskDescription";
import MCPOverview from "../../components/MCPOverview/MCPOverview";

export default function CheckInOut({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <TaskDescription navigation={navigation} />
          <MCPOverview />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
