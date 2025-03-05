import { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { useForm } from "react-hook-form";
import ControlledInput from "../atoms/ControlledInput";
import ControlledPhotoInput from "../atoms/ControlledPhotoInput";
import ControlledDropdown from "../atoms/ControlledDropdown";
import ControlledDateTimePicker from "../atoms/ControlledDateTimePicker";
import {
  allCarMakes,
  carTransmissions,
  carFuel,
  carModels,
  CarModelProps,
} from "../../constants/filters";
import colors from "../../constants/colors";
import { TouchableOpacity } from "react-native";

export interface CarFormData {
  name: string;
  make: string;
  model: string;
  transmission: string;
  fuel: string;
  year: string | number;
  price: string | number;
  date: Date | null;
  engine: string;
  photo: string;
}

interface CarFormProps {
  initialValues?: Partial<CarFormData>;
  onSubmit: (data: CarFormData) => void;
  submitButtonText: string;
  isEditMode?: boolean;
}

const CarForm = ({
  initialValues,
  onSubmit,
  submitButtonText,
  isEditMode = false,
}: CarFormProps) => {
  const { control, handleSubmit, reset, watch, setValue } =
    useForm<CarFormData>({
      defaultValues: {
        name: initialValues?.name || "",
        make: initialValues?.make || "",
        model: initialValues?.model || "",
        price: initialValues?.price || "",
        date: initialValues?.date || null,
        engine: initialValues?.engine || "",
        transmission: initialValues?.transmission || "",
        year: initialValues?.year || "",
        fuel: initialValues?.fuel || "",
        photo: initialValues?.photo || "",
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

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>
        {isEditMode ? "Edit Car Details" : "Add New Car"}
      </Text>
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
            name="engine"
            label="Engine"
            placeholder="Engine"
            keyboardType="numeric"
            maxLength={4}
            control={control}
            rules={{
              required: "Engine is required",
              validate: (value: string) => {
                const engine = parseInt(value);
                return (
                  (engine >= 200 && engine <= 6000) ||
                  "Please enter a valid engine power"
                );
              },
            }}
          />
        </View>
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
      </View>
      <View style={styles.inputsContainer}>
        <View style={styles.input}>
          <ControlledDateTimePicker
            name="date"
            label="Available Date"
            control={control}
            rules={{
              required: "Available Date is required",
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
      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>{submitButtonText}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CarForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
    marginTop: 15,
    marginBottom: 10,
    textAlign: "center",
  },
  button: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.secondary,
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 25,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
  },
  input: {
    width: "48%",
  },
  inputsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
