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
            <View style={[Styles.container, {justifyContent: 'space-around', flex: 1}]}>
                <View style={[{flex: 3}]}>
                    <View style={[Styles.columns,{borderBottomColor: Colors.primary.default, borderBottomWidth: 2}]}>
                        <Image style={[Styles.icon_primary]} source={require('../src/icons/1x/baseline_account_box_black_48dp.png')} />
                        <TextInput style={[Styles.icon_input]} placeholder={'Usuario'}/>
                    </View>
                    <View style={[Styles.columns,{borderBottomColor: Colors.primary.default, borderBottomWidth: 2}]}>
                        <Image style={[Styles.icon_primary]} source={require('../src/icons/1x/baseline_lock_black_48dp.png')} />
                        <TextInput style={[Styles.icon_input]} placeholder={'Contraseña'}/>
                    </View>
                    <Checker value={this.state.check} onPress={(value) => this.setState({check: value})} txt={'Recordar cuenta'}/>
                </View>
                <View style={[{flex: 1}]}>
                    <TouchableOpacity style={[Styles.btn]}>
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
