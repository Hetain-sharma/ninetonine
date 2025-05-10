import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const TabBar = ({tabs, activeTab, onTabPress}) => {
  return (
    <View style={styles.tabBar}>
      {tabs.map(tab => (
        <TouchableOpacity
          key={tab}
          style={[styles.tab, activeTab === tab ? styles.activeTab : null]}
          onPress={() => onTabPress(tab)}>
          <Text
            style={[
              styles.tabText,
              activeTab === tab ? styles.activeTabText : null,
            ]}>
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 8,
    backgroundColor: '#f0f0f0',
  },
  activeTab: {
    backgroundColor: '#e0e0ff',
  },
  tabText: {
    fontSize: 14,
    color: '#666',
  },
  activeTabText: {
    color: '#6060ff',
    fontWeight: '500',
  },
});

export default TabBar;
