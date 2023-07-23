import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Login />
      {/* <Home /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#36454F",
  },
});
