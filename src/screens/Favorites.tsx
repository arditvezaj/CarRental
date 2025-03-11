import { FlatList, SafeAreaView, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import CarItem from "../components/organisms/CarItem";
import { CarFormData, CarItemProps } from "../constants/types";
import { RootState } from "../redux/store";
import { useGetCarsQuery } from "../redux/services/cars/api";

const Favorites = () => {
  const favoriteCars = useSelector(
    (state: RootState) => state.favoriteCars.ids
  );
  const { data: cars } = useGetCarsQuery({});

  if (!cars) return null;

  const favoriteCarsList = cars.filter((carItem: CarFormData) => {
    return favoriteCars.includes(carItem.id);
  });

  const renderItem = ({ item }: CarItemProps) => {
    return <CarItem item={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={favoriteCarsList}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={<Text style={styles.text}>No favorite cars.</Text>}
      />
    </SafeAreaView>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
  },
});
