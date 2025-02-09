import { View, TextInput, StyleSheet } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

const SearchInput = ({ text, setText, placeholder }) => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="search" size={24} color="#B3B3B3" />
      <TextInput
        value={text}
        onChangeText={(e) => setText(e)}
        placeholder={placeholder}
        placeholderTextColor="#808080"
        style={styles.textInput}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginHorizontal: 10,
    marginVertical: 15,
    borderWidth: 1,
    borderColor: "#E6E8EC",
    borderRadius: 12,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
  textInput: {
    width: "100%",
    fontSize: 14,
  },
});

export default SearchInput;
