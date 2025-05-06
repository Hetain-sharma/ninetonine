// components/ProgressCircle.js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProgressCircle = ({percentage, color}) => {
  // Determine which icon to use based on percentage
  const getProgressIcon = () => {
    if (percentage <= 25) {
      return 'progress-clock';
    } else if (percentage <= 50) {
      return 'progress-check';
    } else if (percentage <= 75) {
      return 'progress-upload';
    } else {
      return 'progress-star';
    }
  };

  return (
    <View style={styles.container}>
      <Icon name={getProgressIcon()} size={40} color={color} />
      {/* <Text style={[styles.percentageText, {color}]}>{percentage}%</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  percentageText: {
    position: 'absolute',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default ProgressCircle;
