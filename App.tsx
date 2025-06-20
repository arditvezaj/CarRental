import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Platform } from "react-native";
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
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import store from "./src/redux/store";
import colors from "./src/constants/colors";

import Login from "./src/screens/Login";
import SignUp from "./src/screens/Signup";
import Home from "./src/screens/Home";
import CarDetails from "./src/screens/CarDetails";
import MyCars from "./src/screens/MyCars";
import AddCar from "./src/screens/AddCar";
import EditCar from "./src/screens/EditCar";
import FilterCars from "./src/screens/FilterCars";
import CarMakes from "./src/screens/FilterCars/Makes";
import CarModels from "./src/screens/FilterCars/Models";
import CarPrices from "./src/screens/FilterCars/Prices";
import CarFuel from "./src/screens/FilterCars/Fuel";
import CarTransmission from "./src/screens/FilterCars/Transmission";
import CarYears from "./src/screens/FilterCars/Years";
import Favorites from "./src/screens/Favorites";
import Profile from "./src/screens/Profile";
import EditProfile from "./src/screens/EditProfile";
import Bookings from "./src/screens/Bookings";
import Deals from "./src/screens/Deals";
import VerifyEmail from "./src/screens/VerifyEmail";

import { useGetUserQuery } from "./src/redux/services/auth/api";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const commonScreenOptions: Partial<
  NativeStackNavigationOptions & BottomTabNavigationOptions
> = {
  headerStyle: {
    backgroundColor: colors.secondary,
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
  headerTitleAlign: "center",
  contentStyle: {
    backgroundColor: colors.primary,
  },
};

const LoginStack = () => (
  <Stack.Navigator screenOptions={commonScreenOptions}>
    <Stack.Screen
      name="Login"
      component={Login}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="Verify Email" component={VerifyEmail} />
  </Stack.Navigator>
);

const HomeStack = () => (
  <Stack.Navigator screenOptions={commonScreenOptions}>
    <Stack.Screen name="Car Rental" component={Home} />
    <Stack.Screen name="Car Details" component={CarDetails} />
    <Stack.Screen name="Filter Cars" component={FilterCars} />
    <Stack.Screen name="Makes" component={CarMakes} />
    <Stack.Screen name="Models" component={CarModels} />
    <Stack.Screen name="Price" component={CarPrices} />
    <Stack.Screen name="Fuel" component={CarFuel} />
    <Stack.Screen name="Transmission" component={CarTransmission} />
    <Stack.Screen name="First Registration" component={CarYears} />
  </Stack.Navigator>
);

const MyCarsStack = () => (
  <Stack.Navigator screenOptions={commonScreenOptions}>
    <Stack.Screen name="My Cars" component={MyCars} />
    <Stack.Screen name="Car Details" component={CarDetails} />
    <Stack.Screen name="Edit Car" component={EditCar} />
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
    <Stack.Screen name="Car Details" component={CarDetails} />
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator screenOptions={commonScreenOptions}>
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Edit Profile" component={EditProfile} />
  </Stack.Navigator>
);

const DealsStack = () => (
  <Stack.Navigator screenOptions={commonScreenOptions}>
    <Stack.Screen name="Deals" component={Deals} />
  </Stack.Navigator>
);

const BookingsStack = () => (
  <Stack.Navigator screenOptions={commonScreenOptions}>
    <Stack.Screen name="Bookings" component={Bookings} />
  </Stack.Navigator>
);

const MainTabs = () => {
  const { data: user } = useGetUserQuery({});
  const isCompany = user?.role === "company";

  return (
    <Tab.Navigator
      screenOptions={{
        ...commonScreenOptions,
        tabBarActiveTintColor: "#fff",
        tabBarLabelStyle: {
          marginTop: -10,
          marginBottom: Platform.OS == "android" ? 10 : 0,
        },
        tabBarStyle: {
          height: Platform.OS === "ios" ? 90 : 75,
          backgroundColor: colors.secondary,
          position: "relative",
        },
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
      {!isCompany ? (
        <>
          <Tab.Screen
            name="MyCarsTab"
            component={MyCarsStack}
            options={{
              headerShown: false,
              title: "My Cars",
              tabBarIcon: ({ color }) => (
                <FontAwesome5 size={28} name="car" color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="AddCarTab"
            component={AddCarStack}
            options={{
              headerShown: false,
              title: "Add Car",
              tabBarIcon: () => (
                <View style={styles.tabIcon}>
                  <FontAwesome5
                    size={24}
                    name="plus"
                    color={colors.secondary}
                  />
                </View>
              ),
              tabBarLabel: () => null,
            }}
          />
        </>
      ) : (
        <Tab.Screen
          name="BookingsTab"
          component={BookingsStack}
          options={{
            headerShown: false,
            title: "Bookings",
            tabBarIcon: ({ color }) => (
              <FontAwesome5 size={28} name="car" color={color} />
            ),
          }}
        />
      )}
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
            <FontAwesome size={28} name="user" color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

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

const styles = StyleSheet.create({
  tabIcon: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
