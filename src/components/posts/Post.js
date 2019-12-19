import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import PostContent from './PostContent';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';
import theme from '../../styles/theme.style';

export default class Post extends Component {
  render() {
    const {post, displayPost} = this.props;
    return (
      <TouchableOpacity
        style={styles.post}
        onPress={() => displayPost(post)}>
        <PostHeader title={post.title} />
        <PostContent content={post.content} />
        <PostFooter
          nbOfComments={post.nbComments}
          date={post.dateTime}></PostFooter>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  post: {
    backgroundColor: theme.MAIN_COLOR,
    padding: 20,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: theme.LIGHT_COLOR,
  },
});
