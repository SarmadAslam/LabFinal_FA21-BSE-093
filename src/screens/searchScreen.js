import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import yelp from "../api/yelp";
import Feather from "@expo/vector-icons/Feather";
import ResultList from "../components/ResultList";
import SearchBar from "../components/SearchBar";
import RestaurantDetailsScreen from "./RestaurantDetailsScreen";
import axios from "axios";

const WEATHER_API_KEY = "your_openweathermap_api_key";
const LATITUDE = "your_latitude"; // your latitude
const LONGITUDE = "your_longitude"; // your longitude

export default function SearchScreen() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [isRaining, setIsRaining] = useState(false);

  useEffect(() => {
    // Fetch current weather and check if it's raining
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${LATITUDE}&lon=${LONGITUDE}&appid=${WEATHER_API_KEY}`
        );
        const weatherCondition = response.data.weather[0].main;
        setIsRaining(weatherCondition === "Rain");
      } catch (error) {
        console.error("Weather API error", error);
      }
    };
    fetchWeather();
  }, []);

  const searchApi = async () => {
    const response = await yelp.get("/search", {
      params: {
        limit: 45,
        term: term,
        location: "new york",
      },
    });
    let restaurantData = response.data.businesses;

    // If raining, sort by price (expensive first), otherwise by distance
    if (isRaining) {
      restaurantData = restaurantData.sort(
        (a, b) => (b.price?.length || 0) - (a.price?.length || 0)
      );
    } else {
      restaurantData = restaurantData.sort((a, b) => a.distance - b.distance);
    }

    setResults(restaurantData);
  };

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View>
      <SearchBar searchApi={searchApi} setTerm={setTerm} term={term} />
      <Text>You have found {results.length} results</Text>

      <ResultList results={filterResultsByPrice("$")} title="price" />
      <ResultList results={filterResultsByPrice("$$")} title="location" />
      <ResultList results={filterResultsByPrice("$$$")} title="ratings" />
      <ResultList
        results={filterResultsByPrice("$$$$")}
        title="Burger Bachay"
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
