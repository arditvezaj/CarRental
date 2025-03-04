import { SafeAreaView, FlatList, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { carsData } from "../data/dummy-data";
import CarInfos from "../components/organisms/CarInfos";
import BookButton from "../components/atoms/BookButton";
import { CarItemProps } from "../components/organisms/CarItem";

const CarDetails = () => {
  const route: any = useRoute();
  const id = route.params && route.params.id;

  const displayedCars = carsData.filter((carItem) => {
    return carItem.id == id;
  });

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
