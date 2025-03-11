import { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import CarItem from "../components/organisms/CarItem";
import SearchInput from "../components/molecules/SearchInput";
import FilterButton from "../components/atoms/FilterButton";
import PremiumCars from "../components/organisms/PremiumCars";
import { useGetCarsQuery } from "../redux/services/cars/api";
import { CarItemProps } from "../constants/types";

const Home = () => {
  const [text, setText] = useState("");

  const { data: cars } = useGetCarsQuery({ text });

  const renderItem = ({ item }: CarItemProps) => {
    return <CarItem item={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchInput text={text} setText={setText} />
        <FilterButton />
      </View>
      <FlatList
        data={cars}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
        ListHeaderComponent={
          <>
            <PremiumCars />
            <Text style={styles.title}>Popular Cars</Text>
          </>
        }
        ListEmptyComponent={<Text>No cars found</Text>}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 10,
    marginTop: 15,
  },
  title: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 16,
    fontWeight: "600",
  },
  contentList: {
    paddingBottom: 60,
  },
});

export default Home;
