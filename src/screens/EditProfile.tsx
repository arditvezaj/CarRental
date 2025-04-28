import { StyleSheet, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "../constants/types";
import ProfileForm, {
  ProfileFormData,
} from "../components/organisms/ProfileForm";
import { useGetUserQuery } from "../redux/services/auth/api";
import { useUpdateUserMutation } from "../redux/services/users/api";

const EditProfile = () => {
  const navigation = useNavigation<NavigationType>();
  const { data: profile } = useGetUserQuery({});
  const [updateProfile] = useUpdateUserMutation();

  const handleSubmit = async (data: ProfileFormData) => {
    try {
      await updateProfile({ id: profile.id, ...data }).unwrap();

      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ProfileForm
        initialValues={profile}
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
