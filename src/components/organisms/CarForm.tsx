import { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
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
import { FontAwesome } from "@expo/vector-icons";

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
  imageUrl: string;
}

interface CarFormProps {
  initialValues?: Partial<CarFormData>;
  onSubmit: (data: CarFormData) => void;
  onCancel: () => void;
  submitButtonText: string;
  isEditMode?: boolean;
  formRef?: React.MutableRefObject<{ reset: () => void } | null>;
}

const CarForm = ({
  initialValues,
  onSubmit,
  onCancel,
  submitButtonText,
  isEditMode = false,
  formRef,
}: CarFormProps) => {
  const { control, handleSubmit, reset, watch, setValue } =
    useForm<CarFormData>({
      defaultValues: {
        name: initialValues?.name || "",
        make: initialValues?.make || "",
        model: initialValues?.model || "",
        price: initialValues?.price || "",
        date: initialValues?.date ? new Date(initialValues.date) : null,
        engine: initialValues?.engine || "",
        transmission: initialValues?.transmission || "",
        year: initialValues?.year || "",
        fuel: initialValues?.fuel || "",
        imageUrl: initialValues?.imageUrl || "",
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
      if (!initialValues?.model) {
        setValue("model", "");
      }
    }
  }, [selectedMake]);

  // Initialize models if we have initial make
  useEffect(() => {
    if (initialValues?.make) {
      getModelsByMake(initialValues.make);
    }
  }, []);

  useEffect(() => {
    if (formRef) {
      formRef.current = {
        reset: () => {
          reset();
          setModels([]);
        },
      };
    }
  }, [formRef, reset]);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {isEditMode && <Text style={styles.title}>Edit Car Details</Text>}
      <ControlledInput
        name="name"
        label="Name"
        placeholder="Name"
        control={control}
        rules={{
          required: "Name is required",
        }}
      />
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
        label="Fuel type"
        control={control}
        data={carFuel.slice(1)}
        placeholder="Select Fuel"
      />
      <View style={styles.inputsContainer}>
        <View style={styles.input}>
          <ControlledInput
            name="engine"
            label="Engine power (cc)"
            placeholder="Engine"
            keyboardType="numeric"
            maxLength={4}
            control={control}
            rules={{
              required: "Engine power is required",
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
            label="First registration"
            placeholder="Year"
            keyboardType="numeric"
            maxLength={4}
            control={control}
            rules={{
              required: "First registration is required",
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
        name="imageUrl"
        control={control}
        rules={{
          required: "Please upload a photo of the car",
        }}
      />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.closeButton} onPress={onCancel}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
        >
          <FontAwesome name="check" size={20} color="#fff" />
          <Text style={styles.buttonText}>{submitButtonText}</Text>
        </TouchableOpacity>
      </View>
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
    marginTop: 10,
    textAlign: "center",
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
  input: {
    width: "48%",
  },
  inputsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
