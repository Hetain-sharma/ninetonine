'use client';

import {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import COLORS from '../../../../../constants/color';
import {useNavigation} from '@react-navigation/native';

const Goals = () => {
  const [activeTab, setActiveTab] = useState('My Goals');
  const [selectedTimeframe, setSelectedTimeframe] = useState('3 Months');
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  // Sample data for goals
  const [myGoals, setMyGoals] = useState([
    {
      id: 1,
      title: 'Counting 1-20',
      category: 'Math',
      progress: 65,
      icon: 'star',
    },
    {
      id: 2,
      title: 'Identify Colors',
      category: 'Visual',
      progress: 65,
      icon: 'menu-book',
    },
    {
      id: 3,
      title: 'Social Interaction',
      category: 'Social',
      progress: 65,
      icon: 'people',
    },
  ]);

  const recommendedGoals = [
    {
      id: 4,
      title: 'Identify initial letter sounds',
      category: 'Language',
      icon: 'star',
    },
    {id: 5, title: 'Writing Letters', category: 'Language', icon: 'menu-book'},
    {id: 6, title: 'Shapes Recognition', category: 'Language', icon: 'people'},
  ];

  const upcomingGoals = [
    {
      id: 7,
      title: 'Counting 10-20',
      category: 'Maths',
      description: 'Learn to count from 10 to 20 and recognize the numbers',
      icon: 'star',
    },
    {
      id: 8,
      title: 'Basic Shapes',
      category: 'Cognitive',
      description:
        'Learn to identify basic shapes like circle, square, triangle',
      icon: 'menu-book',
    },
    {
      id: 9,
      title: 'Simple Sentences',
      category: 'Language',
      description: 'Speak in simple, complete sentences',
      icon: 'people',
    },
  ];

  const handleAddToMyGoals = goal => {
    // Add goal to myGoals if not already there
    if (!myGoals.some(myGoal => myGoal.id === goal.id)) {
      setMyGoals([...myGoals, {...goal, progress: 0}]);
    }
  };

  const handleDeleteGoal = id => {
    setMyGoals(myGoals.filter(goal => goal.id !== id));
  };

  const renderTabs = () => {
    return (
      <View style={styles.tabContainer}>
        {['My Goals', 'Recommended', 'Upcoming'].map(tab => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}>
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderMyGoals = () => {
    return (
      <ScrollView style={styles.contentContainer}>
        {myGoals.map(goal => (
          <View key={goal.id} style={styles.goalCard}>
            <View style={styles.goalCardContent}>
              <View style={styles.goalIconContainer}>
                <View
                  style={[
                    styles.iconCircle,
                    getIconBackgroundColor(goal.icon),
                  ]}>
                  <Icon name={goal.icon} size={24} color="#000" />
                </View>
              </View>
              <View style={styles.goalInfo}>
                <Text style={styles.goalTitle}>{goal.title}</Text>
                <Text style={styles.goalCategory}>{goal.category}</Text>
                <Text style={styles.progressText}>Progress</Text>
                <View style={styles.progressBarContainer}>
                  <View
                    style={[styles.progressBar, {width: `${goal.progress}%`}]}
                  />
                </View>
              </View>
              <View style={styles.goalActions}>
                <View style={styles.actionButtonsContainer}>
                  <TouchableOpacity style={styles.actionButton}>
                    <Icon name="edit" size={20} color="#4B56D2" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.actionButton}
                    onPress={() => handleDeleteGoal(goal.id)}>
                    <Icon name="delete" size={20} color="#FF6B6B" />
                  </TouchableOpacity>
                </View>
                <Text style={styles.progressPercentage}>{goal.progress}%</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    );
  };

  const renderRecommendedGoals = () => {
    return (
      <ScrollView style={styles.contentContainer}>
        {recommendedGoals.map(goal => (
          <View key={goal.id} style={styles.goalCard}>
            <View style={styles.goalCardContent}>
              <View style={styles.goalIconContainer}>
                <View
                  style={[
                    styles.iconCircle,
                    getIconBackgroundColor(goal.icon),
                  ]}>
                  <Icon name={goal.icon} size={24} color="#000" />
                </View>
              </View>
              <View style={styles.goalInfo}>
                <Text style={styles.goalTitle}>{goal.title}</Text>
                <Text style={styles.goalCategory}>{goal.category}</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => handleAddToMyGoals(goal)}>
              <Icon name="add" size={20} color="#4B56D2" />
              <Text style={styles.addButtonText}>Add to My Goals</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    );
  };

  const renderTimeframeSelector = () => {
    const timeframes = ['3 Months', '6 Months', '9 Months', '12 Months'];

    return (
      <View style={styles.timeframeContainer}>
        {timeframes.map(timeframe => (
          <TouchableOpacity
            key={timeframe}
            style={[
              styles.timeframeButton,
              selectedTimeframe === timeframe && styles.selectedTimeframe,
            ]}
            onPress={() => setSelectedTimeframe(timeframe)}>
            <Text
              style={[
                styles.timeframeText,
                selectedTimeframe === timeframe && styles.selectedTimeframeText,
              ]}>
              {timeframe}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderUpcomingGoals = () => {
    return (
      <ScrollView style={styles.contentContainer}>
        <Text style={styles.upcomingTitle}>Upcoming Curriculum</Text>
        <Text style={styles.upcomingSubtitle}>
          Track Emma's learning journey
        </Text>

        {renderTimeframeSelector()}

        {upcomingGoals.map(goal => (
          <View key={goal.id} style={styles.upcomingGoalCard}>
            <View style={styles.goalIconContainer}>
              <View
                style={[styles.iconCircle, getIconBackgroundColor(goal.icon)]}>
                <Icon name={goal.icon} size={24} color="#000" />
              </View>
            </View>
            <View style={styles.upcomingGoalInfo}>
              <View style={styles.upcomingGoalHeader}>
                <Text style={styles.goalTitle}>{goal.title}</Text>
                <View
                  style={[
                    styles.categoryPill,
                    getCategoryPillColor(goal.category),
                  ]}>
                  <Text style={styles.categoryPillText}>{goal.category}</Text>
                </View>
              </View>
              <Text style={styles.goalDescription}>{goal.description}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    );
  };

  const getIconBackgroundColor = icon => {
    switch (icon) {
      case 'star':
        return {backgroundColor: '#E6E6FA'}; // Light purple
      case 'menu-book':
        return {backgroundColor: '#FFE4E1'}; // Light pink
      case 'people':
        return {backgroundColor: '#E0F8E0'}; // Light green
      default:
        return {backgroundColor: '#E6E6FA'};
    }
  };

  const getCategoryPillColor = category => {
    switch (category) {
      case 'Maths':
        return {backgroundColor: '#E6E6FA'}; // Light purple
      case 'Cognitive':
        return {backgroundColor: '#FFE4E1'}; // Light pink
      case 'Language':
        return {backgroundColor: '#E0F8E0'}; // Light green
      default:
        return {backgroundColor: '#E6E6FA'};
    }
  };

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>Learning Goals</Text>
          <Text style={styles.headerSubtitle}>
            Track Emma's learning journey
          </Text>
        </View>
      </View>

      {renderTabs()}

      {activeTab === 'My Goals' && renderMyGoals()}
      {activeTab === 'Recommended' && renderRecommendedGoals()}
      {activeTab === 'Upcoming' && renderUpcomingGoals()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backButton: {
    marginRight: 16,
  },
  headerTextContainer: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.black,
    fontFamily: 'Poppins-Regular',
  },
  headerSubtitle: {
    fontSize: 14,
    color: COLORS.text_gray,
    fontFamily: 'Poppins-Regular',
  },
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  tab: {
    paddingVertical: 12,
    marginRight: 24,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#4B56D2',
  },
  tabText: {
    fontSize: 14,
    color: COLORS.text_gray,
    fontFamily: 'Poppins-Regular',
  },
  activeTabText: {
    color: '#4B56D2',
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  goalCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  goalCardContent: {
    flexDirection: 'row',
  },
  goalIconContainer: {
    marginRight: 12,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
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
    color: COLORS.text_gray,
    marginBottom: 8,
    fontFamily: 'Poppins-Regular',
  },
  progressText: {
    fontSize: 12,
    color: COLORS.text_gray,
    marginBottom: 4,
    fontFamily: 'Poppins-Regular',
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4B56D2',
    borderRadius: 4,
  },
  goalActions: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginLeft: 8,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
  },
  actionButton: {
    padding: 4,
    marginLeft: 8,
  },
  progressPercentage: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 'auto',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F2FF',
    borderRadius: 8,
    padding: 12,
    marginTop: 12,
  },
  addButtonText: {
    color: '#4B56D2',
    fontFamily: 'Poppins-Regular',
    marginLeft: 4,
    fontWeight: '500',
  },
  upcomingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    fontFamily: 'Poppins-Regular',
  },
  upcomingSubtitle: {
    fontSize: 14,
    color: COLORS.text_gray,
    marginBottom: 16,
    fontFamily: 'Poppins-Regular',
  },
  timeframeContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  timeframeButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 8,
    borderRadius: 20,
  },
  selectedTimeframe: {
    backgroundColor: '#4B56D2',
  },
  timeframeText: {
    fontSize: 14,
    color: COLORS.text_gray,
    fontFamily: 'Poppins-Regular',
  },
  selectedTimeframeText: {
    color: COLORS.white,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
  },
  upcomingGoalCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    flexDirection: 'row',
  },
  upcomingGoalInfo: {
    flex: 1,
    marginLeft: 12,
  },
  upcomingGoalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryPill: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  categoryPillText: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
  },
  goalDescription: {
    fontSize: 14,
    color: COLORS.text_gray,
    fontFamily: 'Poppins-Regular',
  },
});

export default Goals;
