import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { Feather, FontAwesome5 } from "@expo/vector-icons";

import ModalContainer from "./ModalContainer";

interface Props {
  showModal: boolean;
  toggleModal: () => void;
  title: string;
  selectImage: (bool: boolean) => void;
}

const FilesModal = ({ showModal, toggleModal, title, selectImage }: Props) => {
  return (
    <ModalContainer
      showModal={showModal}
      toggleModal={toggleModal}
      title={title}
    >
      <View style={styles.dropdownMenu}>
        {["Camera", "Gallery"].map((data: string, index) => (
          <TouchableOpacity
            key={index}
            style={styles.dropdownItem}
            onPress={() => selectImage(index === 0 ? false : true)}
          >
            {index === 0 ? (
              <Feather name="camera" size={35} />
            ) : (
              <FontAwesome5 name="images" size={35} />
            )}
            <Text style={styles.dropdownText}>{data}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ModalContainer>
  );
};

export default FilesModal;

const styles = StyleSheet.create({
  dropdownMenu: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    paddingVertical: 10,
  },
  dropdownItem: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    height: 100,
    width: 100,
    borderRadius: 8,
    backgroundColor: "#f5f5f5",
  },
  dropdownText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#000",
  },
});
