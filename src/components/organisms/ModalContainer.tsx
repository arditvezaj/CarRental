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
  style?: ViewStyle;
  hasXButton?: boolean;
}

const ModalContainer = ({
  showModal,
  toggleModal,
  title,
  children,
  style,
  hasXButton = true,
}: Props) => {
  return (
    <Modal transparent={true} visible={showModal} onRequestClose={toggleModal}>
      <Pressable onPress={toggleModal} style={[styles.centeredView, style]}>
        <View style={styles.modalView}>
          <View style={styles.header}>
            {hasXButton && <View style={styles.xButtonContainer} />}
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{title}</Text>
            </View>
            {hasXButton && (
              <View style={styles.xButtonContainer}>
                <AntDesign
                  name="closecircleo"
                  size={24}
                  onPress={toggleModal}
                />
              </View>
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
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  modalView: {
    width: "90%",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginHorizontal: 20,
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
    alignItems: "center",
    marginBottom: 15,
  },
  xButtonContainer: {
    width: 24,
    height: 24,
    justifyContent: "center",
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
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
