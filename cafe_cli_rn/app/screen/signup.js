import React, { Component } from 'react'
import { Alert, Text, TouchableOpacity, View, TextInput, Switch } from 'react-native'
import Checker from '../components/checker'

// Estilos....
import Styles from '../constants/styles'
import Colors from '../constants/colors'

export default class Signup extends Component {
    state = {
        id: '1144084979',
        email: 'jdnl95@gmail.com',
        password: '12345',
        firstname: 'Jesus Daniel',
        lastname: 'Neira Lara',
        terms: false
    }

    _signup = async () => {
        //console.warn(JSON.stringify(this.state))
        if(this.state.terms){
            await fetch('http://192.168.1.72:3000/users/signup',{
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: this.state.id,
                    email: this.state.email,
                    password: this.state.password,
                    firstname: this.state.firstname,
                    lastname: this.state.lastname
                })
            }).then((response) => response.json()).then((resJSON) => {
                // console.warn(resJSON)
                if(resJSON.status == true){
                    this.props.navigation.navigate('Signin')
                }else {
                    Alert.alert(
                        'ERROR',
                        'Usuario ya existente',
                        [
                            {text: 'OK', style: 'cancel'}
                        ]
                    )
                }
            }).catch((err) => console.error(err))
        } else {
            Alert.alert(
                'ERROR',
                'Acepte los terminos y condiciones',
                [
                    {text: 'OK', style: 'cancel'}
                ]
            )
        }
    }

    render() {
        return (
            <View style={[Styles.container]}>
                <View style={[{flex: 4}]}>
                    <View style={[Styles.columns]}>
                        <TextInput value={this.state.firstname} onChangeText = {((text) => this.setState({firstname: text}))} style={[Styles.input, Styles.columns_item]} placeholder={'Nombre'} />
                        <TextInput value={this.state.lastname} onChangeText = {((text) => this.setState({lastname: text}))} style={[Styles.input, Styles.columns_item]} placeholder={'Apellido'} />
                    </View>
                    <TextInput value={this.state.id} onChangeText = {((text) => this.setState({id: text}))} style={[Styles.input]} placeholder={'Documento'} />
                    <TextInput value={this.state.email} onChangeText = {((text) => this.setState({email: text}))} style={[Styles.input]} placeholder={'Correo'} />
                    <TextInput value={this.state.password} onChangeText = {((text) => this.setState({password: text}))} style={[Styles.input]} placeholder={'Contraseña'} />
                </View>
                <View style={[{flex: 1}]}>
                    <View style={[Styles.columns]}>
                        <Text style={[Styles.txt, Styles.txt_sub, Styles.columns_item]}>Acepto lo terminos y las condiciones</Text>
                        <Switch style={[{flex: 0}]} trackColor={'#2f2'} value={this.state.terms} onValueChange={(value) => this.setState({terms: value})} />
                    </View>
                    <TouchableOpacity style={[Styles.btn,{marginTop: 15}]} onPress={this._signup}>
                        <Text style={[Styles.txt, Styles.txt_white]}>REGISTRAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
