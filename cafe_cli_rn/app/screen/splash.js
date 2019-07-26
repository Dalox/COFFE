//import liraries
import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

// Estilos....
import Styles from '../constants/styles'
import Colors from '../constants/colors'

// create a component
class MyClass extends Component {

    static navigationOptions = {
        header: null
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.props.navigation.push('Signin')
        },1000)
    }

    render() {
        return (
            <View style={[Styles.container_full, {backgroundColor: Colors.primary.default}]}>
                <Image style={[Styles.image_big]} source={(require('../src/images/logo.png'))} />
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
        backgroundColor: Colors.primary.default,
    },
});

//make this component available to the app
export default MyClass;
