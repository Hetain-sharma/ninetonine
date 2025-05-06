import React from 'react';
import {ScrollView, View, StyleSheet, StatusBar} from 'react-native';

import COLORS from '../../constants/color';
import Banner from '../../components/UserHomepageComponents/Banner/Banner';
import MyChildren from '../../components/UserHomepageComponents/MyChildrenSection/MyChildren';
import FeaturesCard from '../../components/UserHomepageComponents/FeatureCards/FeaturesCard';
import Updates from '../../components/UserHomepageComponents/UpdatesSection/Updates';
import Products from '../../components/UserHomepageComponents/Products/Products';
import ChatButton from '../../components/UserHomepageComponents/ChatButton/ChatButton';
import Header from '../../components/UserHomepageComponents/Header/Header';

const AuthenticatedHomePage = () => {
  return (
    <>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle="dark-content" />
      <View style={styles.container}>
        <Header />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Banner />
          <MyChildren />
          <FeaturesCard />
          <Updates />
          <Products />
          <ChatButton />
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 0,
  },
});

export default AuthenticatedHomePage;
