import { StyleSheet, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "../constants/types";
import ProfileForm, {
  ProfileFormData,
} from "../components/organisms/ProfileForm";

const EditProfile = () => {
  const navigation = useNavigation<NavigationType>();

  const mockUserData: Partial<ProfileFormData> = {
    name: "John Doe",
    phoneNumber: "+1234567890",
    email: "john@example.com",
    imageUrl: require("@/assets/logo.png"),
    birthDate: new Date("1990-01-01"),
  };

  const handleSubmit = (data: ProfileFormData) => {
    console.log("Updated profile data:", data);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ProfileForm
        initialValues={mockUserData}
        onSubmit={handleSubmit}
        submitButtonText="Save Changes"
        isEditMode
      />
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
});
