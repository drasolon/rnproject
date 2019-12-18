import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import 'react-native-gesture-handler';
import {AppStack} from './routes/index';
const AppContainer = createAppContainer(AppStack);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
