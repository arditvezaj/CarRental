import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import CarItem from "../components/organisms/CarItem";
import { carsData } from "../data/dummy-data";

const Favorites = () => {
  const favoriteCars = useSelector((state) => state.favoriteCars.ids);
  const favoriteCarsList = carsData.filter((carItem) => {
    return favoriteCars.includes(carItem.id);
  });

  const renderItem = ({ item }) => {
    return (
      <CarItem
        id={item.id}
        name={item.name}
        discount={item.discount}
        price={item.price}
        imageUrl={item.imageUrl}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={favoriteCarsList}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
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
});
