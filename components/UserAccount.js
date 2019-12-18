import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

import theme from '../styles/theme.style';

export default class UserAccount extends Component {
  render() {
    return (
      <View style={styles.userAccount}>
        <Text>User Account</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  userAccount: {},
});
