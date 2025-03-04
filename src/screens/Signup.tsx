import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import ControlledInput from "../components/atoms/ControlledInput";
import ControlledPhotoInput from "../components/atoms/ControlledPhotoInput";
import colors from "../constants/colors";
import { NavigationType } from "../constants/types";

interface SignUpForm {
  name: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
  photo: string;
}

const SignUp = () => {
  const navigation = useNavigation<NavigationType>();

  const { control, handleSubmit, reset, watch, setValue } = useForm<SignUpForm>(
    {
      defaultValues: {
        name: "",
        phoneNumber: "",
        email: "",
        password: "",
        confirmPassword: "",
        photo: "",
      },
    }
  );

  const loginHandler = () => {
    reset();
    navigation.replace("Login");
  };

  const onSubmit = (data: SignUpForm) => {
    console.log(data);
    reset();
    navigation.replace("Home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sign Up with your credentials</Text>
      <ScrollView
        style={styles.innerContainer}
        showsVerticalScrollIndicator={false}
      >
        <ControlledInput
          control={control}
          name="name"
          label="Full Name"
          placeholder="Full Name"
          rules={{
            required: "Full Name is required",
          }}
        />
        <ControlledInput
          control={control}
          name="phoneNumber"
          label="Phone Number"
          placeholder="Phone Number"
          textContentType="telephoneNumber"
          keyboardType="phone-pad"
          rules={{
            required: "Phone Number is required",
          }}
        />
        <ControlledInput
          control={control}
          name="email"
          label="Email"
          placeholder="Email"
          textContentType="emailAddress"
          rules={{
            required: "Year is required",
          }}
        />
        <ControlledInput
          control={control}
          name="password"
          label="Password"
          placeholder="Password"
          textContentType="password"
          secureTextEntry
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          }}
        />
        <ControlledInput
          control={control}
          name="confirmPassword"
          label="Confirm Password"
          placeholder="Confirm Password"
          textContentType="password"
          secureTextEntry
          rules={{
            required: "Confirm Password is required",
            minLength: {
              value: 8,
              message: "Confirm Password must be at least 8 characters",
            },
          }}
        />
        <ControlledPhotoInput
          control={control}
          name="photo"
          rules={{
            required: "Please upload a photo",
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.buttonText}>SignUp</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkButton} onPress={loginHandler}>
          <Text style={styles.link}>Already have an account? Login</Text>
        </TouchableOpacity>
      </ScrollView>
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
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
    marginVertical: 20,
    textAlign: "center",
  },
  innerContainer: {},
  button: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.secondary,
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
  },
  linkButton: { paddingBottom: 30 },
  link: {
    color: colors.secondary,
    textAlign: "center",
    fontWeight: "500",
  },
});
