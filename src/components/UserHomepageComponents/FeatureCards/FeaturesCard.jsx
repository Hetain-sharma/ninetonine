import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image} from 'react-native';
import COLORS from '../../../constants/color';

const FeaturesCard = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.featureCardsContainer}>
      <View style={styles.featureRow}>
        <TouchableOpacity
          style={styles.featureCard}
          onPress={() => navigation.navigate('Progress')}>
          <View style={styles.iconContainer}>
            <Image
              source={require('../../../assets/images/ProgressTracking.png')}
              style={styles.featureIcon}
            />
          </View>
          <Text style={styles.featureText}>Progress Tracking</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.featureCard}>
          <View style={styles.iconContainer}>
            <Image
              source={require('../../../assets/images/SwitchTime.png')}
              style={styles.featureIcon}
            />
          </View>
          <Text style={styles.featureText}>Switch Time</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.featureRow}>
        <TouchableOpacity style={styles.featureCard}>
          <View style={styles.iconContainer}>
            <Image
              source={require('../../../assets/images/SwitchTeacher.png')}
              style={styles.featureIcon}
            />
          </View>
          <Text style={styles.featureText}>Switch Teacher</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.featureCard}>
          <View style={styles.iconContainer}>
            <Image
              source={require('../../../assets/images/Payment.png')}
              style={styles.featureIcon}
            />
          </View>
          <Text style={styles.featureText}>Payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FeaturesCard;

const styles = StyleSheet.create({
  featureCardsContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  featureRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  featureCard: {
    width: '48%',
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E9EBF3',
  },
  iconContainer: {
    width: 70,
    height: 70,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  featureIcon: {
    width: 65,
    height: 65,
  },
  featureText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
});
