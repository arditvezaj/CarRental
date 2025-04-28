import { SafeAreaView, FlatList, StyleSheet } from "react-native";
import { carTransmissions } from "../../constants/filters";
import InnerSearchItem from "../../components/organisms/InnerSearchItem";
import { useDispatch, useSelector } from "react-redux";
import { setTransmission } from "../../redux/modules/filters/slice";
import { RootState } from "@/src/redux/store";

type CarTransmissionProps = {
  item: { name: string };
};

const CarTransmission = () => {
  const transmission = useSelector(
    (state: RootState) => state.filtersReducer.transmission
  );
  const dispatch = useDispatch();
  const transmissionHandler = (value: string) =>
    dispatch(setTransmission(value));

  const renderItem = ({ item }: CarTransmissionProps) => (
    <InnerSearchItem
      name={item.name}
      value={transmission}
      setState={transmissionHandler}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={carTransmissions}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
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
});
