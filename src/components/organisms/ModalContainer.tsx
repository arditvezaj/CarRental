import {
  View,
  Text,
  Modal,
  StyleSheet,
  ViewStyle,
  Pressable,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { ReactNode } from "react";
import colors from "@/src/constants/colors";

interface Props {
  showModal: boolean;
  toggleModal: () => void;
  title: string;
  children: ReactNode;
  hasXButton?: boolean;
  style?: ViewStyle;
}

const ModalContainer = ({
  showModal,
  toggleModal,
  title,
  children,
  hasXButton = true,
  style,
}: Props) => {
  return (
    <Modal transparent={true} visible={showModal} onRequestClose={toggleModal}>
      <Pressable onPress={toggleModal} style={[styles.centeredView, style]}>
        <View style={styles.modalView}>
          <View style={styles.header}>
            {hasXButton && <View style={{ width: 24 }} />}
            <Text style={styles.title}>{title}</Text>
            {hasXButton && (
              <AntDesign name="closecircleo" size={24} onPress={toggleModal} />
            )}
          </View>
          <Pressable style={styles.buttonContainer}>{children}</Pressable>
        </View>
      </Pressable>
    </Modal>
  );
};

export default ModalContainer;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  modalView: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  buttonContainer: {
    flexGrow: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
