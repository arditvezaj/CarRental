import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { carsData } from "../data/dummy-data";
import CarInfos from "../components/CarInfos";

const CarDetails = ({ route, navigation }) => {
  const id = route.params.id;

  const displayedCars = carsData.filter((carItem) => {
    return carItem.ids.indexOf(id) >= 0;
  });

  useLayoutEffect(() => {
    const carTitle = carsData.find((car) => car.id === id).title;

    navigation.setOptions({
      name: carTitle,
    });
  }, [id, navigation]);

  const renderCarItem = (itemData) => {
    const item = itemData.item;

    const carItemProps = {
      company: item.company,
      name: item.name,
      date: item.date,
      km: item.km,
      transmission: item.transmission,
      fuel: item.fuel,
      seats: item.seats,
      engine: item.engine,
      price: item.price,
      discount: item.discount,
      imageUrl: item.imageUrl,
    };
    return <CarInfos {...carItemProps} />;
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
