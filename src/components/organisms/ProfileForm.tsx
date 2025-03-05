import { Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useForm } from "react-hook-form";
import ControlledInput from "../atoms/ControlledInput";
import ControlledPhotoInput from "../atoms/ControlledPhotoInput";
import colors from "../../constants/colors";
import ControlledDateTimePicker from "../atoms/ControlledDateTimePicker";

export interface ProfileFormData {
  name: string;
  phoneNumber: string;
  email: string;
  password?: string;
  confirmPassword?: string;
  imageUrl: string;
  birthDate: Date | null;
}

interface ProfileFormProps {
  initialValues?: Partial<ProfileFormData>;
  onSubmit: (data: ProfileFormData) => void;
  submitButtonText: string;
  isEditMode?: boolean;
  showLoginLink?: boolean;
  onLoginPress?: () => void;
}

const ProfileForm = ({
  initialValues,
  onSubmit,
  submitButtonText,
  isEditMode = false,
  showLoginLink = false,
  onLoginPress,
}: ProfileFormProps) => {
  const { control, handleSubmit, reset } = useForm<ProfileFormData>({
    defaultValues: {
      name: initialValues?.name || "",
      phoneNumber: initialValues?.phoneNumber || "",
      email: initialValues?.email || "",
      password: "",
      confirmPassword: "",
      imageUrl: initialValues?.imageUrl || "",
      birthDate: initialValues?.birthDate || null,
    },
  });

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>
        {isEditMode ? "Edit your Profile" : "Sign Up with your credentials"}
      </Text>
      <ControlledInput
        control={control}
        name="name"
        label="Full Name"
        placeholder="Full Name"
        rules={{
          required: "Full Name is required",
        }}
      />
      <ControlledInput
        control={control}
        name="phoneNumber"
        label="Phone Number"
        placeholder="Phone Number"
        textContentType="telephoneNumber"
        keyboardType="phone-pad"
        rules={{
          required: "Phone Number is required",
        }}
      />
      <ControlledDateTimePicker
        name="birthDate"
        label="Birth Date"
        control={control}
        rules={{
          required: "Birth Date is required",
        }}
      />
      <ControlledInput
        control={control}
        name="email"
        label="Email"
        placeholder="Email"
        textContentType="emailAddress"
        rules={{
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        }}
      />
      {!isEditMode && (
        <>
          <ControlledInput
            control={control}
            name="password"
            label="Password"
            placeholder="Password"
            textContentType="password"
            secureTextEntry
            rules={{
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            }}
          />
          <ControlledInput
            control={control}
            name="confirmPassword"
            label="Confirm Password"
            placeholder="Confirm Password"
            textContentType="password"
            secureTextEntry
            rules={{
              required: "Confirm Password is required",
              minLength: {
                value: 8,
                message: "Confirm Password must be at least 8 characters",
              },
            }}
          />
        </>
      )}
      <ControlledPhotoInput
        control={control}
        name="imageUrl"
        rules={{
          required: "Please upload a photo",
        }}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>{submitButtonText}</Text>
      </TouchableOpacity>
      {showLoginLink && onLoginPress && (
        <TouchableOpacity style={styles.linkButton} onPress={onLoginPress}>
          <Text style={styles.link}>Already have an account? Login</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

export default ProfileForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
    marginTop: 15,
    marginBottom: 10,
    textAlign: "center",
  },
  button: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.secondary,
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
  },
  linkButton: {
    paddingBottom: 30,
  },
  link: {
    color: colors.secondary,
    textAlign: "center",
    fontWeight: "500",
  },
});
