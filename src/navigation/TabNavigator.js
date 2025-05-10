// src/navigation/TabNavigator.js

// // src/navigation/TabNavigator.js

import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import COLORS from '../constants/color';

// Import the screens for your tabs

import RedirectScreen from '../screens/OtherScreens/RedirectScreen';
import ProgressScreen from '../screens/ProgressScreen';
import ResourcesScreen from '../screens/ResourcesScreen';
import HomePage from '../screens/HomeScreen/HomePage';
import CalenderScreen from '../screens/CalendarScreen';
import School from '../screens/School';
import GalleryScreen from '../screens/RegisteredUser/GalleryScreen';

const Tab = createBottomTabNavigator();

const TABS = [
  {
    name: 'Homepage',
    component: HomePage,
    icon: 'home-outline',
    iconFocused: 'home',
  },
  {
    name: 'Progress',
    component: ProgressScreen,
    icon: 'time-outline',
    iconFocused: 'time',
  },
  {
    name: 'Calendar',
    component: CalenderScreen,
    icon: 'search-outline',
    iconFocused: 'search',
  },
  {
    name: 'Resources',
    component: ResourcesScreen,
    icon: 'grid-outline',
    iconFocused: 'grid',
  },
  {
    name: 'Dashboard',
    component: GalleryScreen,
    icon: 'person-outline',
    iconFocused: 'person',
  },
];

const TabNavigator = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={({route}) => {
        const tab = TABS.find(t => t.name === route.name) || {
          icon: 'help-outline',
          iconFocused: 'help',
        };

        return {
          headerShown: false,
          tabBarIcon: ({focused, color}) => (
            <Ionicons
              name={focused ? tab.iconFocused : tab.icon}
              size={20}
              color={color}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
          },
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.black,
          tabBarStyle: {
            height: Platform.OS === 'android' ? 65 : 85,
            paddingBottom:
              Platform.OS === 'android' ? insets.bottom : insets.bottom + 10,
            borderTopWidth: 1,
            borderColor: COLORS.border,
            backgroundColor: COLORS.white,
            elevation: 5,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.2,
            shadowRadius: 2,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
          },
        };
      }}>
      {TABS.map(tab => (
        <Tab.Screen key={tab.name} name={tab.name} component={tab.component} />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigator;
