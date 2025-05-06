import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import COLORS from '../../../constants/color';

const {width} = Dimensions.get('window');

const Profile = () => {
  return (
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
  );
};

export default Profile;

const styles = StyleSheet.create({
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
});
