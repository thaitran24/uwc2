import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";

const Messages = [
  {
    id: "1",
    userName: "Jenny Doe",
    userImg: require("../../../assets/images/team_logo.png"),
    messageTime: "4 mins ago",
    messageText: "Have u checked the daily task?",
  },
  {
    id: "2",
    userName: "John Doe",
    userImg: require("../../../assets/images/team_logo.png"),
    messageTime: "2 hours ago",
    messageText: "How do you do :p",
  },
  {
    id: "3",
    userName: "Ken William",
    userImg: require("../../../assets/images/team_logo.png"),
    messageTime: "1 hours ago",
    messageText: "idk. I think you should ask John",
  },
  {
    id: "4",
    userName: "Selina Paul",
    userImg: require("../../../assets/images/team_logo.png"),
    messageTime: "1 day ago",
    messageText:
      "Hey there, this is my test for a post of my social app in React Native.",
  },
  {
    id: "5",
    userName: "Christy Alex",
    userImg: require("../../../assets/images/team_logo.png"),
    messageTime: "2 days ago",
    messageText: "Supp",
  },
];

const MessageScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={Messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate("Chat", { userName: item.userName })
            }
          >
            <View style={styles.userInfo}>
              <View style={styles.userImgWrapper}>
                <Image style={styles.userImg} source={item.userImg} />
              </View>
              <View style={styles.textSection}>
                <View style={styles.userInfoText}>
                  <Text style={styles.userName}>{item.userName}</Text>
                  <Text style={styles.postTime}>{item.messageTime}</Text>
                </View>
                <Text style={styles.messageText}>{item.messageText}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
  },
  card: {
    width: "100%",
  },
  userInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userImgWrapper: {
    paddingVertical: 15,
  },
  userImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textSection: {
    flexDirection: "column",
    justifyContent: "center",
    padding: 15,
    paddingLeft: 0,
    marginLeft: 10,
    width: 300,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
  },
  userInfoText: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  userName: {
    fontSize: 14,
    fontWeight: "bold",
    // fontFamily: "Lato-Regular",
  },
  postTime: {
    fontSize: 12,
    color: "#666",
    // fontFamily: "Lato-Regular",
  },
  messageText: {
    fontSize: 14,
    color: "#333333",
  },
});
