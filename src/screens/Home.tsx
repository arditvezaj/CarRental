import { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import CarItem from "../components/organisms/CarItem";
import SearchInput from "../components/molecules/SearchInput";
import FilterButton from "../components/atoms/FilterButton";
import PremiumCars from "../components/organisms/PremiumCars";
import { CarFormData, CarItemProps } from "../constants/types";
import useDebounce from "../hooks/useDebounce";
import { useGetCarsQuery } from "../redux/services/cars/api";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Home = () => {
  const [search, setSearch] = useState("");
  const debounceSearch = useDebounce(search.toLowerCase(), 500);

  const { data: cars } = useGetCarsQuery(debounceSearch);

  const make = useSelector((state: RootState) => state.filtersReducer.make);
  const model = useSelector((state: RootState) => state.filtersReducer.model);
  const priceFrom = useSelector(
    (state: RootState) => state.filtersReducer.priceFrom
  );
  const priceTo = useSelector(
    (state: RootState) => state.filtersReducer.priceTo
  );
  const yearFrom = useSelector(
    (state: RootState) => state.filtersReducer.yearFrom
  );
  const yearTo = useSelector((state: RootState) => state.filtersReducer.yearTo);
  const fuel = useSelector((state: RootState) => state.filtersReducer.fuel);
  const transmission = useSelector(
    (state: RootState) => state.filtersReducer.transmission
  );

  const carsList = cars?.filter((car: CarFormData) => {
    if (make && make !== "All" && make !== car.make) return false;
    if (model && model !== "All" && model !== car.model) return false;
    if (priceFrom && priceFrom !== "" && Number(car.price) < Number(priceFrom))
      return false;
    if (priceTo && priceTo !== "" && Number(car.price) > Number(priceTo))
      return false;
    if (yearFrom && yearFrom !== "" && car.firstRegistration < yearFrom) {
      return false;
    }
    if (yearTo && yearTo !== "" && car.firstRegistration > yearTo) return false;
    if (fuel && fuel !== "All" && fuel !== car.fuel) return false;
    if (
      transmission &&
      transmission !== "All" &&
      transmission !== car.transmission
    ) {
      return false;
    }

    return true;
  });

  const renderItem = ({ item }: CarItemProps) => {
    return <CarItem item={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchInput text={search} setText={setSearch} />
        <FilterButton />
      </View>
      <FlatList
        data={carsList}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
        ListHeaderComponent={
          <>
            <PremiumCars />
            <Text style={styles.title}>Popular Cars</Text>
          </>
        }
        ListEmptyComponent={<Text>No cars found.</Text>}
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
    fontSize: 16,
    fontWeight: "600",
  },
  contentList: {
    paddingBottom: 60,
  },
});

export default Home;
