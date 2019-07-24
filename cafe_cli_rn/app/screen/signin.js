//import liraries
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

// Estilos....
import Styles from '../styles/styles'
import Colors from '../styles/colors'

// Elementos...

import Checker from '../components/checker'
// create a component
class MyClass extends Component {
    static navigationOptions = {
        headerLeft: null
    }

    state = {
        check: false
    }

    render() {
        return (
            <View style={Styles.container}>
                <Text style={[Styles.txt]}>Usuario</Text>
                <TextInput placeholder={'Usuario'}/>
                <Text style={[Styles.txt]}>Contrañesa</Text>
                <TextInput placeholder={'Contraseña'}/>
                <Checker value={this.state.check} onPress={(value) => this.setState({check: value})} txt={'Recordar cuenta'}/>
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
