import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import DropdownPicker from "../components/molecules/DropdownPicker";
import {
  allCarMakes,
  carModels,
  carTransmissions,
  carFuel,
  CarModelProps,
} from "../constants/filters";
import colors from "../constants/colors";

const AddCar = () => {
  const navigation =
    useNavigation<NavigationProp<{ "Car Rental": undefined }>>();
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [transmission, setTransmission] = useState("");
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState("");
  // const [photo, setPhoto] = useState("");
  // const [date, setDate] = useState("");
  const [models, setModels] = useState<{ name: string }[]>([]);

  function getModelsByMake(make: keyof CarModelProps | string) {
    const models = carModels[make as keyof CarModelProps] || [];
    return setModels(models.map((model) => ({ name: model })));
  }

  useEffect(() => {
    getModelsByMake(make);
    setModel("All");
  }, [make]);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Car Details</Text>
      <Text style={styles.label}>Make</Text>
      <DropdownPicker
        data={allCarMakes.slice(1)}
        onSelect={(item) => setMake(item.name)}
        selectedItem={make}
        placeholder="Select Make"
      />
      {make !== "" && (
        <>
          <Text style={styles.label}>Model</Text>
          <DropdownPicker
            data={models}
            onSelect={(item) => setModel(item.name)}
            selectedItem={model}
            placeholder="Select Model"
          />
        </>
      )}
      <Text style={styles.label}>Transmission</Text>
      <DropdownPicker
        data={carTransmissions.slice(1)}
        onSelect={(item) => setTransmission(item.name)}
        selectedItem={transmission}
        placeholder="Select Transmission"
      />
      <Text style={styles.label}>Fuel</Text>
      <DropdownPicker
        data={carFuel.slice(1)}
        onSelect={(item) => setFuel(item.name)}
        selectedItem={fuel}
        placeholder="Select Fuel"
      />
      <Text style={styles.label}>Year</Text>
      <TextInput
        style={styles.input}
        placeholder="Year"
        keyboardType="numeric"
        value={year}
        onChangeText={(e) => setYear(e)}
        maxLength={4}
      />
      <Text style={styles.label}>Price</Text>
      <TextInput
        style={styles.input}
        placeholder="Price"
        keyboardType="numeric"
        value={price}
        onChangeText={(e) => setPrice(e)}
      />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => {
            navigation.navigate("Car Rental");
          }}
        >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Car Rental");
          }}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AddCar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 10,
  },
  label: {
    fontSize: 15,
    marginTop: 15,
  },
  input: {
    height: 44,
    width: "100%",
    borderRadius: 8,
    backgroundColor: "#F2F2F2",
    paddingHorizontal: 10,
    marginTop: 7,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingBottom: 15,
  },
  button: {
    width: "47%",
    height: 44,
    backgroundColor: colors.secondary,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  closeButton: {
    width: "47%",
    height: 44,
    backgroundColor: "grey",
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
