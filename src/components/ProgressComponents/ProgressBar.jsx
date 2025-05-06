// components/ProgressBar.js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ProgressBar = ({progress, color, showPercentage = true}) => {
  return (
    <View style={styles.container}>
      <View style={styles.progressBarContainer}>
        <View
          style={[
            styles.progressBar,
            {width: `${progress}%`, backgroundColor: color},
          ]}
        />
      </View>
      {showPercentage && <Text style={styles.progressText}>{progress}%</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  progressBarContainer: {
    flex: 1,
    height: 8,
    backgroundColor: '#E6E6E6',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: 4,
  },
  progressText: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
  },
});

export default ProgressBar;
