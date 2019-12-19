import React, {Component} from 'react';
import {
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
  View,
  FlatList,
} from 'react-native';
import Post from '../components/posts/Post';
import Users from '../lib/Users';
import LoginScreen from './LoginScreen';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true, isLogged: false};
  }

  componentDidMount() {
    let isLogged = Users.get(isLogged);
    this.setState({isLogged: isLogged});

    return fetch('http://reddit.it.ws312.net:3000/posts?fromApp=1')
      .then(response => response.json())
      .then(results => {
        this.setState({
          isLoading: false,
          data: results,
        });
      });
  }

  _displayPost = post => {
    this.props.navigation.navigate('PostDetails', {post: post});
  };

  render() {
    if (!this.state.isLogged) {
      return <LoginScreen />;
    }
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
          <FlatList
            data={this.state.data.result}
            renderItem={({item}) => (
              <Post post={item} displayPost={this._displayPost} />
            )}
            keyExtractor={item => item._id}
          />
        </SafeAreaView>
      </>
    );
  }
}
