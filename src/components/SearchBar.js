import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Feather from "@expo/vector-icons/Feather";

export default function SearchBar({ searchApi, term, setTerm }) {
  return (
    <View style={styles.viewStyle}>
      <Feather
        name="search"
        size={24}
        color="black"
        style={styles.searchStyle}
      />
      <TextInput
        placeholder="Enter name of dish or restaurant"
        value={term}
        onChangeText={(newValue) => setTerm(newValue)}
        onSubmitEditing={searchApi}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: "row",
    backgroundColor: "#CCCCCC",
    borderRadius: 12,
    margin: 8,
    padding: 8,
    alignSelf: "center",
  },
  searchStyle: {
    padding: 8,
  },
});
