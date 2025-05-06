import {SafeAreaView, StyleSheet} from 'react-native';
import CurrentLearningGoals from '../../../components/StudentDetailsComponents/LearningGoals/LearningGoalsPage/LearningGoalsPageComponents/CurrentLearningGoals';
import Goals from '../../../components/StudentDetailsComponents/LearningGoals/LearningGoalsPage/LearningGoalsPageComponents/Goals';
import GoalSearch from '../../../components/StudentDetailsComponents/LearningGoals/LearningGoalsPage/LearningGoalsPageComponents/GoalSearch';

const LearningGoalsScreen = () => {
  // Sample data for current goals
  const currentGoals = [
    {
      id: 1,
      title: 'Counting 1-20',
      category: 'Math',
      progress: 65,
    },
    {
      id: 2,
      title: 'Identify Colors',
      category: 'Visual',
      progress: 80,
    },
    {
      id: 3,
      title: 'Social Interaction',
      category: 'Social',
      progress: 75,
    },
  ];

  // Sample data for goal search
  const availableGoals = [
    {
      id: 4,
      title: 'Counting 10-20',
      category: 'Cognitive',
      description: 'Learn to count from 10 to 20 and recognize the numbers',
    },
    {
      id: 5,
      title: 'Counting 10-20',
      category: 'Cognitive',
      description: 'Learn to count from 10 to 20 and recognize the numbers',
    },
    {
      id: 6,
      title: 'Counting 10-20',
      category: 'Cognitive',
      description: 'Learn to count from 10 to 20 and recognize the numbers',
    },
  ];

  // Handler functions
  const handleEditGoals = () => {
    console.log('Edit goals pressed');
  };

  const handleAddGoals = () => {
    console.log('Add goals pressed');
  };

  const handleViewAll = () => {
    console.log('View all pressed');
  };

  const handleAddGoal = goal => {
    console.log('Add goal pressed:', goal);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Uncomment one of these to see each component individually */}
      {/* <CurrentLearningGoals
        goals={currentGoals}
        onEditGoals={handleEditGoals}
        onAddGoals={handleAddGoals}
        onViewAll={handleViewAll}
      /> */}
      <Goals />

      {/* <GoalSearch goals={availableGoals} onAddGoal={handleAddGoal} /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default LearningGoalsScreen;
