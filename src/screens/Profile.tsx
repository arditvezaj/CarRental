import { SafeAreaView, View, Text, Image, StyleSheet } from "react-native";

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
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Image style={styles.image} source={require("@/assets/logo.png")} />
        {userDetails.map((detail) => (
          <View key={detail.label} style={styles.item}>
            <Text style={styles.label}>{detail.label}:</Text>
            <Text style={styles.value}>{detail.value}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 20,
    margin: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
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
