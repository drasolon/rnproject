import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import theme from '../styles/theme.style';

export default class AboutScreen extends Component {
  render() {
    return (
      <View style={styles.post}>
        <Text>About screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  post: {
    backgroundColor: theme.MAIN_COLOR,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: theme.LIGHT_COLOR,
  },
});
