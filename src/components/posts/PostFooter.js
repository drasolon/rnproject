import React, {Component} from 'react';

import {View, Text, StyleSheet} from 'react-native';

export default class PostFooter extends Component {
  timeSince = date => {
    let seconds = Math.floor((new Date() - date) / 1000);

    let interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
      return interval + ' years';
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + ' months';
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + ' days';
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + ' hours';
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + ' minutes';
    }
    return Math.floor(seconds) + ' seconds';
  };

  render() {
    return (
      <View style={styles.flex}>
        <Text style={styles.postFooter}>
          {this.props.nbOfComments} {((this.props.nbOfComments === 0) || (this.props.nbOfComments === 1) ? "comment" : "comments" )}
        </Text>
        <Text style={styles.postFooter}>
          {this.timeSince(new Date(this.props.date))} ago
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  postFooter: {
    color: 'white',
    fontSize: 11
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
