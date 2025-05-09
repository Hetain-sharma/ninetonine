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

import RedirectScreen from '../screens/OtherScreens/RedirectScreen';
import ViewDetailsScreen from '../screens/NestedScreens/ViewDetails/ViewDetailsScreen';
import LearningGoalsScreen from '../screens/NestedScreens/ViewDetails/LearningGoalsScreen';
import BookClassScreen from '../screens/NestedScreens/ViewDetails/BookClassScreen';
import EnrollScreen from '../screens/EnrollScreen';
import School from '../screens/School';
import BranchSelector from '../components/SchoolComponents/BranchSelector';
import NotificationScreen from '../screens/NotificationsScreen';
import LifeSkillHacks from '../screens/UnRegisteredUser/LifeSkillHacks';
import EventsScreen from '../screens/UnRegisteredUser/EventsScreen';
import {FeaturedServicesScreen} from '../screens/UnRegisteredUser/FeaturedServicesScreen';

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
    <Stack.Screen name={SCREENS.SCHOOL_SCREEN} component={School} />
    <Stack.Screen name={SCREENS.SELECT_SCHOOL} component={BranchSelector} />
    <Stack.Screen
      name={SCREENS.UPCOMING_EVENTS_SCREEN}
      component={EventsScreen}
    />
    <Stack.Screen
      name={SCREENS.FEATURED_SERVICES}
      component={FeaturedServicesScreen}
    />
    <Stack.Screen
      name={SCREENS.NOTIFICATION_SCREEN}
      component={NotificationScreen}
    />
    <Stack.Screen name={SCREENS.LIFE_SKILL_HACKS} component={LifeSkillHacks} />
    <Stack.Screen
      name={SCREENS.ViewDetails_Screen}
      component={ViewDetailsScreen}
    />
    <Stack.Screen
      name={SCREENS.AddNewGoal_Screen}
      component={LearningGoalsScreen}
    />
    <Stack.Screen
      name={SCREENS.BookClasses_Screen}
      component={BookClassScreen}
    />
  </Stack.Navigator>
);

export default StackNavigator;
