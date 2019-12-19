import React, { Component } from 'react';

import {
  View,
  Text
} from 'react-native';

export default class PostContent extends Component {
  render() {
    return(
      <View>
        <Text>
          {this.props.content}
        </Text>
      </View>
      )
  }
}