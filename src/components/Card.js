import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import CarItem from "./CarItem";

const carsDetails = [
  {
    id: 1,
    name: "Audi Q8",
    date: new Date("12.04.2023"),
    price: 60,
    imageUrl: require("../../assets/images/audi.jpeg"),
  },
  {
    id: 2,
    name: "Mercedes 220",
    date: new Date("10.05.2016"),
    price: 40,
    imageUrl: require("../../assets/images/mercedes.jpeg"),
  },
  {
    id: 3,
    name: "BMW X6",
    date: new Date("29.12.2020"),
    price: 80,
    imageUrl: require("../../assets/images/bmw.jpeg"),
  },
  {
    id: 4,
    name: "Volvo XC90",
    date: new Date("29.12.2020"),
    price: 70,
    imageUrl: require("../../assets/images/volvo.jpeg"),
  },
];

const Card = () => {
  return (
    <FlatList
      data={carsDetails}
      keyExtractor={(item) => {
        item.id;
      }}
      renderItem={({ item }) => (
        <CarItem
          key={item.id}
          name={item.name}
          price={item.price}
          imageUrl={item.imageUrl}
          style={styles.container}
        />
      )}
    />
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
});
