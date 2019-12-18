import React, {Component} from 'react';

import {View, Text, StyleSheet} from 'react-native';

export default class PostHeader extends Component {
  render() {
    return (
      <View>
        <Text style={styles.postHeader}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  postHeader: {
    color: 'white',
  },
});
