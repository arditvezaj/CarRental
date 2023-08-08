import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import CarDetails from "./src/screens/CarDetails";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#36454F",
            },
            headerTintColor: "white",
            contentStyle: {
              backgroundColor: "#36454F",
            },
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Car Rental" }}
          />
          <Stack.Screen name="Car Details" component={CarDetails} />
          {/* <Stack.Screen
            name="Login"
            component={Login}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
