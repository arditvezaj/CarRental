import { StyleSheet, SafeAreaView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NavigationType, CarFormData } from "../constants/types";
import CarForm from "../components/organisms/CarForm";
import {
  useGetCarByIdQuery,
  useUpdateCarMutation,
} from "../redux/services/cars/api";

type RouteProps = {
  key: string;
  params: {
    id: string;
  };
  name: string;
};

const EditCar = () => {
  const navigation = useNavigation<NavigationType>();
  const { params } = useRoute<RouteProps>();

  const { data: carData } = useGetCarByIdQuery(params.id);
  const [updateCar] = useUpdateCarMutation();

  const handleSubmit = async (data: CarFormData) => {
    try {
      await updateCar({ ...data, id: params.id }).unwrap();
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <CarForm
        initialValues={carData}
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
