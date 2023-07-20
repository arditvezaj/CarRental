import { View, Text, Image, StyleSheet } from "react-native";

const CarItem = ({ name, price, imageUrl }) => {
  return (
    <View>
      <Image source={require("../../assets/images/audi.jpeg")} />
      <Text style={styles.name}>{name}</Text>
      <View style={styles.container}>
        <Text>Price:</Text>
        <Text style>{price}$</Text>
      </View>
    </View>
  );
};

export default CarItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
  },
});
