import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Control, Controller } from "react-hook-form";
import { useState } from "react";
import FilesModal from "../organisms/FilesModal";
import * as ImagePicker from "expo-image-picker";

interface ControlledPhotoInputProps {
  name: string;
  control: Control<any>;
  rules?: object;
}

const ControlledPhotoInput = ({
  name,
  control,
  rules,
}: ControlledPhotoInputProps) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal((prev) => !prev);

  const selectImage = async (
    useLibrary: boolean,
    onChange: (value: string) => void
  ) => {
    let result;
    const options: ImagePicker.ImagePickerOptions = {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    };

    try {
      if (useLibrary) {
        result = await ImagePicker.launchImageLibraryAsync(options);
      } else {
        await ImagePicker.requestCameraPermissionsAsync();
        result = await ImagePicker.launchCameraAsync(options);
      }

      if (!result.canceled) {
        onChange(result.assets[0].uri);
      }
    } catch (error) {
      console.error("Error selecting image:", error);
    }

    toggleModal();
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <View style={styles.container}>
          <TouchableOpacity
            style={[styles.photoButton, error && { borderColor: "#EE374A" }]}
            onPress={toggleModal}
          >
            {value ? (
              <Image source={{ uri: value }} style={styles.preview} />
            ) : (
              <Text style={styles.buttonText}>Upload Photo</Text>
            )}
          </TouchableOpacity>
          {error && <Text style={styles.errorText}>{error.message}</Text>}
          <FilesModal
            showModal={showModal}
            toggleModal={toggleModal}
            title="Select Photo"
            selectImage={(useLibrary) => selectImage(useLibrary, onChange)}
          />
        </View>
      )}
    />
  );
};

export default ControlledPhotoInput;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  photoButton: {
    height: 150,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "#e0e0e0",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  preview: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  buttonText: {
    fontWeight: "600",
  },
  errorText: {
    color: "#FF0D10",
    fontSize: 12,
  },
});
