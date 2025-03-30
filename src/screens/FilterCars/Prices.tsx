import { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  BackHandler,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { setPriceFrom, setPriceTo } from "../../redux/modules/filters/slice";
import colors from "../../constants/colors";
import { RootState } from "@/src/redux/store";
import { NavigationType } from "@/src/constants/types";

const CarPrices = () => {
  const navigation = useNavigation<NavigationType>();
  const dispatch = useDispatch();
  const reduxPriceFrom = useSelector(
    (state: RootState) => state.filtersReducer.priceFrom
  );
  const reduxPriceTo = useSelector(
    (state: RootState) => state.filtersReducer.priceTo
  );

  const [priceFrom, setLocalPriceFrom] = useState(
    reduxPriceFrom ? reduxPriceFrom.toString() : ""
  );
  const [priceTo, setLocalPriceTo] = useState(
    reduxPriceTo ? reduxPriceTo.toString() : ""
  );
  const [error, setError] = useState("");

  useEffect(() => {
    const from = parseInt(priceFrom, 10);
    const to = parseInt(priceTo, 10);

    if (!priceFrom || !priceTo) {
      setError(""); // Clear error when fields are empty
      return;
    }

    if (from < 0) {
      setError("Price From must be a positive number");
    } else if (to < 0) {
      setError("Price To must be a positive number");
    } else if (from > to) {
      setError("Price From must be less than or equal to Price To");
    } else {
      setError(""); // Clear error if everything is valid
      dispatch(setPriceFrom(from));
      dispatch(setPriceTo(to));
    }
  }, [priceFrom, priceTo]); // Run validation when prices change

  const handlePriceFromChange = (text: string) => {
    setLocalPriceFrom(text);
  };

  const handlePriceToChange = (text: string) => {
    setLocalPriceTo(text);
  };

  const handleDone = () => {
    if (error) {
      Alert.alert("Invalid Input", error, [{ text: "OK" }]);
      return;
    }
    dispatch(setPriceFrom(parseInt(priceFrom, 10) || ""));
    dispatch(setPriceTo(parseInt(priceTo, 10) || ""));
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Price:</Text>
      <TextInput
        style={styles.input}
        placeholder="From"
        keyboardType="numeric"
        value={priceFrom}
        onChangeText={handlePriceFromChange}
      />
      <TextInput
        style={styles.input}
        placeholder="To"
        keyboardType="numeric"
        value={priceTo}
        onChangeText={handlePriceToChange}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleDone}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CarPrices;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
    marginTop: 30,
    marginBottom: 15,
  },
  input: {
    width: "100%",
    height: 44,
    fontSize: 16,
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    backgroundColor: "#fff",
    borderColor: colors.borderColor,
    borderRadius: 8,
  },
  button: {
    width: "100%",
    height: 44,
    backgroundColor: colors.secondary,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  errorText: {
    color: colors.errorText,
    fontSize: 14,
    marginBottom: 10,
  },
});
