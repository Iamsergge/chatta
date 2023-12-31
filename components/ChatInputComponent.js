import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import { FontAwesome, MaterialIcons, EvilIcons } from '@expo/vector-icons';

const ChatInputComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftView}>
        <MaterialIcons name='emoji-emotions' size={24} style={styles.emoji} />
        <TextInput
          placeholder={'Type a message'}
          style={styles.textInput}
        />
        <MaterialIcons name='camera-alt' size={24} style={styles.emoji} />
        <EvilIcons name='paperclip' size={22} style={styles.clip} />
      </View>
      <View style={styles.micContainer}>
        <FontAwesome name='microphone' size={24} style={styles.mic} />
      </View>
    </View>
  );
};

export default ChatInputComponent;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    
  },
  leftView: {
    height: 42,
    flex: 1,
    borderRadius: 21,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    padding: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
   
  },
  emoji: {
    color: '#272727',
    marginRight: 10
  },
  textInput: {
    fontSize: 15,
    color: '#4F4F4F',
    flex: 1
  },
  camera: {
    height: 21,
    width: 21,
    backgroundColor: '#4F4F4F',
    marginHorizontal: 10
  },
  clip: {
    height: 21,
    width: 21,
   // backgroundColor: '#4F4F4F',
  },
  micContainer: {
    height: 42,
    width: 42,
    borderRadius: 21,
    backgroundColor: '#FFF',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mic: {
    color: '#272727'
    
  }
});
