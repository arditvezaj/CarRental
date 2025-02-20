import { useEffect } from "react";
import {
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import SearchItem from "../components/organisms/SearchItem";
import { useSelector, useDispatch } from "react-redux";
import colors from "../constants/colors";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { setModel } from "../redux/modules/filters/slice";
import { RootState } from "../redux/store";

const SearchCars = () => {
  const navigation =
    useNavigation<NavigationProp<{ "Car Rental": undefined }>>();
  const dispatch = useDispatch();
  const make = useSelector((state: RootState) => state.filtersReducer.make);
  const model = useSelector((state: RootState) => state.filtersReducer.model);
  const priceFrom = useSelector(
    (state: RootState) => state.filtersReducer.priceFrom
  );
  const priceTo = useSelector(
    (state: RootState) => state.filtersReducer.priceTo
  );
  const fuel = useSelector((state: RootState) => state.filtersReducer.fuel);
  const transmission = useSelector(
    (state: RootState) => state.filtersReducer.transmission
  );
  const yearFrom = useSelector(
    (state: RootState) => state.filtersReducer.yearFrom
  );
  const yearTo = useSelector((state: RootState) => state.filtersReducer.yearTo);

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

  let year = "";
  if (!yearFrom && !yearTo) {
    year = "All";
  } else if (yearFrom && !yearTo) {
    year = "from " + yearFrom;
  } else if (!yearFrom && yearTo) {
    year = "up to " + yearTo;
  } else {
    year = yearFrom + " - " + yearTo;
  }

  useEffect(() => {
    if (make) {
      dispatch(setModel("All"));
    }
  }, [make]);

  const array = [
    { id: "1", name: "Make", path: "Car Makes", value: make },
    { id: "2", name: "Model", path: "Car Models", value: model },
    {
      id: "3",
      name: "Price",
      path: "Car Price",
      value: price,
    },
    { id: "4", name: "Year", path: "Car Year", value: year },
    { id: "5", name: "Fuel", path: "Car Fuel", value: fuel },
    {
      id: "6",
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
