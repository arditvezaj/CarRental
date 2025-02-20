import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { useNavigation, NavigationProp, NavigationContainerProps } from "@react-navigation/native";
import colors from "../constants/colors";

const SignUp = () => {
  const navigation = useNavigation<NavigationProp<{ Home: undefined }>>();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>SignUp with your credentials</Text>
      <View style={styles.innerContainer}>
        <Text style={styles.label}>Email:</Text>
        <TextInput style={styles.input} textContentType="emailAddress" />
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          textContentType="password"
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>SignUp</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "white",
    marginTop: 70,
    textAlign: "center",
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 140,
  },
  label: { color: "white", fontSize: 18, fontWeight: "700" },
  input: {
    width: "100%",
    color: "#000",
    backgroundColor: "white",
    height: 44,
    fontSize: 18,
    marginBottom: 30,
    marginTop: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: "#E6E8EC",
    borderRadius: 8,
  },
  button: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.secondary,
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
  },
});
