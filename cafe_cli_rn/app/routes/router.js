//import liraries
import React, { Component } from 'react';
import { View, Image, TouchableOpacity, ScrollView, SafeAreaView, DrawerItems } from 'react-native';
import {createAppContainer, createStackNavigator, createDrawerNavigator} from 'react-navigation'

// Estilos

import Styles from '../constants/styles'
import Colors from '../constants/colors'

// Rutas

import Splash from '../screen/splash'
import Signin from '../screen/signin'
import Signup from '../screen/signup'
import Home from '../screen/home'
import Stores from '../screen/stores'
import About from '../screen/about'
import Account from '../screen/account'
import Menu from '../screen/menu'

// Drawer Component

import drawerContent from '../components/drawerContent'

/**
 * Elementos....
 */

const HomeDrawer = createDrawerNavigator({
    Main: {screen: Home, 
        navigationOptions: {
            drawerLabel: 'Inicio',
            drawerIcon: ({ tintColor }) => (
                <Image
                    source={require("../src/icons/1x/baseline_home_black_48dp.png")}
                    resizeMode="contain"
                    style={{ width: 20, height: 20, tintColor: tintColor }}
                />
            )}},
    Stores: {screen: Stores, 
        navigationOptions: {
            drawerLabel: 'Tiendas',
            drawerIcon: ({ tintColor }) => (
                <Image
                    source={require("../src/icons/1x/baseline_location_on_black_48dp.png")}
                    resizeMode="contain"
                    style={{ width: 20, height: 20, tintColor: tintColor }}
                />
            )}},
    Menu: {screen: Menu, 
        navigationOptions: {
            drawerLabel: 'Menu',
            drawerIcon: ({ tintColor }) => (
                <Image
                    source={require("../src/icons/1x/baseline_local_cafe_black_48dp.png")}
                    resizeMode="contain"
                    style={{ width: 20, height: 20, tintColor: tintColor }}
                />
            )}},
    About: {screen: About, 
        navigationOptions: {
            drawerLabel: 'Acerca',
            drawerIcon: ({ tintColor }) => (
                <Image
                    source={require("../src/icons/1x/baseline_info_black_48dp.png")}
                    resizeMode="contain"
                    style={{ width: 20, height: 20, tintColor: tintColor }}
                />
            )}},
    Account: {screen: Account, 
        navigationOptions: {
            drawerLabel: 'Usuario',
            drawerIcon: ({ tintColor }) => (
                <Image
                    source={require("../src/icons/1x/baseline_account_circle_black_48dp.png")}
                    resizeMode="contain"
                    style={{ width: 20, height: 20, tintColor: tintColor }}
                />
            )}}
},{
    initialRouteName: 'Main',
    navigationOptions: ({navigation}) => {
        return {
            headerLeft: (
                <TouchableOpacity style={[Styles.icon, { marginLeft: 15}]} onPress={() => navigation.openDrawer()}>
                    <Image style={[Styles.icon, {tintColor: '#fff', width: 20, height: 20}]} source={require('../src/icons/1x/Menu.png')} />
                </TouchableOpacity>
            )
        }
    },
    drawerBackgroundColor: Colors.primary.dark,
    //contentComponent: drawerContent,    
    contentOptions: {
        activeTintColor: '#fff',
        activeBackgroundColor: Colors.primary.light,
        inactiveTintColor: Colors.primary.light,
        labelStyle: Styles.txt
    },
    defaultNavigationOptions: {

    }
})

const MainStrack = createStackNavigator({
    Splash: {screen: Splash},
    Signin: {screen: Signin},
    Signup: {screen: Signup},
    Home: {screen: HomeDrawer}
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
