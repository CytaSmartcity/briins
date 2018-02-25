
import React from 'react';
import { Platform, Text, View, StyleSheet, Button, } from 'react-native';
import { StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation';
import { PricingCard } from 'react-native-elements'



export default class paymentView extends React.Component {
    constructor () {
super();
        this.state = {
            Text : "Not Compelted"
        }
    }
render () {
    return (
        <View style = {{flex : 1, justifyContent: 'center'}}>
          <Text style = {{justifyContent: 'center'}}> Please Pay Now</Text>
             <Button title = "PAY" onPress = {() => {alert('Success'), this.props.navigation.navigate('location')}} />
        
    </View>
    )
 }
}

