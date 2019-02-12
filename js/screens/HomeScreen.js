import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Font } from 'expo';

import { createIconSet } from 'react-native-vector-icons';
const glyphMap = { 'icon-flame': 59735, 'icon-user': 59739 };
const CustomIcon = createIconSet(glyphMap, 'webfont', 'webfont.ttf');

export default class HomeScreen extends Component {
  state = { fontLoaded: false };

  async componentWillMount() {
    await Font.loadAsync({
      'webfont': require('../../assets/fonts/webfont.ttf'),
      'vincHand': require('../../assets/fonts/vincHand.ttf'),
    });
    console.log('fontLoaded: true');
    this.setState({ fontLoaded: true });
  }

  render() {
    const { fontLoaded } = this.state;
    if (!fontLoaded)
      return null;

    return (
      <View style={styles.container}>
        <Text style={{ fontFamily: 'vincHand', fontSize: 45 }}>HomeScreen</Text>
        <Text style={{ fontFamily: 'webfont', fontSize: 45 }}>&#xe957;</Text>
        <CustomIcon name="icon-flame" size={32} color="red" />
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