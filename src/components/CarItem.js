import { View, Text, Image, StyleSheet } from "react-native";

const CarItem = ({ name, price, imageUrl }) => {
  return (
    <View>
      <Image source={imageUrl} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>Price: {price}$</Text>
      </View>
    </View>
  );
};

export default CarItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  image: {
    borderRadius: 8,
    width: 320
  },
  name: {
    marginVertical: 8,
    color: "white",
  },
  price: {
    marginVertical: 8,
    color: "white",
  },
});
