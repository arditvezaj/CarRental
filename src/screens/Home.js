import { View, Pressable, StyleSheet, FlatList } from "react-native";
import { carsData } from "../data/dummy-data";
import Title from "../components/Title";
import CarItem from "../components/CarItem";

const Home = ({ navigation }) => {
  const renderCarCards = (itemData) => {
    const item = itemData.item;
    const pressHandler = () => {
      navigation.navigate("Car Details", {
        id: item.id,
      });
    };
    return (
      <CarItem
        name={item.name}
        discount={item.discount}
        price={item.price}
        imageUrl={item.imageUrl}
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
