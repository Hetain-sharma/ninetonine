// components/TabBar.js
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const TabBar = ({activeTab, setActiveTab}) => {
  const tabs = ['Timeline', 'Milestones', 'Reports'];

  return (
    <View style={styles.tabContainer}>
      {tabs.map(tab => (
        <TouchableOpacity
          key={tab}
          style={[
            styles.tab,
            activeTab === tab &&
              (tab === 'Timeline'
                ? styles.activeTimelineTab
                : tab === 'Milestones'
                ? styles.activeMilestonesTab
                : styles.activeReportsTab),
          ]}
          onPress={() => setActiveTab(tab)}>
          <Text
            style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 16,
    justifyContent: 'space-evenly',
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginRight: 8,
  },
  activeTimelineTab: {
    backgroundColor: '#E6D6FF',
  },
  activeMilestonesTab: {
    backgroundColor: '#E6D6FF',
  },
  activeReportsTab: {
    backgroundColor: '#E6D6FF',
  },
  tabText: {
    fontSize: 14,
    color: '#000',
  },
  activeTabText: {
    fontWeight: '500',
  },
});

export default TabBar;
