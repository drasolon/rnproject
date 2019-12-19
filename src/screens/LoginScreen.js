import React, {Component} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';

import theme from '../styles/theme.style';

export default class LoginScreen extends Component {
  onChangeText = text => {
    this.setState({login: text});
  };
  render() {
    return (
      <View style={styles.userAccount}>
        <Text>Login Screen</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={text => this.onChangeText(text)}
          value="dd"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  userAccount: {},
});
