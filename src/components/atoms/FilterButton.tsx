import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import colors from "@/src/constants/colors";
import { NavigationType } from "@/src/constants/types";

const FilterButton = () => {
  const navigation = useNavigation<NavigationType>();

  const filterHandler = () => {
    navigation.navigate("Filter Cars");
  };

  return (
    <TouchableOpacity style={styles.container} onPress={filterHandler}>
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
