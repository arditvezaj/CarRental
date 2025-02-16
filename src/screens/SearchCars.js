import {
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import SearchItem from "../components/organisms/SearchItem";
import { useSelector } from "react-redux";
import colors from "../constants/colors";
import { useNavigation } from "@react-navigation/native";

const SearchCars = () => {
  const navigation = useNavigation();
  const brand = useSelector((state) => state.filtersReducer.brand);
  const priceFrom = useSelector((state) => state.filtersReducer.priceFrom);
  const priceTo = useSelector((state) => state.filtersReducer.priceTo);
  const fuel = useSelector((state) => state.filtersReducer.fuel);
  const transmission = useSelector(
    (state) => state.filtersReducer.transmission
  );

  let price = "";
  if (!priceFrom && !priceTo) {
    price = "All";
  } else if (priceFrom && !priceTo) {
    price = "from " + priceFrom + "€";
  } else if (!priceFrom && priceTo) {
    price = "up to " + priceTo + "€";
  } else {
    price = priceFrom + "€ - " + priceTo + "€";
  }

  const array = [
    { id: 1, name: "Brand", path: "Car Brands", value: brand },
    {
      id: 2,
      name: "Price",
      path: "Car Price",
      value: price,
    },
    { id: 3, name: "Fuel", path: "Car Fuel", value: fuel },
    {
      id: 4,
      name: "Transmission",
      path: "Car Transmission",
      value: transmission,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={array}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SearchItem item={item} />}
      />
      {/* <View style={styles.buttonsContainer}> */}
      {/* <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity> */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Car Rental");
        }}
      >
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
      {/* </View> */}
    </SafeAreaView>
  );
};

export default SearchCars;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginHorizontal: 20,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E6E8EC",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    width: "100%",
    height: 44,
    backgroundColor: colors.secondary,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
