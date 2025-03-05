import { StyleSheet, SafeAreaView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NavigationType } from "../constants/types";
import CarForm, { CarFormData } from "../components/organisms/CarForm";

interface RouteParams {
  car: { item: CarFormData };
}

const EditCar = () => {
  const navigation = useNavigation<NavigationType>();
  const route = useRoute();
  const { car } = route.params as RouteParams;

  const handleSubmit = (data: CarFormData) => {
    console.log("Updated car data:", data);
    navigation.goBack();
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <CarForm
        initialValues={car.item}
        onSubmit={handleSubmit}
        onCancel={cancelHandler}
        submitButtonText="Save Changes"
        isEditMode
      />
    </SafeAreaView>
  );
};

export default EditCar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
});
