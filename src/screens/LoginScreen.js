import React, {Component} from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';
import {withNavigation} from 'react-navigation';
import User from '../lib/User';

import theme from '../styles/theme.style';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {loginInput: ''};
  }
  onChangeLoginInput = text => {
    this.setState({loginInput: text});
  };
  onChangePasswordInput = text => {
    this.setState({passwordInput: text});
  };

  render() {
    return (
      <View style={styles.userAccount}>
        <Text>Login</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => this.onChangeLoginInput(text)}
          value={this.state.loginInput}
        />
        <Text>Password</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => this.onChangePasswordInput(text)}
          value={this.state.passwordInput}
          secureTextEntry={true}
        />
        <Button
          title="Login"
          onPress={() => {
            {
              User.setState({isLogged: true});
              this.props.navigation.navigate('Homescreen');
            }
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {height: 40, borderColor: 'gray', borderWidth: 1},
});

export default withNavigation(LoginScreen);
