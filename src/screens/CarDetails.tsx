import { useLayoutEffect } from "react";
import { SafeAreaView, FlatList, StyleSheet } from "react-native";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import { carsData } from "../data/dummy-data";
import CarInfos from "../components/organisms/CarInfos";
import BookButton from "../components/atoms/BookButton";
import { CarItemProps } from "../components/organisms/CarItem";

interface CarDetailsProps {
  route?: RouteProp<{ "Car Details": { id: string } }>;
  navigation?: NavigationProp<{ "Car Details": { id: string } }>;
}

const CarDetails = ({ route, navigation }: CarDetailsProps) => {
  const id = route && route.params.id;

  const displayedCars = carsData.filter((carItem) => {
    return carItem.id == id;
  });

  // useLayoutEffect(() => {
  //   const carName = carsData.find((car) => car.id === id)?.name;

  //   navigation.setOptions({
  //     name: carName,
  //   });
  // }, [id, navigation]);

  const renderCarItem = ({ item }: CarItemProps) => {
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
