import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

interface InnerSearchItemProps {
  name: string;
  value: string;
  setState: (prevState: string) => void;
}

const InnerSearchItem = ({ name, value, setState }: InnerSearchItemProps) => {
  const navigation =
    useNavigation<NavigationProp<{ "Filter Cars": undefined }>>();

  const pressHandler = () => {
    setState(name);
    navigation.navigate("Filter Cars");
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
