import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

// Estilos....
import Styles from '../constants/styles'
import Colors from '../constants/colors'

export default class Home extends Component {

    static navigationOptions = {
    }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={[Styles.container]}>
        <Text style={[Styles.txt, Styles.txt_primary, Styles.subtitle]}>Ofertas</Text>
        <Text style={[Styles.txt, Styles.txt_primary, Styles.subtitle]}>Noticias</Text>
      </View>
    );
  }
}
