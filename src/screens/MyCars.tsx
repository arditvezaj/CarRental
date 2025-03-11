import { Text, FlatList, SafeAreaView, StyleSheet } from "react-native";
import CarItem from "../components/organisms/CarItem";
import { CarFormData, CarItemProps } from "../constants/types";
import { useGetCarsQuery } from "../redux/services/cars/api";
import { useGetUserQuery } from "../redux/services/auth/api";

const MyCars = () => {
  const { data: cars } = useGetCarsQuery({});
  const { data: user } = useGetUserQuery({});

  if (!cars || !user) return null;

  const myCarsList = cars.filter((car: CarFormData) => {
    return car.company === user.company;
  });

  const renderItem = ({ item }: CarItemProps) => {
    return <CarItem item={item} fromMyCars />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={myCarsList}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
        ListEmptyComponent={<Text>No cars found.</Text>}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
      />
    </SafeAreaView>
  );
};

export default MyCars;

const styles = StyleSheet.create({
  container: { flex: 1, marginHorizontal: 5 },
  contentList: { marginTop: 10, paddingBottom: 60 },
});
