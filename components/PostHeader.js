import React, {Component} from 'react';

import {View, Text} from 'react-native';

export default class PostHeader extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.title}</Text>
      </View>
    );
  }
}
