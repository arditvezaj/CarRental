import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Control, Controller, Path } from "react-hook-form";
import { useState } from "react";
import FilesModal from "../organisms/FilesModal";
import * as ImagePicker from "expo-image-picker";
import colors from "@/src/constants/colors";

interface ControlledPhotoInputProps<T extends Record<string, string>> {
  name: Path<T>;
  control: Control<any>;
  rules?: Partial<{
    required: string | boolean;
    pattern: { value: RegExp; message: string };
    validate: (value: string) => string | boolean;
  }>;
}

const ControlledPhotoInput = <T extends Record<string, string>>({
  name,
  control,
  rules,
}: ControlledPhotoInputProps<T>) => {
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
            style={[
              styles.photoButton,
              error && { borderColor: colors.errorBorder },
            ]}
            onPress={toggleModal}
          >
            {value ? (
              <Image source={value} style={styles.preview} />
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
    borderColor: colors.borderColor,
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
    color: colors.errorText,
    fontSize: 12,
    marginTop: 5,
  },
});
