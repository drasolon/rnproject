import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import Burger from './Burger';
import Search from './Search';
import Avatar from './Avatar';
import theme from '../styles/theme.style';

export default class TopBar extends Component {
  render() {
    return(
      <View style={styles.topBar}>
        <Burger style={styles.item}></Burger>
        <Search style={styles.item}></Search>
        <Avatar style={styles.item}></Avatar>
      </View>
      )
  }
}

const styles = StyleSheet.create({
  topBar: {
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    padding: 5,
    backgroundColor: theme.DARK_COLOR
  },
  item:{}
})