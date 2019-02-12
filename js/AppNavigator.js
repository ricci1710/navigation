import React from 'react';

import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Icon } from 'expo';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen.js';
import SettingsScreen from './screens/SettingsScreen';

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <Icon.Feather name="home" size={24} color={tintColor} />
        )
      }
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        title: 'Einstellung',
        tabBarIcon: ({ tintColor }) => (
          <Icon.Feather name="settings" size={24} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: 'darkorange',
      inactiveTintColor: 'lightblue',
      style: {
        backgroundColor: 'aliceblue'
      }
    }
  }
);

const home = createAppContainer(TabNavigator);
const AppNavigator = createStackNavigator(
  {
    login: { screen: LoginScreen },
    home: { screen: home }
  },
  {
    initialRouteName: "login",
    headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);

