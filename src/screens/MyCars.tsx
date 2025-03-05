import { Text, FlatList, SafeAreaView, StyleSheet } from "react-native";
import { carsData } from "../data/dummy-data";
import CarItem, { CarItemProps } from "../components/organisms/CarItem";

const MyCars = () => {
  const renderItem = ({ item }: CarItemProps) => {
    return <CarItem item={item} fromMyCars />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={carsData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
        ListEmptyComponent={<Text>No cars found</Text>}
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
