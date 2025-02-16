import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

const InnerSearchItem = ({ name, value, setState }) => {
  const navigation = useNavigation();

  const pressHandler = () => {
    setState(name);
    navigation.navigate("Search Cars");
  };

  return (
    <TouchableOpacity style={styles.item} onPress={pressHandler}>
      <Text style={styles.label}>{name}</Text>
      {name == value && <Entypo name="check" size={22} color="#fff" />}
    </TouchableOpacity>
  );
};

export default InnerSearchItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#E6E8EC",
  },
  label: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
  },
});
