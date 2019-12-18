import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from '../components/HomeScreen';
import UserAccount from '../components/UserAccount';
import AboutScreen from '../components/AboutScreen';
import PostDetails from '../components/PostDetails';

// Main Screens for Drawer Navigator
export const MainStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({navigation}) => ({
        title: 'Home',
        headerLeft: (
          <Icon
            onPress={() => navigation.toggleDrawer()}
            name="bars"
            size={25}
            color="black"
            style={{marginLeft: 10}}
          />
        ),
        headerRight: (
          <Icon
            onPress={() => navigation.navigate('UserAccount')}
            name="user"
            size={25}
            color="black"
            style={{marginRight: 10}}
          />
        ),
      }),
    },

    PostDetails: {
      screen: PostDetails,
      navigationOptions: {
        title: 'Post',
      },
    },

    About: {
      screen: AboutScreen,
      navigationOptions: {
        title: 'About the app',
      },
    },

    UserAccount: {
      screen: UserAccount,
      navigationOptions: {
        title: 'User',
      },
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'screen',
  },
);

// Drawer Navigator
export const Drawer = createDrawerNavigator({
  MainStack: {
    screen: MainStack,
  },
  About: {
    screen: AboutScreen,
    navigationOptions: {
      title: 'About the app',
    },
  },
});

// Main App Navigation
export const AppStack = createStackNavigator(
  {
    Drawer: {
      screen: Drawer,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
  },
  {headerMode: 'none'},
);
