import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ChatButton = () => {
  return (
    <View>
      <TouchableOpacity style={styles.chatButton}>
        <MaterialIcons name="chat" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default ChatButton;

const styles = StyleSheet.create({
  chatButton: {
    position: 'absolute',
    bottom: 80,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#6a3093',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});
