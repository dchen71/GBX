//Toolbar module for header

'use strict';

//Load required modules and packages
var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  AppRegistry
} = ReactNative;

var ToolbarAndroid = require('ToolbarAndroid');


var styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#fafafa',
    height: 56,
  },
});

//Toolbar
var ToolbarAndroidExample = React.createClass({
  statics: {
    title: 'Android Toolbar',
    description: 'Toolbar to load pages'
  },
  getInitialState: function() {
    return {
      actionText: 'Example app with toolbar component',
      toolbarSwitch: false,
      colorProps: {
        titleColor: '#3b5998',
        subtitleColor: '#6a7180',
      },
    };
  },
  render: function() {
    return (
      <View title="<ToolbarAndroid>">
        <ToolbarAndroid
          actions={toolbarActions}
          onActionSelected={this._onActionSelected}
          onIconClicked={() => this.setState({actionText: 'Icon clicked'})}
          style={styles.toolbar}
          title="GBX" />
      </View>
    );
  },
  _onActionSelected: function(position) {
    this.setState({
      actionText: 'Selected ' + toolbarActions[position].title,
    });
  },
});

//Toolbar options
var toolbarActions = [
  {title: 'News'},
  {title: 'Quests'},
  {title: 'Characters'},
  {title: 'Tools'},
];

module.exports = ToolbarAndroidExample;