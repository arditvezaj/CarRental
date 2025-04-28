import colors from "@/src/constants/colors";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  CarFormData,
  CarItemProps,
  NavigationType,
} from "@/src/constants/types";
import { useGetCarsQuery } from "@/src/redux/services/cars/api";

const PremiumCars = () => {
  const navigation = useNavigation<NavigationType>();
  const { data: cars } = useGetCarsQuery({});
  if (!cars) return null;

  const premiumCarsList = cars.filter(
    (carItem: CarFormData) => carItem.isPremium
  );

  const renderItem = ({ item }: CarItemProps) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("Car Details", { id: item.id })}
      >
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

  return premiumCarsList.length > 0 ? (
    <View style={styles.container}>
      <Text style={styles.title}>Premium Cars</Text>
      <FlatList
        data={premiumCarsList}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={<Text>No cars found.</Text>}
        contentContainerStyle={{ gap: 2 }}
      />
    </View>
  ) : null;
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
