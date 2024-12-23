import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.HeadStyle}>MOBILE APP SCREENS</Text>
      <TouchableOpacity
        style={styles.viewStyle}
        onPress={() => {
          navigation.navigate("Cart");
        }}
      >
        <Text style={styles.textStyle}>Go to Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.viewStyle}
        onPress={() => {
          navigation.navigate("searchScreen");
        }}
      >
        <Text style={styles.textStyle}>Go to Search and Keywords Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.viewStyle}
        onPress={() => navigation.navigate("SearchAndFilter")}
      >
        <Text style={styles.textStyle}>Go to Search Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.viewStyle}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.textStyle}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.viewStyle}
        onPress={() => navigation.navigate("LogInScreen2")}
      >
        <Text style={styles.textStyle}>Log In Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.viewStyle}
        onPress={() => navigation.navigate("flex")}
      >
        <Text style={styles.textStyle}>Go to Product Listing and Management Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.viewStyle}
        onPress={() => navigation.navigate("QuizApp")}
      >
        <Text style={styles.textStyle}>Quiz App</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.viewStyle}
        onPress={() => navigation.navigate("ProductsCounter")}
      >
        <Text style={styles.textStyle}>Products Counter</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.viewStyle}
        onPress={() => navigation.navigate("AuthAndFetch")}
      >
        <Text style={styles.textStyle}>Auth And Fetch</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "rgba(68, 138, 179, 0.8)",
  },
  viewStyle: {
    backgroundColor: "blue",
    borderRadius: 20,
    padding: 12,
    marginBottom: 10, // Add space between buttons
  },
  textStyle: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
  },
  HeadStyle: {
    color: "rgba(255, 255, 255, 0.9)",
    padding: 12,
    fontSize: 20,
    alignSelf: "center",
  },
});