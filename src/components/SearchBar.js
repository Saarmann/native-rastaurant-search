import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = (props) => {
  return (
    <View style={styles.container}>
      <Feather name='search' style={styles.icon} color='black' />
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder='Search...'
        value={props.term}
        onChangeText={(newTerm) => props.onTermChange(newTerm)}
        onEndEditing={() => props.onTermSubmit()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginTop: 15,
    marginHorizontal: 10,
    flexDirection: 'row',
    marginBottom: 10,
  },
  icon: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
});

export default SearchBar;
