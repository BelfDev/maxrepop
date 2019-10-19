import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';

export default class LaunchScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text
          style={{
            marginTop: 24,
            textAlign: 'center', // <-- the magic
            fontWeight: 'bold',
            fontSize: 32,
          }}>
          LaunchScreen
        </Text>
      </SafeAreaView>
    );
  }
}
