import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import colors from "../../constants/colors";

const BookButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.bottomButton}
      onPress={() => navigation.navigate("Favorites")}
    >
      <Text style={styles.buttonText}>Book Now</Text>
    </TouchableOpacity>
  );
};

export default BookButton;

const styles = StyleSheet.create({
  bottomButton: {
    backgroundColor: colors.secondary,
    alignItems: "center",
    borderRadius: 8,
    width: "100%",
    marginTop: 10,
  },
  buttonText: {
    padding: 18,
    color: "white",
    fontWeight: "700",
    fontSize: 20,
  },
});
