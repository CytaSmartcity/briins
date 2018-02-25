import Expo,  { Font} from 'expo';
import React, { Component } from 'react';
import {Image,  Platform,  View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import { StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';import { ScrollView } from 'react-native-gesture-handler';



const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class Haap extends Component {
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
                       <Text>Cyta</Text>
                       <Text note>Parking</Text>
                     </Body>
                   </Left>
                 </CardItem>
                 <CardItem cardBody>
                   <Image source={{uri: 'Image URL'}} />
                 </CardItem>
                 <CardItem>
                   <Left>
                     <Button transparent>
                    
                       <Text>12</Text>
                     </Button>
                   </Left>
                   <Body>
                     <Button transparent>
                       <Icon active name="chatbubbles" />
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
                       <Text>Strovolos</Text>
                       <Text note>Parking</Text>
                     </Body>
                   </Left>
                 </CardItem>
                 <CardItem cardBody>
                   <Image source={{uri: 'Image URL'}} />
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
 const styles = StyleSheet.create({
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

 


 