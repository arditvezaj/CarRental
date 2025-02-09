import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import colors from "../../constants/colors";

const CarItem = ({ id, name, price, discount, imageUrl }) => {
  const navigation = useNavigation();

  const onPressHandler = () => {
    navigation.navigate("Car Details", { id });
  };
  return (
    <TouchableOpacity onPress={onPressHandler} style={styles.container}>
      {/* <View style={styles.discountContainer}>
        <Text style={styles.discount}>-{discount}%</Text>
      </View> */}
      <Image source={imageUrl} style={styles.image} />
      <View style={styles.innerContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>${price}/day</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CarItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 185,
    backgroundColor: colors.secondary,
    margin: 10,
    borderRadius: 12,
    shadowOpacity: 1,
    shadowOffset: 1,
  },
  innerContainer: {
    paddingLeft: 12,
    paddingTop: 8,
  },
  discountContainer: {
    padding: 4,
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#fa534b",
    borderRadius: 4,
    zIndex: 999,
  },
  discount: {
    color: "white",
  },
  image: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    width: "100%",
    height: 130,
    objectFit: "cover",
  },
  name: {
    fontSize: 16,
    fontWeight: "700",
    color: "white",
  },
  price: {
    marginTop: 3,
    color: "white",
  },
});
