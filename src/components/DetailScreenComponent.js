import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function DetailsScreen({ route }) {
  const { distance, rating, price } = route.params; // Access passed parameters

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Distance: {distance} km</Text>
      <Text style={styles.text}>Price: ${price}</Text>
      <Text style={styles.text}>Rating: ⭐ {rating}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
});
