// components/EventCard.js
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../constants/color';

export const EventCard = ({
  title,
  date,
  location,
  buttonText,
  buttonColor,
  buttonTextColor,
  buttonBorderColor,
  tag,
  tagColor,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{title}</Text>
        {tag && (
          <View style={[styles.tag, {backgroundColor: tagColor}]}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        )}
      </View>

      <View style={styles.cardContent}>
        <View style={styles.infoRow}>
          <View style={styles.iconContainer}>
            <Icon name="calendar" size={18} color="#8A56AC" />
          </View>
          <Text style={styles.infoText}>{date}</Text>
        </View>

        <View style={styles.infoRow}>
          <View style={styles.iconContainer}>
            <Icon name="map-pin" size={18} color="#8A56AC" />
          </View>
          <Text style={styles.infoText}>{location}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: buttonColor,
            borderColor: buttonBorderColor || buttonColor,
            borderWidth: buttonBorderColor ? 1 : 0,
          },
        ]}>
        <Text style={[styles.buttonText, {color: buttonTextColor}]}>
          {buttonText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#F0EBF8',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.black,
    fontFamily: 'Poppins-Regular',
  },
  tag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  tagText: {
    fontSize: 12,
    color: '#8A56AC',
    fontFamily: 'Poppins-Regular',
  },
  cardContent: {
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  iconContainer: {
    width: 24,
    alignItems: 'center',
    marginRight: 8,
  },
  infoText: {
    fontSize: 14,
    color: COLORS.text_gray,
    fontFamily: 'Poppins-Regular',
  },
  button: {
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
  },
});
