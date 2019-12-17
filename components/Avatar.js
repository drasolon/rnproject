import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class Avatar extends Component {
  render() {
    return(
      <View>
        <Text style={styles.avatar}>
          Avatar
        </Text>
      </View>
      )
  }
}

const styles = StyleSheet.create({
  avatar: {
    color:"white",
    padding:15
  }
})