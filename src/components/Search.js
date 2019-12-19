import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export default function Search() {
  let [value, onChangeText] = React.useState('Search');
  return (
    <View>
      <TextInput
        style={styles.search}
        placeholder="Search"
        onChangeText={text => onChangeText(text)}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    color: 'white',
    padding: 15,
  },
});
