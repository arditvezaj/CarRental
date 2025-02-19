import { useLayoutEffect } from "react";
import { SafeAreaView, FlatList, StyleSheet } from "react-native";

import { carsData } from "../data/dummy-data";
import CarInfos from "../components/organisms/CarInfos";
import BookButton from "../components/atoms/BookButton";

const CarDetails = ({ route, navigation }) => {
  const id = route.params.id;

  const displayedCars = carsData.filter((carItem) => {
    return carItem.id == id;
  });

  useLayoutEffect(() => {
    const carTitle = carsData.find((car) => car.id === id)?.title;

    navigation.setOptions({
      name: carTitle,
    });
  }, [id, navigation]);

  const renderCarItem = ({ item }) => {
    return <CarInfos item={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={displayedCars}
        keyExtractor={(item) => item.id}
        renderItem={renderCarItem}
        showsVerticalScrollIndicator={false}
      />
      <BookButton />
    </SafeAreaView>
  );
};

export default CarDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
});
