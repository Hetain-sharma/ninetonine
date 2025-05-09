import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import COLORS from '../../../constants/color';
import Heading from '../../CommonComponents/Heading';

// Update data array
const updatesData = [
  {
    id: '1',
    title: 'New Achievement! 🎉',
    subtitle: 'Emma completed her weekly reading goal',
    time: 'Today, 10:00AM',
    iconName: 'star',
    iconType: 'FontAwesome',
    iconColor: '#000',
  },
  {
    id: '2',
    title: 'Progress Update',
    subtitle: 'Emma has completed her math module with a score of 92%.',
    time: 'Today, 10:00AM',
    iconName: 'check',
    iconType: 'Feather',
    iconColor: '#4CAF50',
  },
  {
    id: '3',
    title: 'Payment Reminder',
    subtitle:
      'June fees are due in 3 days. Please make payment to avoid late fees.',
    time: 'Today, 10:00AM',
    iconName: 'notifications',
    iconType: 'MaterialIcons',
    iconColor: '#F44336',
  },
];

// Function to render appropriate icon
const renderIcon = (type, name, color) => {
  const size = 20;
  switch (type) {
    case 'FontAwesome':
      return <FontAwesome name={name} size={size} color={color} />;
    case 'Feather':
      return <Feather name={name} size={size} color={color} />;
    case 'MaterialIcons':
      return <MaterialIcons name={name} size={size} color={color} />;
    default:
      return null;
  }
};

const Updates = () => {
  const renderItem = ({item}) => (
    <View style={styles.updateItem}>
      <View style={styles.updateIconContainer}>
        {renderIcon(item.iconType, item.iconName, item.iconColor)}
      </View>
      <View style={styles.updateContent}>
        <View style={styles.updateTitleRow}>
          <Text style={styles.updateTitle}>{item.title}</Text>
          <Text style={styles.updateTime}>{item.time}</Text>
        </View>
        <Text style={styles.updateDescription}>{item.subtitle}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.updatesContainer}>
      <Heading message={'Recent Updates'} />

      <FlatList
        data={updatesData}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
      />
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
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.black,
    fontFamily: 'Poppins-Regular',
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
