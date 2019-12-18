import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

import theme from '../styles/theme.style';

export default class PostDetails extends Component {
  render() {
    return (
      <View style={styles.postDetails}>
        <Text>Détail du Post {this.props.navigation.state.params.id}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  postDetails: {},
});
