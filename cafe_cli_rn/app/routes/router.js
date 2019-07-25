//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {createAppContainer, createSwitchNavigator, createStackNavigator} from 'react-navigation'

// Estilos

import Styles from '../styles/styles'
import Colors from '../styles/colors'

// Rutas

import Splash from '../screen/splash'
import Signin from '../screen/signin'
import Signup from '../screen/signup'

/**
 * Elementos....
 */

const MainStrack = createStackNavigator({
    Splash: {screen: Splash},
    Signin: {screen: Signin},
    Signup: {screen: Signup}
},{
    initialRouteName: 'Splash',
    defaultNavigationOptions: {
        title: 'COFFE',
        headerStyle: {
            backgroundColor: Colors.primary.default,
            fontStyle: 'normal',
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
        },
        headerTintColor: '#FFFFFF',
    }
})

//make this component available to the app
export default createAppContainer(MainStrack);
