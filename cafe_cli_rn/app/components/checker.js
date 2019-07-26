import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

// Estilos....
import Styles from '../constants/styles'
import Colors from '../constants/colors'

export default class Checker extends Component {

    state = {
        selected: false
    }

    _onChangeValue = (value) => {
        this.props.onPress(!value)
        //this.props.callback()
    }

    render() {
        let value = this.props.value
        return(
            <View style={[Styles.columns,{alignItems: "center", marginTop: 10}]}>
                <TouchableOpacity style={[Styles.icon]} onPress={() => this._onChangeValue(value)}>
                    <Image style={[Styles.icon_primary]} source={value ? require('../src/icons/1x/baseline_check_box_black_48dp.png') : require('../src/icons/1x/baseline_check_box_outline_blank_black_48dp.png')} />
                </TouchableOpacity>
                <Text style={[Styles.txt, Styles.txt_sub, Styles.columns_item, {marginLeft: 10}]}>{this.props.txt}</Text>
            </View>
        )
    }
}
