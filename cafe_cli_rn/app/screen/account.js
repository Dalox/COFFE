import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';

// Estilos....
import Styles from '../constants/styles'
import Colors from '../constants/colors'

export default class Account extends Component {

    state = {
        user: {}
    }

    componentWillMount = async () => {
        const user = JSON.parse( await AsyncStorage.getItem('UserInfo'))
        // console.warn(user)
        this.setState({user: user.INFO})
        // console.warn(typeof this.state.user, this.state.user)
    }

    _signout = async () => {
        await AsyncStorage.removeItem('UserInfo')
        this.props.navigation.navigate('Signin')
    }

    render() {
        return (
            <View style={[Styles.container]}>
                <View style={{flex: 3}}>
                    <View style={[Styles.columns, Styles.listitem]}>
                        <Text style={[Styles.txt, Styles.columns_item]}>Nombre</Text>
                        <Text style={[Styles.txt, Styles.txt_sub, Styles.columns_item]}>{this.state.user.name}</Text>
                    </View>
                    <View style={[Styles.columns, Styles.listitem]}>
                        <Text style={[Styles.txt, Styles.columns_item]}>Correo</Text>
                        <Text style={[Styles.txt, Styles.txt_sub, Styles.columns_item]}>{this.state.user.email}</Text>
                    </View>
                    <View style={[Styles.columns, Styles.listitem]}>
                        <Text style={[Styles.txt, Styles.columns_item]}>Documento</Text>
                        <Text style={[Styles.txt, Styles.txt_sub, Styles.columns_item]}>{this.state.user.id}</Text>
                    </View>
                    <View style={[Styles.columns, Styles.listitem]}>
                        <Text style={[Styles.txt, Styles.columns_item]}>Puntos</Text>
                        <Text style={[Styles.txt, Styles.txt_sub, Styles.columns_item]}>{this.state.user.points}</Text>
                    </View>
                </View>
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                    <TouchableOpacity style={[Styles.btn]} onPress={this._signout}>
                        <Text style={[Styles.txt, Styles.txt_white]}>CERRAR SESION</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
        /*return(
            <View>
                <Text>ACCOUNT</Text>
            </View>
        )*/
    }
}
