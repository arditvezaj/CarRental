import { FlatList, SafeAreaView, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import CarItem from "../components/organisms/CarItem";
import { carsData } from "../data/dummy-data";
import { CarItemProps } from "../components/organisms/CarItem";
import { RootState } from "../redux/store";

const Favorites = () => {
  const favoriteCars = useSelector(
    (state: RootState) => state.favoriteCars.ids
  );
  const favoriteCarsList = carsData.filter((carItem) => {
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
