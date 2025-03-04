import { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import {
  allCarMakes,
  carModels,
  carTransmissions,
  carFuel,
  CarModelProps,
} from "../constants/filters";
import { FontAwesome } from "@expo/vector-icons";
import ControlledInput from "../components/atoms/ControlledInput";
import ControlledDropdown from "../components/atoms/ControlledDropdown";
import ControlledPhotoInput from "../components/atoms/ControlledPhotoInput";
import colors from "../constants/colors";
import { NavigationType } from "../constants/types";

interface AddCarFormData {
  make: string;
  model: string;
  transmission: string;
  fuel: string;
  year: string | number;
  price: string | number;
  photo: string;
}

const AddCar = () => {
  const navigation = useNavigation<NavigationType>();

  const { control, handleSubmit, reset, watch, setValue } =
    useForm<AddCarFormData>({
      defaultValues: {
        make: "",
        model: "",
        transmission: "",
        fuel: "",
        year: "",
        price: "",
        photo: "",
      },
    });

  const [models, setModels] = useState<{ name: string }[]>([]);
  const selectedMake = watch("make");

  function getModelsByMake(make: keyof CarModelProps | string) {
    const models = carModels[make as keyof CarModelProps] || [];
    return setModels(models.map((model) => ({ name: model })));
  }

  useEffect(() => {
    if (selectedMake) {
      getModelsByMake(selectedMake);
      setValue("model", "");
    }
  }, [selectedMake]);

  const resetHandler = () => {
    reset();
    setModels([]);
  };

  const cancelHandler = () => {
    resetHandler();
    navigation.navigate("Car Rental");
  };

  const onSubmit = (data: AddCarFormData) => {
    resetHandler();
    navigation.navigate("Car Rental");
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Car Details</Text>
        <TouchableOpacity style={styles.resetButton} onPress={resetHandler}>
          <FontAwesome name="undo" size={20} color="#fff" />
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
      <ControlledDropdown
        name="make"
        label="Make"
        control={control}
        data={allCarMakes.slice(1)}
        placeholder="Select Make"
      />
      {selectedMake && (
        <ControlledDropdown
          name="model"
          label="Model"
          control={control}
          data={models}
          placeholder="Select Model"
        />
      )}
      <ControlledDropdown
        name="transmission"
        label="Transmission"
        control={control}
        data={carTransmissions.slice(1)}
        placeholder="Select Transmission"
      />
      <ControlledDropdown
        name="fuel"
        label="Fuel"
        control={control}
        data={carFuel.slice(1)}
        placeholder="Select Fuel"
      />
      <View style={styles.inputsContainer}>
        <View style={styles.input}>
          <ControlledInput
            name="year"
            label="Year"
            placeholder="Year"
            keyboardType="numeric"
            maxLength={4}
            control={control}
            rules={{
              required: "Year is required",
              validate: (value: string) => {
                const year = parseInt(value);
                return (
                  (year >= 1950 && year <= 2025) ||
                  "Please enter a valid year (1950-2025)"
                );
              },
            }}
          />
        </View>
        <View style={styles.input}>
          <ControlledInput
            name="price"
            label="Price"
            placeholder="Price"
            keyboardType="numeric"
            control={control}
            rules={{
              required: "Price is required",
              pattern: {
                value: /^\d+(\.\d{1,2})?$/,
                message: "Please enter a valid price",
              },
            }}
            returnKeyType="done"
          />
        </View>
      </View>
      <ControlledPhotoInput
        name="photo"
        control={control}
        rules={{
          required: "Please upload a photo of the car",
        }}
      />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.closeButton} onPress={cancelHandler}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
        >
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
  input: {
    width: "48%",
  },
  inputsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    paddingBottom: 35,
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
