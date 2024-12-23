import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import MainScreen from "./src/screens/MainScreen";
import Cart from "./src/screens/Cart";
import searchScreen from "./src/screens/searchScreen";
import SearchAndFilter from "./src/screens/SearchAndFilter";
import SignUp from "./src/screens/SignUp";
import LogInScreen from "./src/screens/LogInScreen";
import Flex from "./src/screens/flex";
import DetailsScreen from "./src/screens/DetailsScreen";
import QuizApp from "./src/screens/QuizApp";
import DateCounter from "./src/screens/DateCounter";
import ProductsCounter from "./src/screens/ProductsCounter";
import AuthAndFetch from "./src/screens/AuthAndFetch";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home Screen" component={HomeScreen} />
        <Stack.Screen name="flex" component={Flex} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="searchScreen" component={searchScreen} />
        <Stack.Screen name="SearchAndFilter" component={SearchAndFilter} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="LogInScreen" component={LogInScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="QuizApp" component={QuizApp} />
        <Stack.Screen name="DateCounter" component={DateCounter} />
        <Stack.Screen name="ProductsCounter" component={ProductsCounter} />
        <Stack.Screen name="AuthAndFetch" component={AuthAndFetch} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
