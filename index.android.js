/**
 GBX
 A generalized skeleton app to display information from Granblue Fantasy or any other mobile game
 */

//Strict javascript delcaration
"use strict";

//Load necessary react components
import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

//Main page
//Probably just show new events at top

//Quest Page
//Lists quests

//Character page
//Something to list characters

//Tooltip
//Some kind of push alert at x time to let know angel time

//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

class GBX extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}


//Build app
AppRegistry.registerComponent('GBX', () => GBX);
