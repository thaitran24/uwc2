import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState, useContext } from "react";
import { Calendar } from "react-native-calendars";
import moment from "moment";

import TaskList from "../../components/TaskList/TaskList";

export default function JobTracker() {
  const [selectedDate, setSelectedDate] = useState("");
  const [markedDates, setMarkedDates] = useState({});

  const [taskVisible, setTaskVisible] = useState(false);

  const getSelectedDayEvents = (date) => {
    let markedDates = {};
    markedDates[date] = {
      selected: true,
      color: "#FF5714",
      textColor: "#FFFFFF",
    };
    let serviceDate = moment(date);
    serviceDate = serviceDate.format("DD.MM.YYYY");
    setSelectedDate(serviceDate);
    setMarkedDates(markedDates);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Calendar
          style={styles.calendar}
          theme={{
            arrowColor: "#FF5714",
            textDayFontWeight: "300",
            textMonthFontWeight: "bold",
            textDayHeaderFontWeight: "500",
            textDayFontSize: 16,
            textMonthFontSize: 18,
            selectedDayBackgroundColor: "#FF5714",
          }}
          minDate={"1996-05-10"}
          maxDate={"2030-12-31"}
          markedDates={markedDates}
          scrollEnabled={true}
          horizontal={true}
          showScrollIndicator={true}
          disableMonthChange={true}
          onDayPress={(day) => {
            console.log("selected day:", day.dateString);
            if (moment(day.dateString).format("DD.MM.YYYY") == selectedDate) {
              setTaskVisible(!taskVisible);
            } else {
              setTaskVisible(true);
            }

            getSelectedDayEvents(day.dateString);
          }}
        />
        {taskVisible && <TaskList date={selectedDate} />}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    padding: 20,
  },
  calendar: {
    borderRadius: 10,
    elevation: 4,
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    minHeight: 375,
  },
});
