import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'

import { DrawerItems, SafeAreaView } from 'react-navigation';

// Estilos....
import Styles from '../constants/styles'
import Colors from '../constants/colors'

const CustomDrawerContentComponent = props => (
    <ScrollView>
        <View style={[Styles.container, {backgroundColor: Colors.primary.default}]}>
            <Text style={[Styles.txt, Styles.txt_white]}>Menu</Text>
            <Text style={[Styles.txt, Styles.txt_white, Styles.txt_sub]}>nombre</Text>
            <Text style={[Styles.txt, Styles.txt_white, Styles.txt_sub]}>correo</Text>
        </View>
        <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CustomDrawerContentComponent