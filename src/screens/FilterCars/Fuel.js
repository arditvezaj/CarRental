import { SafeAreaView, FlatList, StyleSheet } from "react-native";
import { carFuel } from "../../constants/filters";
import InnerSearchItem from "../../components/organisms/InnerSearchItem";
import { useDispatch, useSelector } from "react-redux";
import { setFuel } from "../../redux/modules/filters/slice";

const CarFuel = () => {
  const fuel = useSelector((state) => state.filtersReducer.fuel);
  const dispatch = useDispatch();
  const fuelHandler = (value) => dispatch(setFuel(value));

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={carFuel}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <InnerSearchItem name={item.name} value={fuel} setState={fuelHandler} />
        )}
      />
    </SafeAreaView>
  );
};

export default CarFuel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
});
