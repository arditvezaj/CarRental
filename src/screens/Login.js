import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email:</Text>
      <TextInput style={styles.input} />
      <Text style={styles.label}>Password:</Text>
      <TextInput style={styles.input} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {},
  label: { color: "white", fontSize: 18 },
  input: {
    color: "white",
    height: 40,
    width: 250,
    fontSize: 18,
    marginBottom: 30,
    marginTop: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 6,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    color: "black",
    padding: 10,
    borderRadius: 6,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 800,
  },
});
