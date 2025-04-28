import { SafeAreaView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "../constants/types";
import ProfileForm, {
  ProfileFormData,
} from "../components/organisms/ProfileForm";
import { useCreateUserMutation } from "../redux/services/users/api";
import { useSendVerificationCodeMutation } from "../redux/services/auth/api";

const SignUp = () => {
  const navigation = useNavigation<NavigationType>();

  const [addUser] = useCreateUserMutation();
  const [sendVerification] = useSendVerificationCodeMutation();

  const handleSubmit = async (data: ProfileFormData) => {
    try {
      await addUser(data).unwrap();

      const response = await sendVerification({ email: data.email }).unwrap();
      console.log(response);

      navigation.replace("Verify Email", { email: data.email });
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoginPress = () => {
    navigation.replace("Login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ProfileForm
        onSubmit={handleSubmit}
        submitButtonText="Sign Up"
        onLoginPress={handleLoginPress}
      />
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
});
