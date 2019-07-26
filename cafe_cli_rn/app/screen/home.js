import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

// Estilos....
import Styles from '../constants/styles'
import Colors from '../constants/colors'

export default class Home extends Component {

    static navigationOptions = {
        /*headerLeft: (
            <Image style={[Styles.icon, {tintColor: '#fff', marginLeft: 15}]} source={require('../src/icons/1x/Menu.png')} />
        )*/
    }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> main </Text>
      </View>
    );
  }
}
