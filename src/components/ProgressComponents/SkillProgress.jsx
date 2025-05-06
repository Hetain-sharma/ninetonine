// screens/SkillsProgress.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import COLORS from '../../constants/color';
import ProgressCircle from './ProgressCircle';

const SkillsProgress = () => {
  const skills = [
    {
      id: 1,
      name: 'Motor Skills',
      progress: 65,
      color: '#7C4DFF',
      icon: 'circle',
      iconType: 'material',
      bgColor: '#E6D6FF',
    },
    {
      id: 2,
      name: 'Language',
      progress: 80,
      color: '#FF5252',
      icon: 'smile-o',
      iconType: 'fontawesome',
      bgColor: '#FFD6D6',
    },
    {
      id: 3,
      name: 'Cognitive',
      progress: 75,
      color: '#4CAF50',
      icon: 'star',
      iconType: 'octicons',
      bgColor: '#D6FFD6',
    },
    {
      id: 4,
      name: 'Emotional',
      progress: 58,
      color: '#FFC107',
      icon: 'heart',
      iconType: 'feather',
      bgColor: '#FFF2D6',
    },
    {
      id: 5,
      name: 'Social',
      progress: 65,
      color: '#7C4DFF',
      icon: 'like1',
      iconType: 'antdesign',
      bgColor: '#E6D6FF',
    },
  ];

  const renderIcon = skill => {
    switch (skill.iconType) {
      case 'material':
        return <Entypo name={skill.icon} size={24} color="#000" />;
      case 'fontawesome':
        return <FontAwesome name={skill.icon} size={24} color="#000" />;
      case 'octicons':
        return <Octicons name={skill.icon} size={24} color="#000" />;
      case 'feather':
        return <Feather name={skill.icon} size={24} color="#000" />;
      case 'antdesign':
        return <AntDesign name={skill.icon} size={24} color="#000" />;
      default:
        return <Icon name="circle" size={24} color="#000" />;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Skills Progress</Text>
        <TouchableOpacity style={styles.addButton}>
          <Icon name="add" size={24} color="#FFF" />
          <Text style={styles.addButtonText}>Add Goal</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.skillsList}>
        {skills.map(skill => (
          <TouchableOpacity key={skill.id} style={styles.skillItem}>
            <View
              style={[styles.iconContainer, {backgroundColor: skill.bgColor}]}>
              {renderIcon(skill)}
            </View>
            <View style={styles.skillInfo}>
              <Text style={styles.skillName}>{skill.name}</Text>
              <Text style={styles.skillHint}>Tap to view progress</Text>
            </View>
            <View style={styles.progressContainer}>
              <ProgressCircle percentage={skill.progress} color={skill.color} />
            </View>
            <Icon name="chevron-right" size={24} color="#999" />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  addButtonText: {
    color: COLORS.white,
    marginLeft: 4,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
  },
  skillsList: {
    paddingHorizontal: 16,
  },
  skillItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  skillInfo: {
    flex: 1,
  },
  skillName: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
    color: COLORS.black,
  },
  skillHint: {
    fontSize: 12,
    color: COLORS.gray,
    fontFamily: 'Poppins-Regular',
  },
  progressContainer: {
    marginRight: 12,
  },
});

export default SkillsProgress;
