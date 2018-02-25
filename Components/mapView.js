import React from 'react';
import { StyleSheet, ScrollView, View,   TouchableOpacity } from 'react-native';
import { showLocation } from 'react-native-map-link';
import { StackNavigator, DrawerNavigator,  } from 'react-navigation';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Button} from 'native-base';


export default class mapView extends React.Component {
handleDirectionsPress() {
  showLocation({ 
    latitude:35.1222195, 
    longitude: 33.3438869, 
    title:'The Cyprus', 
   app: 'apple-maps' ,
})}
  render() {
    return (
      <View style={{flex:1, justifyContent: 'center',  backgroundColor: 'rgba(47,44,60,1)'}}>
      <ScrollView >
         <Container>
        <Content style = {{paddingTop: 30}}>
          <Card style = {{height: 100, justifyContent: 'center'}}>
            <CardItem>
              <Icon active name="ios-locate-outline" style = {{color: 'green'}}  />
              <Text style = {{color: 'green'}}>Available</Text>
              <Right>
              <Icon active name="ios-locate-outline" style = {{color: 'red'}}  />
              </Right>
             </CardItem>
           </Card>
              <Card  style = {{height: 100, justifyContent: 'center'}}>
            <CardItem>
              <Icon active name="ios-locate-outline" style = {{color: 'green'}}  />
              <Text style = {{color: 'green'}}>Available</Text>
              <Right>
              <Icon active name="ios-locate-outline" style = {{color: 'red'}}  />
              </Right>
             </CardItem>
           </Card>
             <Card  style = {{height: 100, justifyContent: 'center'}}>
            <CardItem>
              <Icon active name="ios-locate-outline" style = {{color: 'green'}}  />
              <Text style = {{color: 'green'}}>Available</Text>
              <Right>
              <Icon active name="ios-locate-outline" style = {{color: 'red'}}  />
              </Right>
             </CardItem>
           </Card>
             <Card  style = {{height: 100, justifyContent: 'center'}}>
            <CardItem>
              <Icon active name="ios-locate-outline" style = {{color: 'green'}}  />
              <Text style = {{color: 'green'}}>Available</Text>
              <Right>
              <Icon active name="ios-locate-outline" style = {{color: 'red'}}  />
              </Right>
             </CardItem>
           </Card>
             <Card  style = {{height: 100, justifyContent: 'center'}}>
            <CardItem>
              <Icon active name="ios-locate-outline" style = {{color: 'green'}}  />
              <Text style = {{color: 'green'}}>Available</Text>
              <Right>
              <Icon active name="ios-locate-outline" style = {{color: 'red'}}  />
              </Right>
             </CardItem>
           </Card>
         <Button rounded block onPress = { () =>  this.handleDirectionsPress() }>
            <Text>Navigate to Directions</Text>
         </Button>
        </Content>
        </Container>
    </ScrollView>
    </View>
    );
  }
};
