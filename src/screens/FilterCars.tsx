import { useRef, useEffect } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import SearchItem from "../components/organisms/SearchItem";
import { useSelector, useDispatch } from "react-redux";
import colors from "../constants/colors";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  setMake,
  setModel,
  setPriceFrom,
  setPriceTo,
  setFuel,
  setTransmission,
  setYearFrom,
  setYearTo,
} from "../redux/modules/filters/slice";
import { RootState } from "../redux/store";
import { NavigationType } from "../constants/types";

const FilterCars = () => {
  const navigation = useNavigation<NavigationType>();
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

  const prevMakeRef = useRef<string | null>(make);

  useEffect(() => {
    if (make && make !== prevMakeRef.current) {
      dispatch(setModel("All"));
    }

    prevMakeRef.current = make;
  }, [make]);

  const resetHandler = () => {
    dispatch(setMake("All"));
    dispatch(setModel("All"));
    dispatch(setPriceFrom(""));
    dispatch(setPriceTo(""));
    dispatch(setFuel("All"));
    dispatch(setTransmission("All"));
    dispatch(setYearFrom(""));
    dispatch(setYearTo(""));
  };

  const array = [
    { id: "1", name: "Make", path: "Makes", value: make },
    { id: "2", name: "Model", path: "Models", value: model },
    {
      id: "3",
      name: "Price",
      path: "Price",
      value: price,
    },
    {
      id: "4",
      name: "First registration",
      path: "First Registration",
      value: year,
    },
    { id: "5", name: "Fuel", path: "Fuel", value: fuel },
    {
      id: "6",
      name: "Transmission",
      path: "Transmission",
      value: transmission,
    },
  ];

  const filterHandler = () => {
    navigation.navigate("Car Rental");
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={array}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SearchItem item={item} />}
      />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#990f02" }]}
          onPress={resetHandler}
        >
          <FontAwesome name="undo" size={20} color="#fff" />
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={filterHandler}>
          <FontAwesome name="search" size={20} color="#fff" />
          <Text style={styles.buttonText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FilterCars;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    width: "47%",
    height: 44,
    backgroundColor: colors.secondary,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginTop: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
