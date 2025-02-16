import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Image,
} from "react-native";
import colors from "../constants/colors";

const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}>Sign In</Text>
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
          onPress={() => navigation.replace("Home")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  logo: {
    width: "90%",
    height: 100,
    alignSelf: "center",
    marginTop: 30,
    objectFit: "cover",
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#fff",
    marginTop: 70,
    textAlign: "center",
  },
  innerContainer: {
    flex: 1,
    marginTop: 50,
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
