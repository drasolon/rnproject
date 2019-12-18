import React, {Component} from 'react';
import {SafeAreaView, StatusBar, FlatList} from 'react-native';
import Post from './Post';
import TopBar from './TopBar';

const DATA = [
  {
    id: '1',
    title: 'title 1',
    content: 'Post 1',
  },
  {
    id: '2',
    title: 'title 2',
    content: 'Post 2',
  },
  {
    id: '3',
    title: 'title 3',
    content: 'Post 3',
  },
];

export default class HomeScreen extends Component {
  _displayPost = id => {
    console.log('Display post with id ' + id);
    this.props.navigation.navigate('PostDetails', {id: id});
  };

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <TopBar></TopBar>
          <FlatList
            data={DATA}
            renderItem={({item}) => (
              <Post post={item} displayPost={this._displayPost} />
            )}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </>
    );
  }
}
