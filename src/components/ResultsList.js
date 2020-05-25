import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import ResultsDetail from './ResultsDetail';
import { withNavigation } from '@react-navigation/compat';

const ResultsList = ({ navigation, title, results }) => {
  console.log(results.name);
  return (
    <View>
      <Text style={sytles.title}>{title}</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ResultsShowScreen', {
                  id: results.id,
                })
              }
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const sytles = StyleSheet.create({
  title: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default withNavigation(ResultsList);
