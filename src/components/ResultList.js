import React from "react";
import {
  FlatList,
  Text,
  View,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import for navigation

export default function ResultList(props) {
  const navigation = useNavigation(); // Access navigation object

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={props.results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <View style={styles.itemContainer}>
              <Pressable
                onPress={() =>
                  navigation.navigate("DetailsScreen", {
                    distance: item.distance,
                    rating: item.rating,
                    price: item.price,
                  })
                }
              >
                <Image source={{ uri: item.image_url }} style={styles.image} />
              </Pressable>
              <Text style={styles.name}>{item.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 10,
    color: "#333",
  },
  itemContainer: {
    backgroundColor: "#fff",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
    marginRight: 20,
    padding: 15,
    alignItems: "center",
    width: 180,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 15,
    marginBottom: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#555",
    textAlign: "center",
    marginBottom: 5,
  },
});
