import { SafeAreaView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "../constants/types";
import ProfileForm, { ProfileFormData } from "../components/organisms/ProfileForm";

const SignUp = () => {
  const navigation = useNavigation<NavigationType>();

  const handleSubmit = (data: ProfileFormData) => {
    console.log(data);
    navigation.replace("Home");
  };

  const handleLoginPress = () => {
    navigation.replace("Login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ProfileForm
        onSubmit={handleSubmit}
        submitButtonText="Sign Up"
        showLoginLink
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
