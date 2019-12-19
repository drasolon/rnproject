import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

import theme from '../../styles/theme.style';

export default class PostDetails extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.postDetails}>
        <Text>
          Détail du Post {JSON.stringify(navigation.getParam('post', 'NO-ID'))}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  postDetails: {},
});
