import Expo from 'expo';

import React from 'react';

import { TabNavigator } from 'react-navigation';

import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
import Tab3Screen from '../screens/Tab3Screen';

const MainScreenNavigator = TabNavigator(
    {
        Tab1: { screen: Tab1Screen },
        Tab2: { screen: Tab2Screen },
        Tab3: { screen: Tab3Screen }
    },
    {
        tabBarOptions: {
            activeTintColor: '#000',
            inactiveTintColor: '#ccc',
            labelStyle: {
                fontWeight: 'bold'
            },
            style: {
                backgroundColor: '#fff'
            }
        }
    }
);

export default MainScreenNavigator;