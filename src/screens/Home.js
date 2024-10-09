import { View, Text, StyleSheet, FlatList } from "react-native";
import { carsData } from "../data/dummy-data";
import CarItem from "../components/organisms/CarItem";
import SearchInput from "../components/molecules/SearchInput";

const Home = () => {
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
    <View style={styles.container}>
      <SearchInput />
      <FlatList
        data={carsData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
        LisEmptyComponent={<Text>No cars found</Text>}
        contentContainerStyle={styles.contentList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  contentList: {
    paddingBottom: 60,
  },
});

export default Home;
