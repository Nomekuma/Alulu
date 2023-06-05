import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen';
import AluminiumProfile from '../screens/AluminiumProfileScreen';
import AluminiumAlucobond from '../screens/AluminiumAlucobondScreen';
import AluminiumFitting from '../screens/AluminiumFittingScreen';
import Accessories from '../screens/AccessoriesScreen';

const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    AluminiumProfile: { screen: AluminiumProfile },
    AluminiumAlucobond: { screen: AluminiumAlucobond },
    AluminiumFitting: { screen: AluminiumFitting },
    Accessories: { screen: Accessories },
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(AppNavigator);