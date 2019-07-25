import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

// Estilos....
import Styles from '../styles/styles'
import Colors from '../styles/colors'

class MyListItem extends React.PureComponent {
    _onPress = () => {
      this.props.onValueChange(this.props.id);
    };
  
    render() {
        const textColor = this.props.selected == this.props.id ? '#fff' : '#bbb';
        const bgColor = this.props.selected == this.props.id ? Colors.primary.default : 'transparent';
      return (
        <TouchableOpacity style={[styles.element, {backgroundColor: bgColor}]} onPress={this._onPress}>
            <Text style={[Styles.txt,{color: textColor}]}>{this.props.value}</Text>
        </TouchableOpacity>
      );
    }
  }
  
export default class MultiSelectList extends React.PureComponent {

    state = {
        selected: '0',
    };

    _keyExtractor = (item, index) => item.id;

    _onValueChange = (id) => {
        // updater functions are preferred for transactional updates
        /*this.setState((state) => {
        // copy the map rather than modifying state.
            const selected = new Map(state.selected);
            selected.set(id, !selected.get(id)); // toggle
            console.warn(selected.size)
            return {selected};
        });*/
        this.setState({selected: id})
        this.props.onValueChange(this.props.data[id].value)
        //console.warn(this.props.data[id].value)
    };

    _renderItem = ({item}) => (
        <MyListItem
            id={item.id}
            onValueChange={this._onValueChange}
            selected={this.state.selected}
            //selected={!!this.state.selected.get(item.id)}
            value={item.value}
        />
    );

    render() {
        return (
            <View style={[Styles.columns,{flex: 0, marginVertical: 5}]}>
                <Text style={[Styles.txt, Styles.columns_item,{alignSelf: 'center'}]}>{this.props.title}</Text>
                <FlatList
                    data={this.props.data}
                    extraData={this.state}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    numColumns={5}
                    style={[Styles.columns_item]}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    element: {
        paddingVertical: 10,
        paddingHorizontal: 15,
    }
})