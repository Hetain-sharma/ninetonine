import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import COLORS from '../../../constants/color';

const Tabs = ({activeTab, setActiveTab}) => {
  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity
        style={activeTab === 'Overview' ? styles.tabActive : styles.tab}
        onPress={() => setActiveTab('Overview')}>
        <Text
          style={
            activeTab === 'Overview' ? styles.tabTextActive : styles.tabText
          }>
          Overview
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={activeTab === 'Progress' ? styles.tabActive : styles.tab}
        onPress={() => setActiveTab('Progress')}>
        <Text
          style={
            activeTab === 'Progress' ? styles.tabTextActive : styles.tabText
          }>
          Progress
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={activeTab === 'Goals' ? styles.tabActive : styles.tab}
        onPress={() => setActiveTab('Goals')}>
        <Text
          style={activeTab === 'Goals' ? styles.tabTextActive : styles.tabText}>
          Goals
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  tab: {
    marginRight: 8,
    borderRadius: 5,
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 3,
    elevation: 1,
    backgroundColor: COLORS.white,
    borderWidth: 0.5,
    borderColor: COLORS.border,
  },
  tabActive: {
    marginRight: 8,
    backgroundColor: '#E2C8FF',
    borderRadius: 5,
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 3,
    elevation: 1,
    borderWidth: 0.5,
    borderColor: COLORS.border,
  },
  tabText: {
    color: '#000000',
    fontWeight: '500',
  },
  tabTextActive: {
    color: '#6A3EA1',
    fontWeight: '600',
  },
});
