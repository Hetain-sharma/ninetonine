import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from './Header';

const CurrentLearningGoals = ({goals, onEditGoals, onAddGoals, onViewAll}) => {
  // Function to determine the color of the progress circle based on the percentage
  const getProgressColor = percentage => {
    if (percentage >= 80) return '#FF6B6B'; // Red for high percentage
    if (percentage >= 70) return '#4CAF50'; // Green for medium percentage
    return '#4B56D2'; // Purple for lower percentage
  };

  // Function to render the circular progress indicator
  const renderProgressCircle = percentage => {
    const color = getProgressColor(percentage);

    return (
      <View style={styles.progressCircleContainer}>
        <View style={[styles.progressCircle, {borderColor: color}]}>
          <Text style={[styles.progressText, {color}]}>{percentage}%</Text>
        </View>
      </View>
    );
  };

  // Function to get background color for the icon based on category
  const getIconBackgroundColor = category => {
    switch (category.toLowerCase()) {
      case 'math':
        return '#E6E6FA'; // Light purple
      case 'visual':
        return '#FFE4E1'; // Light pink
      case 'social':
        return '#E0F8E0'; // Light green
      default:
        return '#E6E6FA';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.GoalsContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Current Learning Goals</Text>
          <TouchableOpacity onPress={onViewAll} style={styles.viewAllButton}>
            <Text style={styles.viewAllText}>View All</Text>
            <Icon name="chevron-right" size={20} color="#000" />
          </TouchableOpacity>
        </View>

        {goals.map((goal, index) => (
          <View key={index} style={styles.goalCard}>
            <View style={styles.goalContent}>
              <View
                style={[
                  styles.iconContainer,
                  {backgroundColor: getIconBackgroundColor(goal.category)},
                ]}>
                <Icon name="star" size={24} color="#000" />
              </View>
              <View style={styles.goalInfo}>
                <Text style={styles.goalTitle}>{goal.title}</Text>
                <Text style={styles.goalCategory}>{goal.category}</Text>
              </View>
              {renderProgressCircle(goal.progress)}
            </View>
          </View>
        ))}

        <TouchableOpacity style={styles.editButton} onPress={onEditGoals}>
          <Icon name="edit" size={20} color="#fff" />
          <Text style={styles.buttonText}>Edit Goals</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.addButton} onPress={onAddGoals}>
          <Icon name="add" size={20} color="#4B56D2" />
          <Text style={styles.addButtonText}>Add Goals</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  GoalsContainer: {
    padding: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewAllText: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },
  goalCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  goalContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  goalInfo: {
    flex: 1,
  },
  goalTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    fontFamily: 'Poppins-Regular',
  },
  goalCategory: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'Poppins-Regular',
  },
  progressCircleContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  progressText: {
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
  },
  editButton: {
    backgroundColor: '#4B56D2',
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 8,
    fontFamily: 'Poppins-Regular',
  },
  addButton: {
    backgroundColor: '#F0F2FF',
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#4B56D2',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 8,
    fontFamily: 'Poppins-Regular',
  },
});

export default CurrentLearningGoals;
