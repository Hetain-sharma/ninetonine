// screens/Milestones.js
import React from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../constants/color';
import ProgressBar from './ProgressBar';

const milestones = [
  {
    id: '1',
    title: 'Motor SKILLS',
    progress: 78,
    color: '#7C4DFF',
    skills: [
      {id: '1', name: 'Follows classroom rules', completed: true},
      {id: '2', name: 'Takes turns and shares', completed: true},
      {id: '3', name: 'Resolves conflicts independently', completed: false},
      {id: '4', name: 'Expresses feelings verbally', completed: true},
    ],
  },
  {
    id: '2',
    title: 'Language & Communication',
    progress: 80,
    color: '#7C4DFF',
    skills: [
      {id: '1', name: 'Speaks in complete sentences', completed: true},
      {id: '2', name: 'Follows 2-step directions', completed: true},
      {id: '3', name: 'Asks questions appropriately', completed: true},
      {id: '4', name: 'Recognizes written name', completed: false},
    ],
  },
  {
    id: '3',
    title: 'Physical Development',
    progress: 100,
    color: '#7C4DFF',
    skills: [
      {id: '1', name: 'Uses scissors effectively', completed: true},
      {id: '2', name: 'Holds pencil correctly', completed: true},
      {id: '3', name: 'Catches and throws a ball', completed: true},
      {id: '4', name: 'Balances on one foot', completed: true},
    ],
  },
];

const Milestones = () => {
  const renderSkill = skill => (
    <View key={skill.id} style={styles.skillItem}>
      <View style={styles.checkboxContainer}>
        {skill.completed ? (
          <Icon name="check-box" size={24} color={COLORS.primary} />
        ) : (
          <Icon
            name="check-box-outline-blank"
            size={24}
            color={COLORS.border}
          />
        )}
      </View>
      <Text style={styles.skillName}>{skill.name}</Text>
    </View>
  );

  const renderMilestone = ({item}) => (
    <View style={styles.milestoneCard}>
      <Text style={styles.milestoneTitle}>{item.title}</Text>

      <View style={styles.skillsList}>{item.skills.map(renderSkill)}</View>

      <View style={styles.progressSection}>
        <Text style={styles.progressLabel}>Progress</Text>
        <ProgressBar progress={item.progress} color={item.color} />
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Development Milestones</Text>
        <Text style={styles.subtitle}>
          Emma's progress across key developmental areas
        </Text>
      </View>

      <FlatList
        data={milestones}
        keyExtractor={item => item.id}
        renderItem={renderMilestone}
        contentContainerStyle={styles.milestonesList}
        scrollEnabled={false}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'Poppins-Regular',
  },
  milestonesList: {
    paddingHorizontal: 16,
  },
  milestoneCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  milestoneTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    fontFamily: 'Poppins-Regular',
  },
  skillsList: {
    marginBottom: 16,
  },
  skillItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  checkboxContainer: {
    marginRight: 8,
  },
  skillName: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  progressSection: {
    marginTop: 8,
  },
  progressLabel: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
    fontFamily: 'Poppins-Regular',
  },
});

export default Milestones;
