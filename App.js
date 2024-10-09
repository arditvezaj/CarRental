import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import CarDetails from "./src/screens/CarDetails";
import Favorites from "./src/screens/Favorites";
import colors from "./src/constants/colors";
import { Provider } from "react-redux";
import store from "./src/redux/store";
// import "./i18n";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
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
            }}
          >
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ title: "Car Rental" }}
            />
            <Stack.Screen name="Car Details" component={CarDetails} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Favorites" component={Favorites} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
