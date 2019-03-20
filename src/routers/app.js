import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import {createSwitchNavigator, createAppContainer } from 'react-navigation';

import TabBar from './tab'
import LoginNav from './nav'
import AuthPage from './auth'



global.styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createAppContainer(createSwitchNavigator(
    {
      AuthLoading: AuthPage,
      App: TabBar,
      Auth: LoginNav,
    },
    {
      initialRouteName: 'AuthLoading',
    }
));
