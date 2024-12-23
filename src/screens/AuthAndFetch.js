import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { signUp, login } from "./auth";
import { fetchData } from "./fetchData";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDETYOA9ZfJqE6SK50Iw6geG0R0UVtY0po",
  authDomain: "fatest-c3e07.firebaseapp.com",
  projectId: "fatest-c3e07",
  storageBucket: "fatest-c3e07.firebasestorage.app",
  messagingSenderId: "296262385690",
  appId: "1:296262385690:web:30cbf1cffc5161e7e211a3",
  measurementId: "G-59G70NGD5J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const AuthAndFetch = () => {
  const [todos, setTodos] = useState([]);

  const apiKey = "b918a0b8215d8ba8be6fe35a87d0aafd";

  const handleSignUp = () => signUp("test@example.com", "password123");
  const handleLogin = () => login("test@example.com", "password123");

  const handleFetchData = async () => {
    const data = await fetchData("https://jsonplaceholder.typicode.com/todos");
    setTodos(data);
  };

  const handleReplaceTitles = async () => {
    const cities = [
      "London",
      "Paris",
      "New York",
      "Sydney",
      "Tokyo",
      "Delhi",
      "Berlin",
      "Dubai",
      "Istanbul",
      "Moscow",
    ];
    const cityNames = [];

    for (let city of cities) {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );
        const data = await response.json();

        if (data.main && data.main.temp >= 10 && data.main.temp <= 35) {
          cityNames.push(city);
        }

        if (cityNames.length >= todos.length) break;
      } catch (error) {
        console.error(`Error fetching weather for ${city}:`, error);
      }
    }

    const updatedTodos = todos.map((todo, index) => ({
      ...todo,
      title: cityNames[index % cityNames.length] || "No City Found",
    }));

    setTodos(updatedTodos);
  };

  const handleStoreData = async () => {
    if (todos.length === 0) {
      Alert.alert("Error", "No data to store! Fetch and replace titles first.");
      return;
    }

    try {
      const collectionRef = collection(db, "todos");

      for (let todo of todos) {
        await addDoc(collectionRef, todo);
      }

      Alert.alert("Success", "Todos stored in Firestore!");
    } catch (error) {
      console.error("Error storing data in Firestore:", error);
      Alert.alert("Error", "Failed to store data in Firestore.");
    }
  };

  // Function to retrieve data from Firestore
  const handleRetrieveData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "todos")); // Your Firestore collection name
      const retrievedData = [];
      querySnapshot.forEach((doc) => {
        retrievedData.push(doc.data()); // Push each document data into the array
      });
      setTodos(retrievedData); // Update state with retrieved data
      console.log("Data Retrieved from DataBase");
      Alert.alert("Success", "Data Fetched from Firestore!");
    } catch (error) {
      Alert.alert("Error", "Failed to retrieve data from Firestore.");
      console.error("Error retrieving data from Firestore:", error);
    }
  };

  return (
    <LinearGradient colors={["#6dd5ed", "#2193b0"]} style={styles.container}>
      <Text style={styles.header}>Auth and Fetch App</Text>
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleFetchData}>
        <Text style={styles.buttonText}>Fetch Data</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleReplaceTitles}>
        <Text style={styles.buttonText}>Replace Titles with City Names</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleStoreData}>
        <Text style={styles.buttonText}>Store Data in Firestore</Text>
      </TouchableOpacity>
      {/* Button to retrieve data */}
      <TouchableOpacity style={styles.button} onPress={handleRetrieveData}>
        <Text style={styles.buttonText}>Retrieve Data from Firestore</Text>
      </TouchableOpacity>
      <FlatList
        data={todos}
        keyExtractor={(item, index) => index.toString()} // Assuming item doesn't have a unique ID
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.listText}>{item.title}</Text>{" "}
            {/* Display data */}
          </View>
        )}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 25,
    marginVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  listItem: {
    backgroundColor: "#ffffff",
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  listText: {
    fontSize: 16,
    color: "#333",
  },
});

export default AuthAndFetch;
