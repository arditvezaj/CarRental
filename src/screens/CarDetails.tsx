import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { carsData } from "../data/dummy-data";
import CarInfos from "../components/organisms/CarInfos";
import BookButton from "../components/atoms/BookButton";
import { CarItemProps } from "../components/organisms/CarItem";
import { NavigationType } from "../constants/types";
import colors from "../constants/colors";

const CarDetails = () => {
  const navigation = useNavigation<NavigationType>();
  const route = useRoute();
  const { id, fromMyCars } = route.params as {
    id: string;
    fromMyCars?: boolean;
  };

  const displayedCars = carsData.filter((carItem) => {
    return carItem.id == id;
  });

  const renderCarItem = ({ item }: CarItemProps) => {
    return <CarInfos item={item} fromMyCars={fromMyCars} />;
  };

  const navigationHandler = () => {
    navigation.navigate("Edit Car", { car: { item: displayedCars[0] } });
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={displayedCars}
        keyExtractor={(item) => item.id}
        renderItem={renderCarItem}
        showsVerticalScrollIndicator={false}
      />
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
