import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from '../screens/HomeScreen';
import UserAccount from '../components/account/UserAccount';
import AboutScreen from '../screens/AboutScreen';
import PostDetails from '../components/posts/PostDetails';
import LoginScreen from '../screens/LoginScreen';

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
        gesturesEnabled: true,
      }),
    },

    PostDetails: {
      screen: PostDetails,
      navigationOptions: {
        title: 'Post Details',
      },
    },

    UserAccount: {
      screen: UserAccount,
      navigationOptions: {
        title: 'User',
      },
    },

    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: {
        title: 'Login',
      },
    },

    About: {
      screen: AboutScreen,
      navigationOptions: {
        title: 'About the app',
      },
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'screen',
    gesturesEnabled: true,
  },
);

// Drawer Navigator
export const Drawer = createDrawerNavigator(
  {
    MainStack: {
      screen: MainStack,
      navigationOptions: {
        drawerLabel: 'Home',
      },
    },
    About: {
      screen: AboutScreen,
      navigationOptions: {
        title: 'About the app',
      },
    },
  },
  {
    gesturesEnabled: true,
  },
);

// Main App Navigation
export const AppStack = createStackNavigator(
  {
    Drawer: {
      screen: Drawer,
      navigationOptions: {
        gesturesEnabled: true,
      },
    },
  },
  {headerMode: 'none'},
);
