import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import COLORS from '../../../constants/color';

const Updates = () => {
  return (
    <View style={styles.updatesContainer}>
      <View style={styles.sectionHeaderRow}>
        <Text style={styles.sectionTitle}>Recent Updates</Text>
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>View All</Text>
          <AntDesign name="right" size={16} color="#6a3093" />
        </TouchableOpacity>
      </View>

      {/* Update Items */}
      <View style={styles.updateItem}>
        <View style={[styles.updateIconContainer]}>
          <FontAwesome name="star" size={20} color="#000" />
        </View>
        <View style={styles.updateContent}>
          <View style={styles.updateTitleRow}>
            <Text style={styles.updateTitle}>New Achievement! 🎉</Text>
            <Text style={styles.updateTime}>Today, 10:00AM</Text>
          </View>
          <Text style={styles.updateDescription}>
            Emma completed her weekly reading goal
          </Text>
        </View>
      </View>

      <View style={styles.updateItem}>
        <View style={[styles.updateIconContainer]}>
          <Feather name="check" size={20} color="#4CAF50" />
        </View>
        <View style={styles.updateContent}>
          <View style={styles.updateTitleRow}>
            <Text style={styles.updateTitle}>Progress Update</Text>
            <Text style={styles.updateTime}>Today, 10:00AM</Text>
          </View>
          <Text style={styles.updateDescription}>
            Emma has completed her math module with a score of 92%.
          </Text>
        </View>
      </View>

      <View style={styles.updateItem}>
        <View style={[styles.updateIconContainer]}>
          <MaterialIcons name="notifications" size={20} color="#F44336" />
        </View>
        <View style={styles.updateContent}>
          <View style={styles.updateTitleRow}>
            <Text style={styles.updateTitle}>Payment Reminder</Text>
            <Text style={styles.updateTime}>Today, 10:00AM</Text>
          </View>
          <Text style={styles.updateDescription}>
            June fees are due in 3 days. Please make payment to avoid late fees.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Updates;

const styles = StyleSheet.create({
  updatesContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewAllText: {
    color: '#6a3093',
    marginRight: 5,
    fontSize: 14,
  },
  updateItem: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  updateIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  updateContent: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    paddingBottom: 15,
  },
  updateTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  updateTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: COLORS.black,
  },
  updateTime: {
    color: COLORS.gray,
    fontSize: 12,
  },
  updateDescription: {
    color: COLORS.gray,
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
});
