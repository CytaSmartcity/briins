import React, { Component } from 'react';
import Expo,  { Font} from 'expo';
import { Platform, Text, View, TouchableOpacity, StatusBar,  StyleSheet, Image, ScrollView, Dimensions, SearchBar  } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const IMAGE_SIZE = SCREEN_WIDTH - 80;

export default class locationView extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      fontLoaded: false,
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      'georgia': require('.././assets/fonts/Georgia.ttf'),
      'regular': require('.././assets/fonts/Montserrat-Regular.ttf'),
      'light': require('.././assets/fonts/Montserrat-Light.ttf'),
      'bold': require('.././assets/fonts/Montserrat-Bold.ttf'),
    });
  
    this.setState({ fontLoaded: true });
  }
  
  render() {
    return (
      <View style={{flex: 1}}>
        { this.state.fontLoaded ?
          <View style={{flex: 1, backgroundColor: 'rgba(47,44,60,1)'}}>
            <View style={styles.statusBar} />
            <View style={styles.navBar}>
              <Text style={styles.nameHeader}>
                Other Spots
              </Text>
            </View>
            <ScrollView style={{flex: 1}}>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
               
              </View>
              <View style={{flex: 1, flexDirection: 'row', marginTop: 20, marginHorizontal: 40, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{flex: 1, fontSize: 26, color: 'white', fontFamily: 'bold'}}>
                  Larnaca 
                </Text>
                <Text style={{flex: 0.5, fontSize: 15, color: 'gray', textAlign: 'left', marginTop: 5}}>
                  1.4 mi
                </Text>
                <Text style={{flex: 1, fontSize: 26, color: 'red', fontFamily: 'bold', textAlign: 'right'}}>
                  40%
                </Text>
              </View>
              <View style={{flex: 1, marginTop: 20, width: SCREEN_WIDTH - 80, marginLeft: 40}}>
                <Text style={{flex: 1, fontSize: 15, color: 'white', fontFamily: 'regular'}}>
                40% is the Availability for the Parking
                </Text>
              </View>
            
              <View style={{flex: 1, marginTop: 30}}>
                <Text style={{flex: 1, fontSize: 15, color: 'rgba(216, 121, 112, 1)', fontFamily: 'regular', marginLeft: 40}}>
                  INFO
                </Text>
                <View style={{flex: 1, flexDirection: 'row', marginTop: 20, marginHorizontal: 30}}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                      <Text style={styles.infoTypeLabel}>Location</Text>
                      <Text style={styles.infoTypeLabel}>Street</Text>
                      
                     
                    </View>
                    <View style={{flex: 1, marginLeft: 10}}>
                      <Text style={styles.infoAnswerLabel}>Nicosia</Text>
                      <Text style={styles.infoAnswerLabel}>Lydras</Text>
                   
                    
                    </View>
                  </View>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                      <Text style={styles.infoTypeLabel}>Visits</Text>
                      <Text style={styles.infoTypeLabel}>Available</Text>
                     
                      
                    </View>
                    <View style={{flex: 1, marginLeft: 10, marginRight: -20}}>
                      <Text style={styles.infoAnswerLabel}>200</Text>
                      <Text style={styles.infoAnswerLabel}>Yes</Text>
                
                      
                    </View>
                  </View>
                </View>
              </View>
              <Button
                ViewComponent={require('expo').LinearGradient}
                containerStyle={{ marginVertical: 20 }}
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 0 }}
                buttonStyle={{ height: 55, width: SCREEN_WIDTH -100, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}
                linearGradientProps = {{
                  colors: ['rgba(214,116,112,1)', 'rgba(233,174,87,1)'],
                  start: [1, 0],
                  end: [0.2, 0]
                }}
                text="Map View"
                textStyle={{ fontFamily: 'regular', fontSize: 20, color: 'white', textAlign: 'center' }}
                onPress={() => this.props.navigation.navigate('mapView')}
                activeOpacity={0.9}
                title = "See More"
              />
            </ScrollView>
          </View> :
          <Text>Loading...</Text>
        }
      </View>

      

      
    );
  }
  }
  
  const styles = StyleSheet.create({
  statusBar: {
    height: 10,
  },
  navBar: {
    height: 60,
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignContent: 'center'
  },
  nameHeader: {
    color: 'white',
    fontSize: 50,
    textAlign: 'center',
    fontFamily: 'regular'
  },
  infoTypeLabel: {
    fontSize: 15,
    textAlign: 'right',
    color: 'rgba(126,123,138,1)',
    fontFamily: 'regular',
    paddingBottom: 10,
  },
  infoAnswerLabel: {
    fontSize: 15,
    color: 'white',
    fontFamily: 'regular',
    paddingBottom: 10,
  }
  });

 