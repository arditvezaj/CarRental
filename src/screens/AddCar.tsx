import { useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { NavigationType } from "../constants/types";
import CarForm from "../components/organisms/CarForm";

interface AddCarFormData {
  make: string;
  model: string;
  transmission: string;
  fuel: string;
  year: string | number;
  price: string | number;
  date: Date | null;
  imageUrl: string;
}

const AddCar = () => {
  const navigation = useNavigation<NavigationType>();
  const carFormRef = useRef<{ reset: () => void } | null>(null);

  const { reset } = useForm<AddCarFormData>({
    defaultValues: {
      make: "",
      model: "",
      transmission: "",
      fuel: "",
      year: "",
      price: "",
      date: null,
      imageUrl: "",
    },
  });

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

  const onSubmit = (data: AddCarFormData) => {
    console.log(data);
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
