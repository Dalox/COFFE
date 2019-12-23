//import liraries
import React, { Component } from 'react';
import { Alert, View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Switch } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

// Estilos....
import Styles from '../constants/styles'
import Colors from '../constants/colors'

// Elementos...

import Checker from '../components/checker'
// create a component
class MyClass extends Component {
    static navigationOptions = {
        headerLeft: null
    }

    state = {
        //check: false,
        id: '1144084979',
        password: '12345'
    }

    _signin = async() => {
        let user = null
        await fetch('http://us-central1-cafe-82cb4.cloudfunctions.net/SignInUser',{
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: this.state.id,
                password: this.state.password,
            })
        }).then((response) => response.json()).then((resJSON) => {
            //console.warn(typeof resJSON)
            if(resJSON.status == false) {
                Alert.alert(
                    'ERROR',
                    'Información incorrecta',
                    [
                        {text: 'OK', style:'cancel'}
                    ]
                )
            } else {
                user = resJSON
            }
        }).catch((err) => 
            Alert.alert(
                'ERROR',
                'Problema de servidor',
                [
                    {text: 'OK', style:'cancel'}
                ]
        ))
        if(user != null) {
            try {
                await AsyncStorage.setItem('UserInfo',JSON.stringify(user))
            }catch (e) {
                console.warn(e)
            }
            this.props.navigation.navigate('Home')
        }
    }

    render() {
        return (
            <View style={[Styles.container, {justifyContent: 'space-around', flex: 1}]}>
                <View style={[{flex: 3}]}>
                    <View style={[Styles.columns,{borderBottomColor: Colors.primary.default, borderBottomWidth: 2}]}>
                        <Image style={[Styles.icon_light]} source={require('../src/icons/1x/baseline_account_box_black_48dp.png')} />
                        <TextInput value={this.state.id} maxLength={10} keyboardType={'number-pad'} onChangeText = {((text) => this.setState({id: text}))} style={[Styles.input]} placeholder={'Documento'} />
                    </View>
                    <View style={[Styles.columns,{borderBottomColor: Colors.primary.default, borderBottomWidth: 2}]}>
                        <Image style={[Styles.icon_light]} source={require('../src/icons/1x/baseline_lock_black_48dp.png')} />
                        <TextInput secureTextEntry={true} value={this.state.password} onValueChange={(value) => this.setState({password: value})} style={[Styles.icon_input]} placeholder={'Contraseña'}/>
                    </View>
                </View>
                <View style={[{flex: 1}]}>
                    <TouchableOpacity style={[Styles.btn]} onPress={this._signin}>
                        <Text style={[Styles.txt, Styles.txt_white]}>INICIAR SESION</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[Styles.btn_border]} onPress={() => this.props.navigation.push('Signup')}>
                        <Text style={[Styles.txt, Styles.txt_primary]}>RESGISTRARSE</Text>
                    </TouchableOpacity>
                </View>
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
export default MyClass;
