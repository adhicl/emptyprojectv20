import Expo from 'expo';

import React from 'react';

import { StackNavigator } from 'react-navigation';

import SplashScreen from '../screens/SplashScreen';
import AnotherScreen from '../screens/AnotherScreen';
import MainScreenNavigator from './MainScreenNavigator';

const AppNavigator = StackNavigator({
    Splash: { screen: SplashScreen },
    Main: { screen: MainScreenNavigator },
    Another: { screen: AnotherScreen }
});

export default AppNavigator;
