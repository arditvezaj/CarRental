import { SafeAreaView, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import CarInfos from "../components/organisms/CarInfos";
import BookButton from "../components/atoms/BookButton";
import { NavigationType } from "../constants/types";
import colors from "../constants/colors";
import { useGetCarByIdQuery } from "../redux/services/cars/api";

const CarDetails = () => {
  const navigation = useNavigation<NavigationType>();
  const route = useRoute();
  const { id, fromMyCars } = route.params as {
    id: string;
    fromMyCars?: boolean;
  };

  const { data: carData } = useGetCarByIdQuery(id);

  if (!carData) return <Text>Car not found</Text>;

  const navigationHandler = () => {
    navigation.navigate("Edit Car", { id });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>
        <CarInfos item={carData} fromMyCars={fromMyCars} />;
      </Text>
      {fromMyCars ? (
        <TouchableOpacity style={styles.editButton} onPress={navigationHandler}>
          <Text style={styles.buttonText}>Edit Car</Text>
        </TouchableOpacity>
      ) : (
        <BookButton />
      )}
    </SafeAreaView>
  );
};

export default CarDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
  editButton: {
    backgroundColor: colors.secondary,
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 25,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
