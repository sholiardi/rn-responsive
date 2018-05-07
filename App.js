import React, { Component } from 'react';
import { View } from 'react-native';
import AutoResponsive from 'autoresponsive-react-native';

export default class App extends Component<Props> {
  render() {
    return (
      <View style={{margin: 10}}>
        <AutoResponsive itemMargin={20}>
          <View style={{backgroundColor: 'red', width: 100, height: 100}}></View>
          <View style={{backgroundColor: 'yellow', width: 100, height: 100}}></View>
          <View style={{backgroundColor: 'green', width: 100, height: 100}}></View>
          <View style={{backgroundColor: 'blue', width: 100, height: 100}}></View>
          <View style={{backgroundColor: 'purple', width: 100, height: 100}}></View>
        </AutoResponsive>
      </View>
    );
  }
}
