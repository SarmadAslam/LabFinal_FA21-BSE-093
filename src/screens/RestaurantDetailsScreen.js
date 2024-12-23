// RestaurantDetailsScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const RestaurantDetailsScreen = ({ route }) => {
  // Get the restaurant data from the route params
  const { restaurant } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: restaurant.image_url }} style={styles.image} />
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text style={styles.details}>Distance: {restaurant.distance} miles</Text>
      <Text style={styles.details}>Rating: {restaurant.rating} stars</Text>
      <Text style={styles.details}>Price: {restaurant.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  details: {
    fontSize: 16,
    marginVertical: 4,
  },
});

export default RestaurantDetailsScreen;
