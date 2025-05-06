import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native';

const Banner = () => {
  return (
    <View style={styles.bannerContainer}>
      <Image
        source={require('../../../assets/images/banner.jpg')}
        style={styles.bannerImage}
      />
      <View style={styles.bannerContent}>
        <Text style={styles.bannerTitle}>
          Join the Drawing Competition This Sunday
        </Text>
        <TouchableOpacity style={styles.joinButton}>
          <Text style={styles.joinButtonText}>Join Us</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  bannerContainer: {
    height: 175,
    marginHorizontal: 20,
    marginVertical: 15,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  bannerContent: {
    padding: 20,
    height: '100%',
    justifyContent: 'center',
  },
  bannerTitle: {
    color: '#000',
    fontSize: 16,
    fontWeight: 600,
    maxWidth: '70%',
    marginBottom: 10,
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: 'Poppins-Bold',
  },
  joinButton: {
    backgroundColor: '#2c6e49',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignSelf: 'center',
  },
  joinButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
