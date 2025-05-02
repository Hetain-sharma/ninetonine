// src/navigation/StackNavigator.js

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SCREENS} from './RoutesContants';

// Import your screens

import TabNavigator from './TabNavigator';
import IntroScreen from '../screens/OnBoarding/IntroScreen';
import OnboardingScreen from '../screens/OnBoarding/OnboardingScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import OtpScreen from '../screens/Auth/OtpScreen';
import ViewDetails from '../screens/ViewDetails/ViewDetailsScreen/ViewDetails';
import RedirectScreen from '../screens/OtherScreens/RedirectScreen';
import AddNewGoal from '../screens/ViewDetails/AddGoal/AddNewGoal';
import BookClass from '../screens/ViewDetails/BookClass/BookClass';
import EnrollScreen from '../screens/ViewDetails/EnrollScreen';

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={SCREENS.GET_STARTED_SCREEN} component={IntroScreen} />
    <Stack.Screen
      name={SCREENS.ON_BOARDING_SCREEN}
      component={OnboardingScreen}
    />
    <Stack.Screen name={SCREENS.LOGIN_SCREEN} component={LoginScreen} />
    <Stack.Screen name={SCREENS.OTP_SCREEN} component={OtpScreen} />
    <Stack.Screen name={SCREENS.MAIN_SCREEN} component={TabNavigator} />
    <Stack.Screen name={SCREENS.ENROLL_SCREEN} component={EnrollScreen} />
    <Stack.Screen name={SCREENS.REDIRECT} component={RedirectScreen} />
    <Stack.Screen name={SCREENS.ViewDetails_Screen} component={ViewDetails} />
    <Stack.Screen name={SCREENS.AddNewGoal_Screen} component={AddNewGoal} />
    <Stack.Screen name={SCREENS.BookClasses_Screen} component={BookClass} />
  </Stack.Navigator>
);

export default StackNavigator;
