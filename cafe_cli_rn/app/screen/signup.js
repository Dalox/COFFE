import React, { Component } from 'react'
import { Text, TouchableOpacity, View, TextInput } from 'react-native'
import Checker from '../components/checker'

// Estilos....
import Styles from '../styles/styles'
import Colors from '../styles/colors'

export default class Signin extends Component {
    state = {
        genders: [
            {
                id: '0',
                value: 'HOMBRE'
            },
            {
                id: '1',
                value: 'MUJER'
            },
        ],
        email: 'jdnl95@gmail.com',
        password: '12345',
        firstname: 'Jesus Daniel',
        lastname: 'Neira Lara'
    }

    _signup = async () => {
        console.warn(JSON.stringify(this.state))
    }

    render() {
        return (
            <View style={[Styles.container]}>
                <View style={[{flex: 4}]}>
                    <View style={[Styles.columns]}>
                        <TextInput value={this.state.firstname} onChangeText = {((text) => this.setState({firstname: text}))} style={[Styles.input, Styles.columns_item]} placeholder={'Nombre'} />
                        <TextInput value={this.state.lastname} style={[Styles.input, Styles.columns_item]} placeholder={'Apellido'} />
                    </View>
                    <TextInput value={this.state.email} style={[Styles.input]} placeholder={'Correo'} />
                    <TextInput value={this.state.password} style={[Styles.input]} placeholder={'Contraseña'} />
                </View>
                <View style={[{flex: 1}]}>
                    <Checker value={this.state.check} onPress={(value) => this.setState({check: value})} txt={'Acepto terminos y condiciones'}/>
                    <TouchableOpacity style={[Styles.btn,{marginTop: 15}]} onPress={this._signup}>
                        <Text style={[Styles.txt, Styles.txt_white]}>REGISTRAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
