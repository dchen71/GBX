/**
 GBX
 A generalized skeleton app to display information from Granblue Fantasy or any other mobile game
 */

//Strict javascript delcaration
"use strict";

//Load necessary react components
var React = require('react');
var ReactNative = require('react-native');
const AppRegistry = require('AppRegistry');
var {
  StyleSheet,
  Text,
  View,
} = ReactNative;
var Toolbar = require('./js/toolbar');


//Main page
//Probably just show new events at top
//Main banner is current event
//Schedule for angel day
//News tab
//Current rate up


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

class GBX extends React.Component {
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
        <Toolbar />
      </View>
    );
  }
}


//Build app
AppRegistry.registerComponent('GBX', () => GBX);
