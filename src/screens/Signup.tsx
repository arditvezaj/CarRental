import { SafeAreaView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "../constants/types";
import ProfileForm, {
  ProfileFormData,
} from "../components/organisms/ProfileForm";
import { useCreateUserMutation } from "../redux/services/users/api";
import { useCreateCompanyMutation } from "../redux/services/companies/api";

const SignUp = () => {
  const navigation = useNavigation<NavigationType>();

  const [addUser] = useCreateUserMutation();
  const [addCompany] = useCreateCompanyMutation();

  const handleSubmit = async (data: ProfileFormData) => {
    try {
      data.role === "Company"
        ? await addCompany(data).unwrap()
        : await addUser(data).unwrap();

      navigation.replace("Home");
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
