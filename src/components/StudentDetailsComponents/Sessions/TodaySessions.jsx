import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLORS from '../../../constants/color';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');

const TodaySessions = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.cardTitleContainer}>
          <Ionicons name="book-outline" size={25} color="orange" />
          <Text style={styles.cardTitle}>Today's Session</Text>
        </View>
        <View style={styles.sessionActions}>
          <TouchableOpacity onPress={() => navigation.navigate('BookClasses')}>
            <View style={{flexDirection: 'row', gap: 5}}>
              <Text style={styles.bookClassText}>Book Class</Text>
              <MaterialIcons name="date-range" size={20} color={COLORS.black} />
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
  );
};

export default TodaySessions;

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
});
