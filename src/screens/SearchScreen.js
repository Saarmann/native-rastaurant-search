import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SearchScreen = (props) => {
  return (
    <View>
      <Text>Search Screen</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => props.navigation.popToTop()}
      >
        <Text style={styles.buttonText}>Go Homeh</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
