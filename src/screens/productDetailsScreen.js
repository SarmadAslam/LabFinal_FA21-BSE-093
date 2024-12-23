import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Flex from './flex';

const productDetailsScreen = ({ route }) => {
  const { name, author, ratings, image } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>Author: {author}</Text>
      <Text style={styles.text}>Ratings: {ratings}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 15,
  },
  text: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default productDetailsScreen;
