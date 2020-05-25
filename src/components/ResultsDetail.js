import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';

const ResultsDetail = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: props.result.image_url }} />
      <Text style={styles.name}>{props.result.name}</Text>

      <Text>
        {props.result.rating} Stars, {props.result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
  },
  name: {
    fontWeight: 'bold',
  },
});

export default ResultsDetail;
