import { View, Pressable, StyleSheet, FlatList } from "react-native";
import { carsData } from "../data/dummy-data";
import Title from "../components/Title";
import CarItem from "../components/CarItem";

const Home = ({ navigation }) => {
  const renderCarCards = (itemData) => {
    const pressHandler = () => {
      navigation.navigate("Car Details", {
        id: itemData.item.id,
      });
    };
    return (
      <CarItem
        name={itemData.item.name}
        price={itemData.item.price}
        imageUrl={itemData.item.imageUrl}
        onPress={pressHandler}
      />
    );
  };
  return (
    <FlatList
      data={carsData}
      keyExtractor={(item) => item.id}
      renderItem={renderCarCards}
    />
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
