import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import colors from "../../constants/colors";
import { NavigationType } from "../../constants/types";

export interface CarItemProps {
  item: {
    id: string;
    company?: string;
    name: string;
    make?: string;
    model?: string;
    fuel?: string;
    firstRegistration?: string | number;
    engine?: string | number;
    date: Date;
    transmission?: string;
    price?: string | number;
    discount?: number;
    imageUrl: ImageSourcePropType;
  };
  fromMyCars?: boolean;
}

const CarItem = ({ item, fromMyCars }: CarItemProps) => {
  const { id, name, price, imageUrl } = item;
  const navigation = useNavigation<NavigationType>();
  const route = useRoute();
  const isFavorite = route.name == "Favorites";

  const onPressHandler = () => {
    navigation.navigate("Car Details", {
      id,
      fromMyCars: fromMyCars && fromMyCars,
    });
  };
  return (
    <TouchableOpacity
      onPress={onPressHandler}
      style={[styles.container, { maxWidth: isFavorite ? "100%" : "45%" }]}
    >
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
    height: 170,
    backgroundColor: colors.secondary,
    margin: 10,
    borderRadius: 10,
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 2 },
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
    color: "#fff",
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
