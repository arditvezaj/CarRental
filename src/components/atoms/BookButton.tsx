import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import colors from "../../constants/colors";

const BookButton = () => {
  const navigation = useNavigation<NavigationProp<{ Favorites: undefined }>>();

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate("Favorites")}
    >
      <Text style={styles.buttonText}>Book Now</Text>
    </TouchableOpacity>
  );
};

export default BookButton;

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    backgroundColor: colors.secondary,
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    padding: 12,
    color: "white",
    fontWeight: "700",
    fontSize: 18,
  },
});
