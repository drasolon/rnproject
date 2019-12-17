/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  FlatList
} from 'react-native';
import Post from './components/Post';
import TopBar from './components/TopBar';

const DATA = [
  {
    id: "1",
    content: "Post 1",
  },
  {
    id: "2",
    content: "Post 2",
  },
  {
    id: "3",
    content: "Post 3",
  }
];

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
          <TopBar></TopBar>
          <FlatList
            data={DATA}
            renderItem={({ item }) => <Post content={item.content}/>}
            keyExtractor={item => item.id}
          />
      </SafeAreaView>
    </>
  );
};

export default App;
