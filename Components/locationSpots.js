import Expo from 'expo';
import React, { Component } from 'react';
import { Platform,  View, StyleSheet, TouchableOpacity} from 'react-native';
import { StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation';
import { Container, Header, Left, Body, Right, Button, Icon, Segment, Content, Text } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

import Parking from './Parking';
import Haap from './Haap';
import mapDirections from './mapDirections';
import paymentView from './paymentView';
import location from './locationRed';

export default class locationSpots extends Component {
  constructor (props) {
      super (props);
      this.state = {
        selected: false
      }
  }
  render() {
    return (
          <AppTabNavigator />
    );
  }
 };

const AppTabNavigator = TabNavigator ({
  PARKING : {screen : Parking},
  HAAP : {screen : Haap},
  mapDirections : {screen: mapDirections},
  paymentView :  { screen : paymentView},
  location : {screen: location}
}, 
{
  // Tab Navigation Settings 
  animationEnabled: true,
  swipeEnabled: true,
  tabBarPosition: "top",
  tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: '#d1cece',
      showLabel: true,
      showIcon: false
  }})