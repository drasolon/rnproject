import { createAppContainer } from 'react-navigation';
import React, {Component} from 'react';
import Rooter from './routes/index'

const AppContainer = createAppContainer(Rooter);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

