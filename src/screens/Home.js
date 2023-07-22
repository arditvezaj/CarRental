import { SafeAreaView, View, Pressable, StyleSheet } from "react-native";
import Card from "../components/Card";
import Title from "../components/Title";

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Title name="Car Rental" />

        <Card />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
