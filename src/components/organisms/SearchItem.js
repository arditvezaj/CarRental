import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../../constants/colors";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SearchItem = ({ item }) => {
  const { name, path, value } = item;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(path)}
    >
      <Text style={styles.label}>{name}</Text>
      <View style={styles.valueContainer}>
        <Text style={styles.value}>{value}</Text>
        <FontAwesome name="chevron-right" size={15} color={colors.secondary} />
      </View>
    </TouchableOpacity>
  );
};

export default SearchItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E6E8EC",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  valueContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  value: {
    color: colors.secondary,
    fontSize: 17,
  },
});
