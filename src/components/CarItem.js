import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import colors from "../constants/colors";

const CarItem = ({ name, price, discount, imageUrl, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.5 : 1,
        },
      ]}
      onPress={onPress}
    >
      <View style={styles.container}>
        <View style={styles.discountContainer}>
          <Text style={styles.discount}>-{discount}%</Text>
        </View>
        <Image source={imageUrl} style={styles.image} />
        <View style={styles.innerContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>${price}/day</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default CarItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    alignItems: "flex-end",
    marginVertical: 12,
    borderRadius: 12,
    marginHorizontal: 35,
    shadowOpacity: 1,
    shadowOffset: 1,
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    width: "100%",
  },
  discountContainer: {
    padding: 4,
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#fa534b",
    borderRadius: 4,
    zIndex: 999
  },
  discount: {
    color: "white",
  },
  image: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    width: 320,
    height: 130
  },
  name: {
    marginVertical: 4,
    fontSize: 17,
    fontWeight: "800",
    color: "white",
  },
  price: {
    marginVertical: 4,
    color: "white",
  },
});
