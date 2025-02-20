import { View, StyleSheet, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface SearchInputProps {
  text: string;
  setText: (text: string) => void;
}

const SearchInput = ({ text, setText }: SearchInputProps) => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="search" size={24} color="#B3B3B3" />
      <TextInput
        value={text}
        onChangeText={(e) => setText(e)}
        placeholder="Search Cars"
        placeholderTextColor="#808080"
        style={styles.textInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderWidth: 1,
    borderColor: "#E6E8EC",
    borderRadius: 10,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 7,
    width: "86%",
  },
  text: {
    color: "#B3B3B3",
  },
  textInput: {
    width: "100%",
    fontSize: 14,
  },
});

export default SearchInput;
