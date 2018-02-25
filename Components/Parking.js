import Expo from 'expo';
import React, { Component } from 'react';
import { Platform,  View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation';
import mapDirections from './mapDirections';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';import { ScrollView } from 'react-native-gesture-handler';


export default class Parking extends Component {

  render() {
    return (
      <Container>
 <Header>
   <Left>
     <Button transparent>
     </Button>
   </Left>
   <Body>
   </Body>
   <Right>
     <Button transparent>
     <TouchableOpacity onPress = { () => this.props.navigation.navigate ('mapDirections') }>
               <Icon name="md-map" />
          </TouchableOpacity>
     </Button>
   </Right>
 </Header>
 <Content padder>
      <Container>
             <Content>
               <Card>
                 <CardItem>
                   <Left>
                     <Thumbnail source={{uri: 'Image URL'}} />
                     <Body>
                       <Text>Stasikratous</Text>
                       <Text note>Parkometer</Text>
                     </Body>
                   </Left>
                 </CardItem>
                 <CardItem cardBody>
                   <Image source={{uri: '/Users/kyriakos/Desktop/haccyta/assets/images/spot.jpg'}} />
                 </CardItem>
                 <CardItem>
                   <Left>
                     <Button transparent>
                       <Icon active name="thumbs-up" />
                       <Text>12</Text>
                     </Button>
                   </Left>
                   <Body>
                     <Button transparent>
                      
                       <Text>Available</Text>
                     </Button>
                   </Body>
                   <Right>
                     <Text>1h ago</Text>
                   </Right>
                 </CardItem>
               </Card>
               <Card>
                 <CardItem>
                   <Left>
                     <Thumbnail source={{uri: 'Image URL'}} />
                     <Body>
                       <Text>Stasikratous</Text>
                       <Text note>Parkometer</Text>
                     </Body>
                   </Left>
                 </CardItem>
                 <CardItem cardBody>
                   <Image source={{uri: 'Image URL'}}/>
                 </CardItem>
                 <CardItem>
                   <Left>
                     <Button transparent>
                       <Icon active name="thumbs-up" />
                       <Text>12</Text>
                     </Button>
                   </Left>
                   <Body>
                     <Button transparent>
                      
                       <Text>Available</Text>
                     </Button>
                   </Body>
                   <Right>
                     <Text>1h ago</Text>
                   </Right>
                 </CardItem>
               </Card>
             </Content>
           </Container>
      </Content>
</Container>
    );
  }
 };
