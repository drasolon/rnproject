import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class Burger extends Component {
  render() {
    return(
      <View>
        <Text style={styles.burger}>
          Burger
        </Text>
      </View>
      )
  }
}

const styles = StyleSheet.create({
  burger: {
    color:"white",
    padding:15
  }
})