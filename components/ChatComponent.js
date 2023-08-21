import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';

const ChatComponent = () => {
  const userID = 'meetre';
  const texts = [
    {
      text: 'Hi there',
      userID: userID,
    },
    {
      text: 'Why are you here?',
      userID: 'asdfjj43534',
    },
    {
      text: 'Why are you here?',
      userID: userID,
    },
    {
      text: 'What is with this darkness',
      userID: 'asdfjj43534',
    },
    {
      text: 'When everything is done',
      userID: userID,
    },
  ];

  const renderItem = ({ item, index }) => {
    return (
      <View>
        <View
          style={[
            styles.contentHolder,
            item.userID === userID ? styles.rightContent : styles.leftContent,
            texts[index - 1]?.userID === item.userID ? { marginBottom: -5 } : null,
          ]}
        >
          <View
            style={[
              styles.textBox,
              item.userID === userID ? styles.rightText : styles.leftText,
              texts[index - 1]?.userID === item.userID ? { borderRadius: 15 } : null,
            ]}
          >
            <Text style={styles.text}>{item.text}</Text>
          </View>
        </View>
        <View style={styles.timeSent}>
          <Text style={styles.whiteText}>1:36 PM</Text>
          {item.userID === userID && (
            <>
              <Entypo name="dot-single" color="#FFF" size={16} />
              <Text style={styles.whiteText}>Sent</Text>
            </>
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={texts}
        renderItem={renderItem}
        contentContainerStyle={{ flexDirection: 'column-reverse' }}
      />
    </View>
  );
};

export default ChatComponent;

const styles = StyleSheet.create({
  contentHolder: {
    width: 280,
    marginVertical: 10,
  },
  container: {
    padding: 10,
  },
  textBox: {
    padding: 10,
    width: 280,
  },
  rightContent: {
    alignSelf: 'flex-end',
  },
  leftContent: {},
  rightText: {
    borderRadius: 15,
    borderBottomRightRadius: 0,
    backgroundColor: '#3F5973',
  },
  text: {
    color: '#EBEBEB',
    fontSize: 15,
  },
  leftText: {
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    backgroundColor: '#1EA0E5',
  },
  timeSent: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  whiteText: {
    color: '#E4E4E4',
    fontSize: 12,
  },
});
