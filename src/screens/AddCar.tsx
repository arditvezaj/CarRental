import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useForm } from "react-hook-form";
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
import { FontAwesome } from "@expo/vector-icons";
import ControlledInput from "../components/atoms/ControlledInput";

const AddCar = () => {
  const navigation =
    useNavigation<NavigationProp<{ "Car Rental": undefined }>>();
  const { control, handleSubmit, reset, resetField } = useForm();

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

  const resetHandler = () => {
    setMake("");
    setModel("");
    setPrice("");
    setFuel("");
    setTransmission("");
    setYear("");
    reset();
  };

  const cancelHandler = () => {
    resetHandler();
    navigation.navigate("Car Rental");
  };

  const onSubmit = handleSubmit((data: any) => {
    console.log(data);
    navigation.navigate("Car Rental");
  });

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Car Details</Text>
        <TouchableOpacity style={styles.resetButton} onPress={resetHandler}>
          <FontAwesome name="undo" size={20} color="#fff" />
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
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
      <ControlledInput
        name="year"
        label="Year"
        placeholder="Year"
        keyboardType="numeric"
        maxLength={4}
        control={control}
        rules={{ required: "Year is required" }}
      />
      <ControlledInput
        name="price"
        label="Price"
        placeholder="Price"
        keyboardType="numeric"
        control={control}
        rules={{ required: "Price is required" }}
        returnKeyType="done"
      />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.closeButton} onPress={cancelHandler}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <FontAwesome name="check" size={20} color="#fff" />
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
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
  label: {
    color: "#000",
    fontWeight: "500",
    fontSize: 14,
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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 7,
    marginTop: 10,
  },
  resetButton: {
    width: 100,
    height: 44,
    backgroundColor: "#990f02",
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 7,
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
    fontSize: 15,
    fontWeight: "700",
  },
});
