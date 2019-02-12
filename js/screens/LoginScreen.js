import React, { Component } from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 34 }}>LoginScreen</Text>
        <Button title="Click me" onPress={() => this.props.navigation.navigate("home")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});