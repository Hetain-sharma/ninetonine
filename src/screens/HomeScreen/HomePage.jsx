import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../../constants/color';
import AuthenticatedHomePage from './AuthenticatedHomePage';
import UnAuthenticatedHomePage from './UnAuthenticatedHomepage';
const HomePage = () => {
  const User = false;
  return (
    <>
      <SafeAreaView style={{flex: 1}} edges={['top']}>
        {User ? <AuthenticatedHomePage /> : <UnAuthenticatedHomePage />}
      </SafeAreaView>
    </>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    padding: 0,
  },
});
