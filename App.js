import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";
import store from "./src/redux/store";
import colors from "./src/constants/colors";

import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import SignUp from "./src/screens/Signup";
import CarDetails from "./src/screens/CarDetails";
import Favorites from "./src/screens/Favorites";
import SearchCars from "./src/screens/SearchCars";
import CarBrands from "./src/screens/FilterCars/Brands";
import CarPrices from "./src/screens/FilterCars/Prices";
import CarFuel from "./src/screens/FilterCars/Fuel";
import CarTransmission from "./src/screens/FilterCars/Transmission";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const commonScreenOptions = {
  headerStyle: {
    backgroundColor: colors.secondary,
  },
  headerTintColor: "white",
  headerTitleStyle: {
    fontWeight: "bold",
  },
  contentStyle: {
    backgroundColor: colors.primary,
  },
};

const LoginStack = () => (
  <Stack.Navigator screenOptions={commonScreenOptions}>
    <Stack.Screen
      name="LoginScreen"
      component={Login}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="SignUp" component={SignUp} />
  </Stack.Navigator>
);

const HomeStack = () => (
  <Stack.Navigator screenOptions={commonScreenOptions}>
    <Stack.Screen name="Car Rental" component={Home} />
    <Stack.Screen name="Car Details" component={CarDetails} />
    <Stack.Screen name="Search Cars" component={SearchCars} />
    <Stack.Screen name="Car Brands" component={CarBrands} />
    <Stack.Screen name="Car Price" component={CarPrices} />
    <Stack.Screen name="Car Fuel" component={CarFuel} />
    <Stack.Screen name="Car Transmission" component={CarTransmission} />
  </Stack.Navigator>
);

const FavoritesStack = () => (
  <Stack.Navigator screenOptions={commonScreenOptions}>
    <Stack.Screen name="Favorites" component={Favorites} />
  </Stack.Navigator>
);

const MainTabs = () => (
  <Tab.Navigator
    screenOptions={{
      ...commonScreenOptions,
      tabBarActiveTintColor: "#fff",
      tabBarLabelStyle: { marginTop: -10, marginBottom: 0 },
      tabBarStyle: { height: 90, backgroundColor: colors.secondary },
    }}
  >
    <Tab.Screen
      name="HomeTab"
      component={HomeStack}
      options={{
        headerShown: false,
        title: "Home",
        tabBarIcon: ({ color }) => (
          <FontAwesome size={28} name="home" color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Favorites"
      component={FavoritesStack}
      options={{
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <FontAwesome size={28} name="heart" color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={commonScreenOptions}>
            <Stack.Screen
              name="LoginFlow"
              component={LoginStack}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={MainTabs}
              options={{ headerShown: false }}
              screenOptions={commonScreenOptions}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
