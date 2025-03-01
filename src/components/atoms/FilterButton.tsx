import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import colors from "@/src/constants/colors";

const FilterButton = () => {
  const navigation =
    useNavigation<NavigationProp<{ "Filter Cars": undefined }>>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Filter Cars")}
    >
      <Ionicons name="filter" size={22} color="#fff" />
    </TouchableOpacity>
  );
};

export default FilterButton;

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    backgroundColor: colors.secondary,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
