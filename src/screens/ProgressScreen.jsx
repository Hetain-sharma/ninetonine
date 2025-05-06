import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import COLORS from '../constants/color';
import {SafeAreaView} from 'react-native-safe-area-context';
import SkillsProgress from '../components/ProgressComponents/SkillProgress';
import Milestones from '../components/ProgressComponents/Milestones';
import Reports from '../components/ProgressComponents/Reports';
import TabBar from '../components/ProgressComponents/TabBar';
import Header from '../components/ProgressComponents/Header';

const ProgressScreen = () => {
  const [activeTab, setActiveTab] = useState('Timeline');

  const renderScreen = () => {
    switch (activeTab) {
      case 'Timeline':
        return <SkillsProgress />;
      case 'Milestones':
        return <Milestones />;
      case 'Reports':
        return <Reports />;
      default:
        return <SkillsProgress />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Progress Tracker"
        subtitle="Track Emma's learning journey"
      />
      <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
      {renderScreen()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 0,
  },
});

export default ProgressScreen;
