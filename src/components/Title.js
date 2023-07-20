import { View, Text, StyleSheet } from "react-native";

const Title = ({ name }) => {
  return <Text style={styles.title}>{name}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    padding: 15,
    fontWeight: 700,
    color: "orange"
  },
});
