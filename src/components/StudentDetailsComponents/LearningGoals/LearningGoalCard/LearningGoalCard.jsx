import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import COLORS from '../../../../constants/color';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const LearningGoalCard = ({GOALS_DATA}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.cardTitleContainer}>
          <Text>🎯</Text>
          <Text style={styles.cardTitle}>Learning Goals</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('AddNewGoal')}>
          <Feather name="edit" color={COLORS.black} size={20} />
        </TouchableOpacity>
      </View>

      {GOALS_DATA.map((goal, index) => (
        <View key={index}>
          <View style={styles.goalItem}>
            <Text style={styles.goalText}>{goal.name}</Text>
            <Text style={styles.goalPercentage}>{goal.progress}%</Text>
          </View>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, {width: `${goal.progress}%`}]} />
          </View>
        </View>
      ))}
    </View>
  );
};

export default LearningGoalCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginTop: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 3,
    elevation: 1,
    backgroundColor: COLORS.white,
    borderWidth: 0.5,
    borderColor: COLORS.border,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  goalItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  goalText: {
    fontSize: 14,
  },
  goalPercentage: {
    fontSize: 14,
    fontWeight: '500',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#E5E5EA',
    borderRadius: 4,
    marginBottom: 12,
  },
  progressFill: {
    height: 8,
    backgroundColor: '#000',
    borderRadius: 4,
  },
});
