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

interface userDetailsProps {
  label: string;
  value: string;
}

const userDetails: userDetailsProps[] = [
  {
    label: "Name",
    value: "John Doe",
  },
  {
    label: "Email",
    value: "john@doe.com",
  },
  {
    label: "Phone",
    value: "+1234567890",
  },
  { label: "Birthday", value: "01/01/1990" },
  {
    label: "Address",
    value: "Some Street",
  },
  {
    label: "City",
    value: "New York",
  },
  {
    label: "State",
    value: "US",
  },
  {
    label: "Zip",
    value: "12345",
  },
];

const Profile = () => {
  const navigation = useNavigation<NavigationType>();
  const editProfileHandler = () => {
    navigation.navigate("Edit Profile");
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
        {userDetails.map((detail) => (
          <View key={detail.label} style={styles.item}>
            <Text style={styles.label}>{detail.label}:</Text>
            <Text style={styles.value}>{detail.value}</Text>
          </View>
        ))}
      </View>
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
