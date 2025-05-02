import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import Header from '../../../components/HomepageComponents/Header';
import COLORS from '../../../constants/color';
import {useNavigation} from '@react-navigation/native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SafeAreaView} from 'react-native-safe-area-context';

const {width} = Dimensions.get('window');

const ViewDetails = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.welcomeContainer}>
            <Image
              source={require('../../../assets/images/Profile.jpg')}
              style={styles.profileImage}
            />
            <View style={styles.welcomeTextContainer}>
              <Text style={styles.welcomeText}>Welcome , EMMA</Text>
              <Text style={styles.activityText}>
                Emma has completed 3 activities today
              </Text>
            </View>
          </View>
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconButton}>
              <Text style={styles.iconText}>▼</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Text style={styles.iconText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Main Tabs */}
        <View style={styles.tabContainer}>
          <TouchableOpacity style={styles.tabActive}>
            <Text style={styles.tabTextActive}>Overview</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Progress</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Goals</Text>
          </TouchableOpacity>
        </View>
        {/* Sub Tabs */}
        <View style={styles.subTabContainer}>
          <TouchableOpacity style={styles.subTabActive}>
            <Text style={styles.subTabTextActive}>Week</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.subTab}>
            <Text style={styles.subTabText}>Month</Text>
          </TouchableOpacity>
        </View>
        {/* Learning Goals */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.cardTitleContainer}>
              <Text>🎯</Text>
              <Text style={styles.cardTitle}>Learning Goals</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('AddNewGoal')}>
              <Feather name="edit" size={20} color={COLORS.black} />
            </TouchableOpacity>
          </View>

          <View style={styles.goalItem}>
            <Text style={styles.goalText}>Recognize colors</Text>
            <Text style={styles.goalPercentage}>78%</Text>
          </View>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, {width: '78%'}]} />
          </View>

          <View style={styles.goalItem}>
            <Text style={styles.goalText}>Count to 20</Text>
            <Text style={styles.goalPercentage}>90%</Text>
          </View>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, {width: '90%'}]} />
          </View>

          <View style={styles.goalItem}>
            <Text style={styles.goalText}>Write alphabet</Text>
            <Text style={styles.goalPercentage}>40%</Text>
          </View>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, {width: '40%'}]} />
          </View>
        </View>
        {/* Progress Badges */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.cardTitleContainer}>
              <EvilIcons name="trophy" size={25} color={COLORS.primary} />
              <Text style={styles.cardTitle}>Progress Badges</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.badgesContainer}>
            <View style={styles.badgeItem}>
              {/* <FontAwesome5 name="palette" size={40} color={COLORS.primary} /> */}
              <Image
                source={require('../../../assets/images/Paint.png')}
                style={styles.sessionIcon}
              />
              <Text style={styles.badgeText}>Art Explorer</Text>
            </View>
            <View style={styles.badgeItem}>
              <MaterialCommunityIcons
                name="brain"
                size={40}
                color={COLORS.primary}
              />
              <Text style={styles.badgeText}>Curious Learner</Text>
            </View>
          </View>
        </View>
        {/* Today's Session */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.cardTitleContainer}>
              <Ionicons name="book-outline" size={25} color="orange" />
              <Text style={styles.cardTitle}>Today's Session</Text>
            </View>
            <View style={styles.sessionActions}>
              <TouchableOpacity
                onPress={() => navigation.navigate('BookClasses')}>
                <View style={{flexDirection: 'row', gap: 5}}>
                  <Text style={styles.bookClassText}>Book Class</Text>
                  <MaterialIcons
                    name="date-range"
                    size={20}
                    color={COLORS.black}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.sessionCard}>
            <View style={styles.sessionInfo}>
              <Image
                source={require('../../../assets/images/Math.png')}
                style={styles.sessionIcon}
              />
              <View style={styles.sessionDetails}>
                <Text style={styles.sessionTitle}>Math Fundamentals</Text>
                <Text style={styles.sessionTime}>10:00 AM - 11:00 AM</Text>
                <View style={styles.teacherInfo}>
                  <View style={styles.statusDot} />
                  <Text style={styles.teacherName}>Mr. ABC</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.sessionCard}>
            <View style={styles.sessionInfo}>
              <Image
                source={require('../../../assets/images/Paint.png')}
                style={styles.sessionIcon}
              />
              <View style={styles.sessionDetails}>
                <Text style={styles.sessionTitle}>Creative Arts</Text>
                <Text style={styles.sessionTime}>1:00 PM - 2:00 PM</Text>
                <View style={styles.teacherInfo}>
                  <View style={styles.statusDot} />
                  <Text style={styles.teacherName}>Mr. Davis</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* Current Teacher */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.cardTitleContainer}>
              <Feather name="users" size={20} color={COLORS.black} />
              <Text style={styles.cardTitle}>Current Teacher</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.switchText}>Switch</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.teacherCard}>
            <Image
              source={require('../../../assets/images/Profile.jpg')}
              style={styles.teacherImage}
            />
            <View style={styles.teacherDetails}>
              <Text style={styles.teacherTitle}>Ms. Sharma</Text>
              <View style={styles.ratingContainer}>
                <Ionicons name="star" size={15} color="orange" />
                <Text style={styles.ratingText}>4.8 • Primary Education</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ViewDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 16,
    marginTop: 16,
  },
  welcomeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  welcomeTextContainer: {
    flexDirection: 'column',
  },
  welcomeText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 600,
    fontFamily: 'Poppins-Regular',
  },
  activityText: {
    color: 'white',
    fontSize: 10,
    // opacity: 0.8,
    fontFamily: 'Poppins-Regular',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    width: 30,
    height: 30,
    borderRadius: 2,
    // backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  iconText: {
    color: 'white',
    fontSize: 16,
  },
  tabContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 16,
    justifyContent: 'space-evenly',
    // width: '100%',
  },
  tab: {
    marginRight: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.border,
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabActive: {
    borderRadius: 20,
    marginRight: 8,
    backgroundColor: '#E2C8FF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.border,
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    color: COLORS.black,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
  },
  tabTextActive: {
    color: COLORS.primary,
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
  },
  subTabContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 16,
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
    color: COLORS.black,
    fontWeight: '500',
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
  },
  subTabTextActive: {
    color: COLORS.primary,
    fontWeight: '600',
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
  },
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
  cardIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
    marginLeft: 10,
  },
  editIcon: {
    width: 20,
    height: 20,
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
    fontFamily: 'Poppins-Regular',
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
  viewAllText: {
    color: '#000',
    fontSize: 13,
  },
  badgesContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  badgeItem: {
    alignItems: 'center',
  },
  badgeIcon: {
    width: 50,
    height: 50,
    marginBottom: 8,
  },
  badgeText: {
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  sessionActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bookClassText: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
  },
  calendarIcon: {
    width: 20,
    height: 20,
  },
  sessionCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E5EA',
  },
  sessionInfo: {
    flexDirection: 'row',
  },
  sessionIcon: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  sessionDetails: {
    flex: 1,
  },
  sessionTitle: {
    fontSize: 12,
    fontWeight: '800',
    marginBottom: 2,
    fontFamily: 'Poppins-Regular',
  },
  sessionTime: {
    fontSize: 13,
    color: COLORS.text_gray,
    marginBottom: 4,
    fontFamily: 'Poppins-Regular',
  },
  teacherInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#34C759',
    marginRight: 6,
  },
  teacherName: {
    fontSize: 13,
    color: COLORS.text_gray,
    fontFamily: 'Poppins-Regular',
  },
  switchText: {
    color: COLORS.primary,
    fontSize: 13,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
  },
  teacherCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
  },
  teacherImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  teacherDetails: {
    flex: 1,
  },
  teacherTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
    fontFamily: 'Poppins-Regular',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starIcon: {
    width: 14,
    height: 14,
    marginRight: 4,
    tintColor: '#FFCC00',
  },
  ratingText: {
    fontSize: 13,
    color: '#8E8E93',
    fontFamily: 'Poppins-Regular',
  },
});
