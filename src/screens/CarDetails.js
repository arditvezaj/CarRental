import { useLayoutEffect } from "react";
import { View, FlatList } from "react-native";

import { carsData } from "../data/dummy-data";
import CarInfos from "../components/organisms/CarInfos";

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
    <View>
      <FlatList
        data={displayedCars}
        keyExtractor={(item) => item.id}
        renderItem={renderCarItem}
      />
    </View>
  );
};

export default CarDetails;
