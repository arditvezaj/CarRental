import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/modules/favorites/slice";
import colors from "../constants/colors";

const CarInfos = ({
  id,
  company,
  name,
  price,
  date,
  engine,
  transmission,
  km,
  seats,
  fuel,
  imageUrl,
}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const carIsFavorite = useSelector((state) =>
    state.favoriteCars.ids.includes(id)
  );

  const toggleFavorite = () => {
    if (carIsFavorite) {
      dispatch(removeFavorite({ id }));
    } else {
      dispatch(addFavorite({ id }));
    }
  };

  const fields = [
    {
      name: "Transmission",
      value: transmission,
      image: require("../../assets/images/icons/transmision.png"),
    },
    {
      name: "Seats",
      value: seats + " seater",
      image: require("../../assets/images/icons/seats.png"),
    },
    {
      name: "Fuel",
      value: fuel,
      image: require("../../assets/images/icons/fuel.png"),
    },
    {
      name: "Engine power",
      value: engine + " cc",
      image: require("../../assets/images/icons/mileage.png"),
    },
    {
      name: "Available date",
      value: date,
      image: require("../../assets/images/icons/time.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.companyContainer}>
        <Text style={styles.company}>{company}</Text>
      </View>
      <TouchableOpacity style={styles.heart} onPress={toggleFavorite}>
        <AntDesign
          name={carIsFavorite ? "heart" : "hearto"}
          size={30}
          color="white"
        />
      </TouchableOpacity>
      <Image source={imageUrl} style={styles.image} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Text style={styles.carName}>{name}</Text>
        <Text style={styles.price}>${price}/day </Text>
      </View>
      <View>
        <Text style={styles.price}>Specifications</Text>
        <View style={styles.boxesContainer}>
          {fields.slice(0, 3).map((field, index) => (
            <View style={styles.box} key={index}>
              <Image source={field.image} style={styles.icon} />
              <Text style={styles.boxText}>{field.value}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.date}>
        <Image
          source={require("../../assets/images/icons/engine.png")}
          style={styles.smallIcon}
        />
        <Text>Engine power: </Text>
        <Text>{engine} cc</Text>
      </View>
      <View style={styles.date}>
        <Image
          source={require("../../assets/images/icons/mileage.png")}
          style={styles.smallIcon}
        />
        <Text>Mileage: </Text>
        <Text>{km} km</Text>
      </View>
      <View style={styles.date}>
        <Image
          source={require("../../assets/images/icons/time.png")}
          style={styles.smallIcon}
        />
        <Text>Available date: </Text>
        <Text>{date}</Text>
      </View>
      <TouchableOpacity
        style={styles.bottomButton}
        onPress={() => navigation.navigate("Favorites")}
      >
        <Text style={styles.buttonText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CarInfos;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  companyContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 10,
    padding: 15,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: colors.secondary,
  },
  company: {
    fontSize: 22,
    fontWeight: "700",
    color: "white",
  },
  boxesContainer: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 5,
  },
  box: {
    width: 110,
    height: 110,
    backgroundColor: "white",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  boxText: {
    color: "black",
    fontWeight: "600",
  },
  image: {
    width: "100%",
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  smallIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
  carName: {
    marginVertical: 5,
    fontSize: 20,
    fontWeight: "700",
    color: "white",
  },
  price: {
    fontSize: 18,
    fontWeight: "700",
    color: "white",
    marginVertical: 5,
  },
  heart: {
    position: "absolute",
    top: 77,
    right: 15,
    zIndex: 10,
  },
  textOutline: {
    flexDirection: "row",
  },
  textKey: { color: "white" },
  text: { color: "white", fontWeight: "bold" },
  date: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: "white",
    borderRadius: 6,
    marginVertical: 5,
  },
  bottomButton: {
    backgroundColor: colors.secondary,
    alignItems: "center",
    borderRadius: 8,
    width: "100%",
    marginTop: 10,
  },
  buttonText: {
    padding: 18,
    color: "white",
    fontWeight: "700",
    fontSize: 20,
  },
});
