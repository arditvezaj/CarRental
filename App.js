import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import colors from "./src/constants/colors";

// Screens
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import SignUp from "./src/screens/Signup";
import CarDetails from "./src/screens/CarDetails";
import Favorites from "./src/screens/Favorites";

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

// Login Flow Navigator
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
  </Stack.Navigator>
);

const MainTabs = () => (
  <Tab.Navigator screenOptions={commonScreenOptions}>
    <Tab.Screen
      name="HomeTab"
      component={HomeStack}
      options={{ headerShown: false, tabBarLabel: "Home" }}
    />
    <Tab.Screen name="Favorites" component={Favorites} />
  </Tab.Navigator>
);

// Root App Navigator
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
