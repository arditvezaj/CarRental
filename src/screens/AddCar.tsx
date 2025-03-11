import { useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { formatISO } from "date-fns";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { NavigationType, CarFormData } from "../constants/types";
import CarForm from "../components/organisms/CarForm";

import { useCreateCarMutation } from "../redux/services/cars/api";

const AddCar = () => {
  const navigation = useNavigation<NavigationType>();
  const carFormRef = useRef<{ reset: () => void } | null>(null);

  const [addCar] = useCreateCarMutation();

  const { reset } = useForm();

  const resetHandler = () => {
    reset();
    if (carFormRef.current) {
      carFormRef.current.reset();
    }
  };

  const cancelHandler = () => {
    resetHandler();
    navigation.goBack();
  };

  const onSubmit = async (data: CarFormData) => {
    data.date?.setHours(12, 0, 0, 0);
    const formattedDate = data.date && formatISO(data.date);

    try {
      await addCar({ ...data, date: formattedDate }).unwrap();
      resetHandler();
      navigation.navigate("Car Rental");
    } catch (error) {
      console.log(error);
    }
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
      <CarForm
        submitButtonText="Add"
        onSubmit={onSubmit}
        onCancel={cancelHandler}
        formRef={carFormRef}
      />
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
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
  },
});
