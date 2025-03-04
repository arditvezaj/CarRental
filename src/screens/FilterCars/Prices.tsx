import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
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
  const priceFrom = useSelector(
    (state: RootState) => state.filtersReducer.priceFrom
  );
  const priceTo = useSelector(
    (state: RootState) => state.filtersReducer.priceTo
  );

  const filterHandler = () => {
    navigation.navigate("Filter Cars");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Price:</Text>
      <TextInput
        style={styles.input}
        placeholder="From"
        keyboardType="numeric"
        value={priceFrom}
        onChangeText={(e) => dispatch(setPriceFrom(e))}
      />
      <TextInput
        style={styles.input}
        placeholder="To"
        keyboardType="numeric"
        value={priceTo}
        onChangeText={(e) => dispatch(setPriceTo(e))}
      />
      <TouchableOpacity style={styles.button} onPress={filterHandler}>
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
});
