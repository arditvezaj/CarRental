import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";
import { Provider } from "react-redux";
import { FontAwesome, FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import store from "./src/redux/store";
import colors from "./src/constants/colors";

import Login from "./src/screens/Login";
import SignUp from "./src/screens/Signup";
import Home from "./src/screens/Home";
import CarDetails from "./src/screens/CarDetails";
import AddCar from "./src/screens/AddCar";
import FilterCars from "./src/screens/FilterCars";
import CarMakes from "./src/screens/FilterCars/Makes";
import CarModels from "./src/screens/FilterCars/Models";
import CarPrices from "./src/screens/FilterCars/Prices";
import CarFuel from "./src/screens/FilterCars/Fuel";
import CarTransmission from "./src/screens/FilterCars/Transmission";
import CarYears from "./src/screens/FilterCars/Years";
import Favorites from "./src/screens/Favorites";
import Profile from "./src/screens/Profile";
interface ScreenOptionsProps {
  headerStyle: {
    backgroundColor: string;
  };
  headerTintColor: string;
  headerTitleStyle: {
    fontWeight: string;
  };
  contentStyle: {
    backgroundColor: string;
  };
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const commonScreenOptions:
  | NativeStackNavigationOptions
  | BottomTabNavigationOptions
  | any = {
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
    <Stack.Screen name="Filter Cars" component={FilterCars} />
    <Stack.Screen name="Car Makes" component={CarMakes} />
    <Stack.Screen name="Car Models" component={CarModels} />
    <Stack.Screen name="Car Price" component={CarPrices} />
    <Stack.Screen name="Car Fuel" component={CarFuel} />
    <Stack.Screen name="Car Transmission" component={CarTransmission} />
    <Stack.Screen name="Car Year" component={CarYears} />
  </Stack.Navigator>
);

const AddCarStack = () => (
  <Stack.Navigator screenOptions={commonScreenOptions}>
    <Stack.Screen name="Add Car" component={AddCar} />
  </Stack.Navigator>
);

const FavoritesStack = () => (
  <Stack.Navigator screenOptions={commonScreenOptions}>
    <Stack.Screen name="Favorites" component={Favorites} />
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator screenOptions={commonScreenOptions}>
    <Stack.Screen name="Profile" component={Profile} />
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
      name="AddCarTab"
      component={AddCarStack}
      options={{
        headerShown: false,
        title: "Add Car",
        tabBarIcon: ({ color }) => (
          <FontAwesome5 size={28} name="plus" color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="FavoritesTab"
      component={FavoritesStack}
      options={{
        headerShown: false,
        title: "Favorites",
        tabBarIcon: ({ color }) => (
          <FontAwesome size={28} name="heart" color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="ProfileTab"
      component={ProfileStack}
      options={{
        headerShown: false,
        title: "Profile",
        tabBarIcon: ({ color }) => (
          <FontAwesome6 size={28} name="user-large" color={color} />
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
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
