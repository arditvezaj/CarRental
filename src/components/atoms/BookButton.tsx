import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import colors from "../../constants/colors";
import { NavigationType } from "@/src/constants/types";

const BookButton = () => {
  const navigation = useNavigation<NavigationType>();

  const bookHandler = () => {
    navigation.navigate("Favorites");
  };

  return (
    <TouchableOpacity style={styles.button} onPress={bookHandler}>
      <Text style={styles.buttonText}>Book Now</Text>
    </TouchableOpacity>
  );
};

export default BookButton;

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 25,
    width: "100%",
    backgroundColor: colors.secondary,
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    padding: 12,
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
  },
});
