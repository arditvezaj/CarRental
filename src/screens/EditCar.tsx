import { StyleSheet, SafeAreaView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NavigationType } from "../constants/types";
import CarForm, { CarFormData } from "../components/organisms/CarForm";

interface RouteParams {
  car: CarFormData;
}

const EditCar = () => {
  const navigation = useNavigation<NavigationType>();
  const route = useRoute();
  const { car } = route.params as RouteParams;

  const handleSubmit = (data: CarFormData) => {
    console.log("Updated car data:", data);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <CarForm
        initialValues={car}
        onSubmit={handleSubmit}
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
