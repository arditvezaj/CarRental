import { useEffect, useState, useRef } from "react";
import {
  SafeAreaView,
  FlatList,
  TextInput,
  View,
  Text,
  StyleSheet,
} from "react-native";
import InnerSearchItem from "../../components/organisms/InnerSearchItem";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { setModel } from "../../redux/modules/filters/slice";
import { carModels, CarModelProps } from "../../constants/filters";
import { RootState } from "@/src/redux/store";

type ModelProp = {
  item: string;
};

const CarModels = () => {
  const [text, setText] = useState("");
  const [models, setModels] = useState<string[] | undefined>(undefined);
  const make = useSelector((state: RootState) => state.filtersReducer.make);
  const model = useSelector((state: RootState) => state.filtersReducer.model);
  const dispatch = useDispatch();
  const modelHandler = (value: string) => dispatch(setModel(value));

  const prevMakeRef: any = useRef<string | null>(make);

  function getModelsByMake(make: keyof CarModelProps) {
    setModels(
      carModels[make]?.filter((item) =>
        item.toLowerCase().startsWith(text.toLowerCase())
      )
    );
  }

  useEffect(() => {
    getModelsByMake(make);
  }, [text]);

  const renderItem = ({ item }: ModelProp) => (
    <InnerSearchItem name={item} value={model} setState={modelHandler} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <MaterialIcons name="search" size={24} color="#B3B3B3" />
        <TextInput
          value={text}
          onChangeText={(e: string) => setText(e)}
          placeholder="Search models"
          style={styles.input}
        />
      </View>
      <FlatList
        data={models}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={{ marginTop: 20 }}>No models found.</Text>
        }
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
