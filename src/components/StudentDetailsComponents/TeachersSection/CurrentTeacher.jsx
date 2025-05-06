import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import COLORS from '../../../constants/color';
import Feather from 'react-native-vector-icons/Feather';
import {Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {width} = Dimensions.get('window');

const CurrentTeacher = () => {
  return (
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
  );
};

export default CurrentTeacher;

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
