import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import PostContent from './PostContent';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';
import theme from '../styles/theme.style';

export default class Post extends Component {
  render() {
    return(
      <View style={styles.post} >
        <PostHeader></PostHeader>
        <PostContent content={this.props.content} />
        <PostFooter></PostFooter>
      </View>
      )
  }
}

const styles = StyleSheet.create({
  post: {
   backgroundColor: theme.MAIN_COLOR,
   padding: 20,
   borderBottomWidth:1,
   borderBottomColor: theme.LIGHT_COLOR,
  }
})