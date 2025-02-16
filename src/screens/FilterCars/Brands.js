import {
  SafeAreaView,
  FlatList,
  TextInput,
  View,
  StyleSheet,
} from "react-native";
import { allCarBrands } from "../../constants/filters";
import InnerSearchItem from "../../components/organisms/InnerSearchItem";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { setBrand } from "../../redux/modules/filters/slice";

const CarBrands = () => {
  const brand = useSelector((state) => state.filtersReducer.brand);
  const dispatch = useDispatch();
  const brandHandler = (value) => dispatch(setBrand(value));

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <MaterialIcons name="search" size={24} color="#B3B3B3" />
        <TextInput placeholder="Filter brands" style={styles.input} />
      </View>
      <FlatList
        data={allCarBrands}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <InnerSearchItem
            name={item.name}
            value={brand}
            setState={brandHandler}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default CarBrands;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#fff",
    marginTop: 20,
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  item: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#E6E8EC",
  },
  label: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
  },
  input: {
    fontSize: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
});
