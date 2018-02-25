import Expo from 'expo';
import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, Button, TouchableOpacity, Alert } from 'react-native';
import { Constants, Location, Permissions } from 'expo';
import {MapView} from 'expo';
import { showLocation } from 'react-native-map-link';
import { StackNavigator } from 'react-navigation';



const GEOLOCATION_OPTIONS = { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 };

export default class mapDirections extends Component {
    state = {
        location: { coords: {latitude: 0, longitude: 0}},
        faneromeni: {latitude: 35.173941, longitude: 33.361877},
        ledras: {latitude: 35.174084, longitude: 33.361046},
        costanza:{latitude: 35.169384, longitude: 33.365959},
        pm1 : {latitude:35.165193, longitude:33.362621},
        pm2 : {latitude:35.165184, longitude:33.362638},
        cyta : {latitude:35.146868,  longitude: 33.370307},
        paymentPm1: false,
        paymentPm2:false,
      };
      DirectionsFaneromeni() {
        showLocation({
          latitude: 35.173941,
          longitude: 33.361877,
          title: 'Faneromeni',
         app: 'apple-maps'
        })}
      componentWillMount() {
        Location.watchPositionAsync(GEOLOCATION_OPTIONS, this.locationChanged);
    
      }
      DirectionsLedras() {
        showLocation({
          latitude: 35.174084,
          longitude: 33.361046,
          title: 'Ledras',
         app: 'apple-maps'
        })}
    
        DirectionsCostanza() {
          showLocation({
            latitude: 35.169384,
            longitude: 33.365959,
            title: 'Costanza Bastion Parking',
           app: 'apple-maps'
          })}
    
          DirectionsPm1() {
            showLocation({
              latitude:35.165193,
              longitude:33.362621,
              title: 'stasikratous',
             app: 'apple-maps'
            })}
          DirectionsPm2() {
              showLocation({
                latitude:35.165184,
                longitude:33.362638,
                title: 'stasikratous',
               app: 'apple-maps'
              })}

              DirectionsCyta() {
                showLocation({
                  latitude:35.146868,
                  longitude: 33.370307,
                  title: 'stasikratous',
                 app: 'apple-maps'
                })}

      componentWillMount() {
        Location.watchPositionAsync(GEOLOCATION_OPTIONS, this.locationChanged);
    
      }
      locationChanged = (location) => {
        region = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.1,
          longitudeDelta: 0.05,
        },
    
    
        this.setState({location, region})
      }
  
      render() {
    const { navigate } = this.props.navigation;

    return (
        
        <MapView
          style={{ flex: 1 }}
          showsUserLocation={true}
          region={this.state.region}
          >
            <MapView.Marker onPress={this.DirectionsFaneromeni}
            coordinate= {this.state.faneromeni} title={"Faneromeni"}
            description={"Available:30/159"}
            pinColor={'#008000'}
            />
            <MapView.Marker onPress={this.DirectionsLedras}
              coordinate= {this.state.ledras}  title={"Ledras Parking"}
              description={"Available:55/69"}
              pinColor={'#008000'}
            />
            <MapView.Marker onPress={this._onget}
              coordinate= {this.state.costanza}  title={"Costanza Bastion Parking"}
              description={"Available:35/78"}
              pinColor={'#008000'}
            />
            <MapView.Marker onPress= {() => {this.DirectionsPm1(), this.props.navigation.navigate ('paymentView')}}
              coordinate= {this.state.pm1}  title={"stasikratous"}
              description={"Available:1/1"}
              pinColor={'#008000'}
              />

           <MapView.Marker onPress={this.DirectionsPm2}
              coordinate= {this.state.pm2}  title={"stasikratous"}
              description={"Available:1/1"}
              pinColor={'#008000'}
            />
            <MapView.Marker onPress= {() => {this.DirectionsCyta(), this.props.navigation.navigate ('paymentView')}}
              coordinate= {this.state.cyta}  title={"stasikratous"}
              description={"Available:1/1"}
              pinColor={'#008000'}
            />
        </MapView>


        // green (#008000),red (#ff0000)
    );
  }
}