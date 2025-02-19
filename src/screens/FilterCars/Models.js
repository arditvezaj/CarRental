import { useEffect, useState } from "react";
import {
  SafeAreaView,
  FlatList,
  TextInput,
  View,
  StyleSheet,
} from "react-native";
import InnerSearchItem from "../../components/organisms/InnerSearchItem";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { setModel } from "../../redux/modules/filters/slice";
import { carModels } from "../../constants/filters";

const CarModels = () => {
  const make = useSelector((state) => state.filtersReducer.make);
  const model = useSelector((state) => state.filtersReducer.model);
  const dispatch = useDispatch();
  const modelHandler = (value) => dispatch(setModel(value));
  const [models, setModels] = useState();

  function getModelsByMake(make) {
    return setModels(carModels[make]);
  }

  useEffect(() => {
    getModelsByMake(make);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <MaterialIcons name="search" size={24} color="#B3B3B3" />
        <TextInput placeholder="Filter models" style={styles.input} />
      </View>
      <FlatList
        data={models}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <InnerSearchItem name={item} value={model} setState={modelHandler} />
        )}
      />
    </SafeAreaView>
  );
};

export default CarModels;

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
