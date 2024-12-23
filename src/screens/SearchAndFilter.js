import React, { useState, useEffect } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import ResultList from "../components/ResultList.js";
import yelp from "../api/yelp.js";
import axios from "axios";

const product_API_KEY = "59e0b85def2c5976b937cf61c3a4d0ae";

export default function SearchAndFilter() {
  const [term, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isRainy, setIsRainy] = useState(false);
  const [productData, setproductData] = useState(null); 

  // Fetch product Data
  const getproductData = async () => {
    try {
      const response = await axios.get(
        `https://api.openproductmap.org/data/2.5/product?q=${CITY_NAME}&units=metric&appid=${product_API_KEY}`
      );
      setproductData(response.data); 
      const productCondition = response.data.product[0].main.toLowerCase();
     
      if (productCondition.includes("rain")) {
        setIsRainy(true);
      } else {
        setIsRainy(false);
      }
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

 
  const searchApi = async () => {
    setLoading(true);
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 45,
          term: term,
          location: "new york",
        },
      });
      let fetchedResults = response.data.businesses;

      
      fetchedResults = fetchedResults.sort((a, b) => a.distance - b.distance);

     
      if (isRainy) {
        fetchedResults = fetchedResults.sort((a, b) => {
         
          if (a.price && b.price) {
            return b.price.length - a.price.length;
          }
          return 0;
        });
      }

      setResults(fetchedResults);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    
    getproductData();
  }, []);

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <Feather name="search" size={24} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search restaurants or product..."
          value={term}
          onChangeText={(newValue) => setSearchTerm(newValue)}
          onSubmitEditing={searchApi}
          placeholderTextColor="gray"
        />
      </View>

      

      {loading ? (
        <ActivityIndicator size="large" color="#ff6347" style={styles.loader} />
      ) : (
        <>
          {results.length > 0 ? (
            <ScrollView>
              <Text style={styles.resultText}>
                Found {results.length} results
              </Text>
              <ResultList
                results={filterResultsByPrice("$")}
                title="Cost Effective"
              />
              <ResultList
                results={filterResultsByPrice("$$")}
                title="A Bit Pricier"
              />
              <ResultList
                results={filterResultsByPrice("$$$")}
                title="Big Spenders"
              />
              <ResultList
                results={filterResultsByPrice("$$$$")}
                title="Burger bachay"
              />
            </ScrollView>
          ) : (
            <Text style={styles.noResultsText}>
              Api Error or product not found
            </Text>
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  searchBox: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: "center",
    marginBottom: 20,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,

    elevation: 8,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  loader: {
    marginTop: 30,
  },
  resultText: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
    color: "#333",
    textAlign: "center",
  },
  productContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  productInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#555",
  },
  noResultsText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#888",
    textAlign: "center",
    marginTop: 20,
  },
});
