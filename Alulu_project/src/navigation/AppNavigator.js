import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import AluminiumProfileScreen from '../screens/AluminiumProfileScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="AluminiumProfile" component={AluminiumProfileScreen} />
      {/* Add more screens as needed */}
    </Tab.Navigator>
  );
};

export default AppNavigator;
