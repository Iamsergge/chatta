import React, { useState } from "react";
import ChatListItem from "../components/ChatListItem";
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  Modal,
  Pressable,
} from "react-native";
import ChatRequest from "../components/ChatRequest";
import FAB from "../components/FAB";
import ChatComponent from "../components/ChatComponent";
const HomeScreen = ({navigation}) => {
  const [isModalVisible, setIsModalVissible] = useState(false);
  return (
    <View style={styles.container}>
      {/* /* <Modal transparent={true} visible={isModalVisible}>
        <ChatRequest onPress={() => setIsModalVissible(false)} />
      </Modal>
      <ScrollView scrollEnabled={true}>
        <ChatListItem navigation={navigation} />
        <ChatListItem navigation={navigation}  />
        <ChatListItem navigation={navigation}  />
      </ScrollView>
      <Pressable onPress={() => setIsModalVissible(true)}>
        <FAB />
      </Pressable> */ }

      <ChatComponent/>
     
    </View>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#26394D",
    width: Dimensions.get("window").width,
  },
});