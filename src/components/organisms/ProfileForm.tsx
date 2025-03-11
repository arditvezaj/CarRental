import { useState } from "react";
import { Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useForm } from "react-hook-form";
import ControlledInput from "../atoms/ControlledInput";
import ControlledPhotoInput from "../atoms/ControlledPhotoInput";
import colors from "../../constants/colors";
import ControlledDateTimePicker from "../atoms/ControlledDateTimePicker";
import DropdownPicker from "../molecules/DropdownPicker";
import ControlledDropdown from "../atoms/ControlledDropdown";

export interface ProfileFormData {
  name: string;
  company: string;
  phoneNumber: string;
  email: string;
  password?: string;
  confirmPassword?: string;
  imageUrl: string;
  birthDate: Date | null;
  role: string;
  address: string;
}

interface ProfileFormProps {
  initialValues?: Partial<ProfileFormData>;
  onSubmit: (data: ProfileFormData) => void;
  submitButtonText: string;
  isEditMode?: boolean;
  onLoginPress?: () => void;
}

const roles = [{ name: "Company" }, { name: "User" }];

const ProfileForm = ({
  initialValues,
  onSubmit,
  submitButtonText,
  isEditMode = false,
  onLoginPress,
}: ProfileFormProps) => {
  const { control, handleSubmit, watch } = useForm<ProfileFormData>({
    defaultValues: {
      name: initialValues?.name || "",
      phoneNumber: initialValues?.phoneNumber || "",
      email: initialValues?.email || "",
      password: "",
      imageUrl: initialValues?.imageUrl || "",
      birthDate: initialValues?.birthDate || null,
      company: initialValues?.company || "",
      address: initialValues?.address || "",
      role: initialValues?.role || "",
    },
  });
  const password = watch("password");
  const isCompany = watch("role") === "Company";

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {isEditMode && (
        <ControlledDropdown
          control={control}
          name="role"
          label="Role"
          data={roles}
          placeholder="Select role"
          rules={{
            required: "Role is required",
          }}
        />
      )}
      {/* {isCompany && ( */}
      <ControlledInput
        control={control}
        name="company"
        label="Company Name"
        placeholder="Company Name"
        rules={{
          required: "Company Name is required",
        }}
      />
      {/* )} */}
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
      {isCompany && (
        <ControlledInput
          control={control}
          name="address"
          label="Address"
          placeholder="Nr. 123, Street, City"
          rules={{
            required: "Address is required",
          }}
        />
      )}
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
              validate: (value: string) =>
                value === password || "Passwords do not match",
            }}
          />
        </>
      )}
      <ControlledPhotoInput
        control={control}
        name="imageUrl"
        label="Profile Picture"
        rules={{
          required: "Please upload a photo",
        }}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>{submitButtonText}</Text>
      </TouchableOpacity>
      {onLoginPress && (
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
    paddingVertical: 20,
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
    marginBottom: 45,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
  },
  linkButton: {
    paddingBottom: 50,
  },
  link: {
    color: colors.secondary,
    textAlign: "center",
    fontWeight: "500",
  },
});
