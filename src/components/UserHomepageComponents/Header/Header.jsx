import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Menu from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import COLORS from '../../../constants/color';
import {Image} from 'react-native-animatable';

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.openDrawer()}>
        <Menu name="menu" size={25} color={COLORS.black} />
      </TouchableOpacity>
      <View style={styles.middleSection}>
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>Welcome, Emma</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View>
              <Text style={styles.dateText}>Kinder Garden</Text>
              <Text style={styles.dateText}>Karamangala,Bangalore</Text>
            </View>
            <TouchableOpacity
              style={{marginLeft: 5}}
              onPress={() => navigation.navigate('School')}>
              <Entypo name="chevron-down" size={20} color={COLORS.black} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('ReDirect')}
        style={styles.mapButton}>
        <Image
          source={require('../../../assets/images/Profile.jpg')}
          style={{width: 50, height: 50, borderRadius: 50}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    alignSelf: 'center',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  menuButton: {
    paddingBottom: 0,
  },
  middleSection: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  greetingContainer: {
    marginTop: 10,
    fontFamily: 'Poppins-Regular',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  greetingText: {
    fontSize: 18,
    fontWeight: '800',
    lineHeight: 22,
    marginBottom: 2,
    color: COLORS.black,
    fontFamily: 'Poppins-Regular',
  },
  dateText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    fontWeight: '400',
    color: COLORS.gray,
    lineHeight: 16,
  },
  talkToExpertButton: {
    flexDirection: 'row',
    backgroundColor: COLORS.light_primary,
    padding: 1,
    height: 30,
    width: 120,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  talkToExpertText: {
    color: COLORS.primary,
    fontWeight: '700',
    fontSize: 14,
  },
  mapButton: {
    flexDirection: 'row',
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
