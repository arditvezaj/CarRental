import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Home />
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
