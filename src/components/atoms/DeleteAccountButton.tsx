import { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "@/src/constants/colors";

import ModalContainer from "../organisms/ModalContainer";

import { useGetUserQuery } from "@/src/redux/services/auth/api";
import { useDeleteUserMutation } from "@/src/redux/services/users/api";

const DeleteAccountButton = () => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteAccount] = useDeleteUserMutation();
  const { data: user } = useGetUserQuery({});

  const toggleDeleteModal = () => {
    setDeleteModal((prevState: boolean) => !prevState);
  };

  const deleteAccountHandler = async () => {
    toggleDeleteModal();

    await deleteAccount(user.id).unwrap();
  };
  return (
    <>
      <TouchableOpacity onPress={toggleDeleteModal} style={styles.container}>
        <FontAwesome5 name="trash-alt" size={20} color="#fff" />
        <Text style={styles.text}>Delete account</Text>
      </TouchableOpacity>
      <ModalContainer
        title="Are you sure you want to permanently delete your account?"
        showModal={deleteModal}
        toggleModal={toggleDeleteModal}
        hasXButton={false}
      >
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={toggleDeleteModal}
            style={[styles.button, styles.closeButton]}
          >
            <Text style={[styles.buttonText, styles.closeText]}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={deleteAccountHandler}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </ModalContainer>
    </>
  );
};

export default DeleteAccountButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 45,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#A52A2A",
    borderRadius: 10,
    paddingVertical: 13,
    marginTop: 20,
    marginBottom: 10,
  },
  buttonsContainer: {
    marginTop: 20,
    flexDirection: "row",
    gap: 12,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: colors.errorBorder,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
  },
  closeButton: {
    backgroundColor: colors.borderColor,
  },
  closeText: {
    color: "#00000",
  },
});
