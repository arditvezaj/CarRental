import {
  SafeAreaView,
  FlatList,
  TextInput,
  View,
  StyleSheet,
} from "react-native";
import { allCarMakes } from "../../constants/filters";
import InnerSearchItem from "../../components/organisms/InnerSearchItem";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { setMake } from "../../redux/modules/filters/slice";
import { RootState } from "@/src/redux/store";

interface CarMakeProps {
  item: { id: number; name: string };
}

const CarMakes = () => {
  const make = useSelector((state: RootState) => state.filtersReducer.make);
  const dispatch = useDispatch();
  const makeHandler = (value: string) => dispatch(setMake(value));
  // const [carMakes, setCarMakes] = useState();

  // const carMakesHandler = async () => {
  //   const response = await fetch("https://carapi.app/api/makes");
  //   const data = await response.json();
  //   setCarMakes(data.data);
  // };

  // useEffect(() => {
  //   carMakesHandler();
  // }, []);

  const renderItem = ({ item }: CarMakeProps) => (
    <InnerSearchItem name={item.name} value={make} setState={makeHandler} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <MaterialIcons name="search" size={24} color="#B3B3B3" />
        <TextInput placeholder="Filter makes" style={styles.input} />
      </View>
      <FlatList
        data={allCarMakes}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default CarMakes;

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
  input: {
    fontSize: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
});
