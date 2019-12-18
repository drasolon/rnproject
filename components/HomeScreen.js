import React, {Component} from 'react';
import {
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
  View,
  FlatList,
} from 'react-native';
import Post from './Post';
import TopBar from './TopBar';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true};
  }

  componentDidMount() {
    return fetch('http://reddit.it.ws312.net:3000/posts?fromApp=1')
      .then(response => response.json())
      .then(results => {
        console.log(results);
        this.setState({
          isLoading: false,
          data: results,
        });
      });
  }

  _displayPost = id => {
    this.props.navigation.navigate('PostDetails', {id: id});
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <TopBar></TopBar>
          <FlatList
            data={this.state.data.result}
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
