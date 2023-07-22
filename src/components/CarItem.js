import { View, Text, Pressable, Image, StyleSheet } from "react-native";

const CarItem = ({ name, price, imageUrl }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.5 : 1,
        },
      ]}
    >
      <View style={styles.container}>
        <Image source={imageUrl} style={styles.image} />
        <View style={styles.innerContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>Price: {price}$</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default CarItem;

const styles = StyleSheet.create({
  container: { backgroundColor: "black", marginBottom: 30, borderRadius: 8 },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  image: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    width: 320,
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
