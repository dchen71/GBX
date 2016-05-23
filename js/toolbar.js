//Toolbar module for header

'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  AppRegistry
} = ReactNative;

var ToolbarAndroid = require('ToolbarAndroid');

var ToolbarAndroidExample = React.createClass({
  statics: {
    title: '<ToolbarAndroid>',
    description: 'Examples of using the Android toolbar.'
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
          subtitle={this.state.actionText}
          title="Toolbar" />
        <Text>{this.state.actionText}</Text>
      </View>
    );
  },
  _onActionSelected: function(position) {
    this.setState({
      actionText: 'Selected ' + toolbarActions[position].title,
    });
  },
});

var toolbarActions = [
  {title: 'News'},
  {title: 'Quests'},
  {title: 'Characters'},
  {title: 'Tools'},
];

var styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#fafafa',
    height: 56,
  },
});

module.exports = ToolbarAndroidExample;