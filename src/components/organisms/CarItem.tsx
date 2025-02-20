import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import colors from "../../constants/colors";

export interface CarItemProps {
  id: string;
  company?: string;
  name: string;
  fuel?: string;
  year?: number;
  engine?: number;
  date?: string;
  transmission?: string;
  price?: number;
  discount?: number;
  imageUrl: ImageSourcePropType;
}

const CarItem = ({ id, name, price, imageUrl }: CarItemProps) => {
  const navigation =
    useNavigation<NavigationProp<{ "Car Details": { id: string } }>>();

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
    height: 175,
    backgroundColor: colors.secondary,
    margin: 10,
    borderRadius: 10,
    shadowOpacity: 1,
    // shadowOffset: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 10,
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
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: "100%",
    height: 120,
    objectFit: "cover",
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  price: {
    marginTop: 3,
    color: "#fff",
  },
});
