//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {createAppContainer, createSwitchNavigator, createStackNavigator} from 'react-navigation'

// Estilos

import Styles from '../styles/styles'
import Colors from '../styles/colors'

import Splash from '../screen/splash'
import Signin from '../screen/signin'

/**
 * Elementos....
 */

const MainStrack = createStackNavigator({
    Splash: {screen: Splash},
    Signin: {screen: Signin}
},{
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

// create a component
class MyClass extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>MyClass</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default createAppContainer(MainStrack);
