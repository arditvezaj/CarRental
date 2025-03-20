import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Image,
  Keyboard,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from "react-native";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch } from "@/src/redux/hooks";
import useAuth from "@/src/hooks/useAuth";
import * as SecureStore from "expo-secure-store";
import colors from "../constants/colors";
import { NavigationType } from "../constants/types";
import ControlledInput from "../components/atoms/ControlledInput";
import {
  useLoginMutation,
  useLogoutMutation,
} from "../redux/services/auth/api";
import {
  loginAuth,
  logoutAuth,
  setIsAuthenticated,
} from "../redux/modules/auth/slice";
import { apiSlice } from "../redux/services/api-slice";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationType>();
  const { isAuth, isCheckingAuth } = useAuth();
  const [isLoadingLogin, setIsLoadingLogin] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [hidePass, setHidePass] = useState(true);
  const [login] = useLoginMutation();
  const [logout] = useLogoutMutation();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const togglePassword = () => setHidePass((prevState) => !prevState);

  const signupHandler = () => {
    reset();
    navigation.replace("SignUp");
  };

  const onSubmit: SubmitHandler<FieldValues> = async ({ email, password }) => {
    setIsLoadingLogin(true);
    setLoginError(null);
    try {
      const response = await login({
        email: "arditvezaj11@gmail.com",
        password: "12345678",
      }).unwrap();
      dispatch(loginAuth({ user: response }));
      dispatch(apiSlice.util.invalidateTags(["UserProfile"]));

      await SecureStore.setItemAsync("access_token", response.access_token);
      await SecureStore.setItemAsync("refresh_token", response.refresh_token);
      navigation.replace("Home");
    } catch (error: any) {
      if (error.status === 404) {
        setLoginError("User with this email does not exist.");
      } else if (error.status === 401) {
        dispatch(logoutAuth());
        dispatch(setIsAuthenticated(false));
        await logout({});
        await SecureStore.deleteItemAsync("access_token");
        await SecureStore.deleteItemAsync("refresh_token");
        setLoginError("Password is incorrect.");
      } else {
        setLoginError("Something went wrong. Please try again.");
      }
    } finally {
      setIsLoadingLogin(false);
    }
  };

  return isCheckingAuth || isAuth ? (
    <View style={styles.loadingContainer}>
      <Image source={require("@/assets/logo.png")} style={styles.loadingLogo} />
      <ActivityIndicator size="large" color="#00000" />
    </View>
  ) : (
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
          {errors.email && <Text style={styles.errorText}>Email ungültig</Text>}
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
          {errors.password && (
            <Text style={styles.errorText}>Passwort ungültig</Text>
          )}
          {loginError && <Text style={styles.errorText}>{loginError}</Text>}
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
  loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  loadingLogo: {
    height: 70,
    aspectRatio: 16 / 5,
    marginBottom: 30,
    alignSelf: "center",
  },
  errorText: {
    color: colors.errorText,
    fontSize: 13,
  },
});
