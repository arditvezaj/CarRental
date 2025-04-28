import { SafeAreaView, FlatList, StyleSheet } from "react-native";
import { carFuel } from "../../constants/filters";
import InnerSearchItem from "../../components/organisms/InnerSearchItem";
import { useDispatch, useSelector } from "react-redux";
import { setFuel } from "../../redux/modules/filters/slice";
import { RootState } from "@/src/redux/store";

type CarFuelProps = {
  item: { id: number; name: string };
};

const CarFuel = () => {
  const fuel = useSelector((state: RootState) => state.filtersReducer.fuel);
  const dispatch = useDispatch();

  const fuelHandler = (value: string) => dispatch(setFuel(value));

  const renderItem = ({ item }: CarFuelProps) => (
    <InnerSearchItem name={item.name} value={fuel} setState={fuelHandler} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={carFuel}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
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
