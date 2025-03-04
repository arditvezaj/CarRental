import colors from "@/src/constants/colors";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

interface CarProps {
  item: { id: string; name: string; price: number };
}

const premiumCars = [
  { id: "1", name: "Mercedes Benz", price: 100 },
  {
    id: "2",
    name: "BMW",
    price: 120,
  },
  { id: "3", name: "Audi", price: 110 },
  { id: "4", name: "Tesla", price: 150 },
];

const PremiumCars = () => {
  const renderItem = ({ item }: CarProps) => {
    return (
      <TouchableOpacity style={styles.item}>
        <Image
          source={require("@/assets/images/cars/audi.jpeg")}
          style={styles.image}
        />
        <View style={styles.innerItem}>
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.text}>{item.price}/day</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Premium Cars</Text>
      <FlatList
        data={premiumCars}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={<Text>No cars found.</Text>}
        contentContainerStyle={{ gap: 2 }}
      />
    </View>
  );
};

export default PremiumCars;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  item: {
    flexDirection: "row",
    marginVertical: 5,
    width: 220,
    height: 110,
    borderRadius: 10,
  },
  innerItem: {
    padding: 10,
    width: "40%",
    justifyContent: "space-between",
    backgroundColor: colors.secondary,
    marginLeft: -15,
    borderRadius: 10,
    borderTopLeftRadius: 22,
    borderBottomLeftRadius: 0,
  },
  image: {
    width: "62%",
    height: "100%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
    color: "#fff",
  },
});
