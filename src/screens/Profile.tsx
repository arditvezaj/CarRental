import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "../constants/types";
import { FontAwesome6 } from "@expo/vector-icons";
import DeleteAccountButton from "../components/atoms/DeleteAccountButton";
import * as SecureStore from "expo-secure-store";
import { useAppDispatch } from "../redux/hooks";
import { useGetUserQuery } from "../redux/services/auth/api";
import { useLogoutMutation } from "../redux/services/auth/api";
import { logoutAuth, setIsAuthenticated } from "../redux/modules/auth/slice";
import formatDate from "../utils/formatDate";
interface userDetailsProps {
  label: string;
  value: string;
}

const Profile = () => {
  const navigation = useNavigation<NavigationType>();
  const dispatch = useAppDispatch();
  const editProfileHandler = () => {
    navigation.navigate("Edit Profile");
  };
  const [logout] = useLogoutMutation();

  const { data: profile, isLoading } = useGetUserQuery({});

  if (!profile) return null;

  const { name, company, email, phoneNumber, birthDate, role, address } =
    profile;

  const userDetails: userDetailsProps[] = [
    {
      label: "Name",
      value: name,
    },
    {
      label: "Email",
      value: email,
    },
    {
      label: "Phone",
      value: phoneNumber,
    },
    { label: "Birthdate", value: birthDate ? formatDate(birthDate) : "" },
    {
      label: "Address",
      value: address,
    },
  ];

  const logoutHandler = async () => {
    try {
      dispatch(logoutAuth());
      dispatch(setIsAuthenticated(false));
      await logout({});
      await SecureStore.deleteItemAsync("access_token");
      await SecureStore.deleteItemAsync("refresh_token");

      navigation.replace("LoginFlow");
    } catch (error) {
      return;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <Image style={styles.image} source={require("@/assets/logo.png")} />
          <TouchableOpacity onPress={editProfileHandler}>
            <FontAwesome6 name="edit" size={24} color="green" />
          </TouchableOpacity>
        </View>
        {role === "Company" && (
          <View style={styles.item}>
            <Text style={styles.label}>Company:</Text>
            <Text style={styles.value}>{company}</Text>
          </View>
        )}
        {userDetails.map((detail: userDetailsProps) => (
          <View key={detail.label} style={styles.item}>
            <Text style={styles.label}>{detail.label}:</Text>
            <Text style={styles.value}>{detail.value}</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity
        onPress={logoutHandler}
        style={[styles.innerContainer, { marginTop: 20 }]}
      >
        <Text style={styles.label}>Logout</Text>
      </TouchableOpacity>
      <DeleteAccountButton />
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },
  innerContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 10,
  },
  image: {
    width: 200,
    height: 100,
    objectFit: "contain",
  },
  item: {
    width: "45%",
  },
  label: {
    fontSize: 14,
  },
  value: {
    fontSize: 16,
    fontWeight: "600",
  },
});
