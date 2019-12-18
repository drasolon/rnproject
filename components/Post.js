import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import PostContent from './PostContent';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';
import theme from '../styles/theme.style';

export default class Post extends Component {
  render() {
    const {post, displayPost} = this.props;
    return (
      <TouchableOpacity
        style={styles.post}
        onPress={() => displayPost(post.id)}>
        <PostHeader title={post.title} />
        <PostContent content={post.content} />
        <PostFooter></PostFooter>
      </TouchableOpacity>
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
