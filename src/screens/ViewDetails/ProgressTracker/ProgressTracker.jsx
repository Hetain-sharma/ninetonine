import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './ProgressComponents/Header';
import TabBar from './ProgressComponents/TabBar';
import SkillsProgress from './ProgressComponents/SkillProgress';
import Milestones from './ProgressComponents/Milestones';
import Reports from './ProgressComponents/Reports';
import COLORS from '../../../constants/color';
import {SafeAreaView} from 'react-native-safe-area-context';

const ProgressTracker = () => {
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

export default ProgressTracker;
