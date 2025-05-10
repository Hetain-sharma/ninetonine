import {Text, TouchableOpacity, View, StyleSheet, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import COLORS from '../../../../constants/color';
import AssetsStock from '../../../../constants/ImagesContants';

const LifeSkillCard = ({title, subtitle, image}) => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.cardContainer}>
        <View style={styles.tagContainer}>
          <TouchableOpacity>
            <Text style={styles.tagText}>Organization</Text>
          </TouchableOpacity>
        </View>

        <Image style={styles.image} source={image} />

        <View style={styles.contentContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{subtitle}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('ReDirect')}>
            <Text style={styles.learnMoreText}>Learn more</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LifeSkillCard;

const styles = StyleSheet.create({
  cardContainer: {
    height: 240,
    width: 220,
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
    shadowColor: '#0C1A4B',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 3,
    backgroundColor: COLORS.white,
  },
  tagContainer: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    zIndex: 10,
  },
  tagText: {
    color: COLORS.white,
    fontSize: 10,
    fontWeight: 'bold',
  },
  image: {
    height: 120,
    width: 220,
  },
  contentContainer: {
    paddingHorizontal: 10,
    height: 110,
    justifyContent: 'space-between',
    padding: 8,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  description: {
    fontSize: 12,
    color: COLORS.text_gray,
  },
  learnMoreText: {
    fontSize: 13,
    fontWeight: '500',
    color: COLORS.primary,
  },
});
