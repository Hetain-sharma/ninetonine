import {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import Profile from '../../../components/StudentDetailsComponents/Profile/Profile';
import TodaySessions from '../../../components/StudentDetailsComponents/Sessions/TodaySessions';
import CurrentTeacher from '../../../components/StudentDetailsComponents/TeachersSection/CurrentTeacher';
import Tabs from '../../../components/StudentDetailsComponents/TabsAndBadges/Tabs';
import LearningGoalCard from '../../../components/StudentDetailsComponents/LearningGoals/LearningGoalCard/LearningGoalCard';
import ProgressBadgesCard from '../../../components/StudentDetailsComponents/ProgressBadges/ProgressBadesCard/ProgressBadgesCard';
import Header from '../../../components/UserHomepageComponents/Header/Header';

const {width} = Dimensions.get('window');

// Mock data for the different tabs
const GOALS_DATA = [
  {name: 'Recognize colors', progress: 78},
  {name: 'Count to 20', progress: 90},
  {name: 'Write alphabet', progress: 40},
];

const BADGES_DATA = [
  {name: 'Art Explorer', icon: '🎨'},
  {name: 'Curious Learner', icon: '🧠'},
];

const SESSIONS_DATA = [
  {
    title: 'Math Fundamentals',
    time: '10:00 AM - 11:00 AM',
    teacher: 'Mr. ABC',
    icon: '📚',
  },
  {
    title: 'Creative Arts',
    time: '1:00 PM - 2:00 PM',
    teacher: 'Mr. Davis',
    icon: '🎨',
  },
];

const ViewDetailsScreen = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [activeSubTab, setActiveSubTab] = useState('Week');

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Profile />
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <View style={styles.subTabContainer}>
          <TouchableOpacity
            style={
              activeSubTab === 'Week' ? styles.subTabActive : styles.subTab
            }
            onPress={() => setActiveSubTab('Week')}>
            <Text
              style={
                activeSubTab === 'Week'
                  ? styles.subTabTextActive
                  : styles.subTabText
              }>
              Week
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={activeSubTab === 'Month' ? styles.subTab : styles.subTab}
            onPress={() => setActiveSubTab('Month')}>
            <Text
              style={
                activeSubTab === 'Month' ? styles.subTabText : styles.subTabText
              }>
              Month
            </Text>
          </TouchableOpacity>
        </View>
        {/* Content based on active tab */}
        {activeTab === 'Overview' && (
          <>
            <LearningGoalCard GOALS_DATA={GOALS_DATA} />
            <ProgressBadgesCard BADGES_DATA={BADGES_DATA} />
            <TodaySessions />
            <CurrentTeacher />
          </>
        )}

        {activeTab === 'Progress' && (
          <View>
            {activeTab === 'Progress' && (
              <ProgressBadgesCard BADGES_DATA={BADGES_DATA} />
            )}
          </View>
        )}

        {activeTab === 'Goals' && (
          <View>
            <LearningGoalCard GOALS_DATA={GOALS_DATA} />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  subTabContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 16,
    alignSelf: 'flex-end',
  },
  subTab: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    marginLeft: 8,
  },
  subTabActive: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginLeft: 8,
    backgroundColor: '#E2C8FF',
  },
  subTabText: {
    color: '#000000',
    fontWeight: '500',
    fontSize: 13,
  },
  subTabTextActive: {
    color: '#6A3EA1',
    fontWeight: '600',
    fontSize: 13,
  },
});

export default ViewDetailsScreen;
