import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLORS from '../../../../constants/color';

const {width} = Dimensions.get('window');

const Benefits = ({
  onPress,
  title,
  subtitle,
  duration,
  icon,
  ageGroup,
  fee,
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.9}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <FontAwesome5 name={icon} size={20} color="#571D99" />
        </View>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity style={styles.favoriteButton}>
          <Ionicons name="heart-outline" size={22} color="#000" />
        </TouchableOpacity>
      </View>

      <Text style={styles.description}>{subtitle}</Text>

      <View style={styles.tagsContainer}>
        <View style={[styles.tag, styles.ageTag]}>
          <Icon name="account-child" size={16} color="#0A8043" />
          <Text style={[styles.tagText, styles.ageTagText]}>{ageGroup}</Text>
        </View>

        <View
          style={[
            styles.tag,
            styles.durationTag,
            {borderRadius: 12, paddingVertical: 4, paddingHorizontal: 8},
          ]}>
          <Icon name="clock-outline" size={16} color="#ffffff" />
          <Text style={[styles.tagText, {color: '#ffffff'}]}>{duration}</Text>
        </View>

        <View style={[styles.tag, styles.priceTag]}>
          <FontAwesome name="rupee" size={14} color="#E53935" />
          <Text style={[styles.tagText, styles.priceTagText]}>{fee}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    // width: width,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    // marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 3,
    elevation: 1,
    backgroundColor: COLORS.white,
    borderWidth: 0.5,
    borderColor: COLORS.border,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    flex: 1,
  },
  favoriteButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 16,
    marginLeft: 42, // Align with title text
  },
  tagsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    marginTop: 4,
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 4,
  },
  tagText: {
    fontSize: 12,
    marginLeft: 4,
    fontWeight: '500',
  },
  ageTag: {
    backgroundColor: '#E9EBF3',
  },
  ageTagText: {
    color: '#166534',
  },
  durationTag: {
    backgroundColor: '#2CB4EC',
  },
  durationTagText: {
    color: '#DE10E5',
  },
  priceTag: {
    backgroundColor: '#FFF0E5',
  },
  priceTagText: {
    color: '#DC2626',
  },
});

export default Benefits;
