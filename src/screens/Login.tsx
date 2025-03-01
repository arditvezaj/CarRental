import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import colors from "../constants/colors";
import ControlledInput from "../components/atoms/ControlledInput";

type RootStackParamList = {
  Home: undefined;
};
type NavigationType = NativeStackNavigationProp<RootStackParamList, "Home">;

type SignInForm = {
  email: string;
  password: string;
};

const Login = () => {
  const navigation = useNavigation<NavigationType>();

  const { control, handleSubmit } = useForm<SignInForm>();
  const [hidePass, setHidePass] = useState(true);

  const onSignIn = handleSubmit(({ email, password }) => {});

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <Text style={styles.title}>Sign In</Text>
        <View style={styles.innerContainer}>
          <ControlledInput
            control={control}
            name="email"
            label="Email"
            placeholder="Email"
            textContentType="emailAddress"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            returnKeyType="next"
          />
          <ControlledInput
            name="password"
            label="Password"
            control={control}
            placeholder="Password"
            textContentType="password"
            autoCapitalize="none"
            returnKeyType="done"
            secureTextEntry={hidePass}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.replace("Home")}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    alignItems: "center",
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
    width: "90%",
  },
  button: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.secondary,
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
  },
});
