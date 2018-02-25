import Expo from 'expo';
import React, { Component } from 'react';
import { Platform,  View, StyleSheet,  Dimensions } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Body, Container, Header, Content, Form, Item, Input, Button, Text, Left, Right, Title } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';


const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class loginView extends Component {
  render() {
    return (
          <View style = {styles.container}>
          <Container>
        <Container>
        <Content>
          <Grid>
          <Col style={{ backgroundColor: '#635DB7', height: 250, justifyContent: 'center', paddingLeft: 70, borderRadius: 50 }}><Text>Ha</Text></Col>
          <Col style={{ backgroundColor: '#00CE9F', height: 300, justifyContent: 'center', paddingLeft: 60, borderRadius: 50 }}><Text>ap</Text></Col>
            </Grid>
          <Form style = {{paddingTop: 50}}>
            <Item>
              <Input placeholder="Username"/>
            </Item>
            <Item >
              <Input placeholder="Password" />
            </Item>
          </Form>
          <View style = {{paddingTop: 50}}>
          <Button rounded block onPress={() => this.props.navigation.navigate('Dashboard')}>
            <Text>Sign In</Text>
     </Button>
            </View>
        </Content>
      </Container>
      
      </Container>
     
   </View>
    );
  }
 };
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(47,44,60,1)'
  },

});

 


