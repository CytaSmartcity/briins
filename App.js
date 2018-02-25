import Expo from 'expo';
import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import { Constants, Location, Permissions } from 'expo';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import mapView from './Components/mapView';
import homeView from './Components/homeView';
import loginView from './loginView';
import locationSpots from './Components/locationSpots';
import mapDirections from './Components/mapDirections';


export default class App extends Component {
  render() {
    return (
       <AppNavigator />
    );
  }
 };
 const AppNavigator = DrawerNavigator({
   loginView: {screen : loginView},
   Dashboard : { screen: homeView},
   mapView : { screen : mapView},
   LocationSpots : {screen : locationSpots},
   mapDirections : {screen : mapDirections}

 });
 