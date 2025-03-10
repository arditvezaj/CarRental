import { SafeAreaView, FlatList, StyleSheet } from "react-native";
import { carTransmissions } from "../../constants/filters";
import InnerSearchItem from "../../components/organisms/InnerSearchItem";
import { useDispatch, useSelector } from "react-redux";
import { setTransmission } from "../../redux/modules/filters/slice";
import { RootState } from "@/src/redux/store";

const CarTransmission = () => {
  const transmission = useSelector(
    (state: RootState) => state.filtersReducer.transmission
  );
  const dispatch = useDispatch();
  const transmissionHandler = (value: string) =>
    dispatch(setTransmission(value));

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={carTransmissions}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <InnerSearchItem
            name={item.name}
            value={transmission}
            setState={transmissionHandler}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default CarTransmission;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
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
});
