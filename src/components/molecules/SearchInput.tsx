import { Text, StyleSheet, Pressable } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";

import { MaterialIcons } from "@expo/vector-icons";

interface SearchInputProps {
  text: string;
  setText: (text: string) => void;
  placeholder: string;
}

const SearchInput = ({ text, setText, placeholder }: SearchInputProps) => {
  const navigation =
    useNavigation<NavigationProp<{ "Search Cars": undefined }>>();

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("Search Cars")}
    >
      <MaterialIcons name="search" size={24} color="#B3B3B3" />
      <Text style={styles.text}>Filter cars</Text>
      {/* <TextInput
        value={text}
        onChangeText={(e) => setText(e)}
        placeholder={placeholder}
        placeholderTextColor="#808080"
        style={styles.textInput}
      /> */}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginHorizontal: 10,
    marginTop: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#E6E8EC",
    borderRadius: 12,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 7,
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
