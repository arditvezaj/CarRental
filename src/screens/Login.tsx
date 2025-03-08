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
import colors from "../constants/colors";
import { NavigationType } from "../constants/types";
import ControlledInput from "../components/atoms/ControlledInput";
import { useLoginMutation } from "../redux/services/auth/api";

type SignInForm = {
  email: string;
  password: string;
};

const Login = () => {
  const navigation = useNavigation<NavigationType>();

  const [login] = useLoginMutation();
  const { control, handleSubmit, reset } = useForm<SignInForm>();
  const [hidePass, setHidePass] = useState(true);

  const togglePassword = () => setHidePass((prevState) => !prevState);

  const signupHandler = () => {
    reset();
    navigation.replace("SignUp");
  };

  const onSubmit = async (data: SignInForm) => {
    try {
      const response = await login({
        email: "arditvezaj@gmail.com",
        password: "password",
      }).unwrap();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    reset();
    navigation.replace("Home");
  };

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
            togglePassword={togglePassword}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginTop: 15 }} onPress={signupHandler}>
            <Text style={styles.link}>Do not have an account? Sign Up</Text>
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
  link: {
    color: colors.secondary,
    textAlign: "center",
    fontWeight: "500",
  },
});
