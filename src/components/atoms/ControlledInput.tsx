import { useState, useCallback } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Controller } from "react-hook-form";
import { useRoute } from "@react-navigation/native";
import { ControlledInputProps } from "@/src/constants/types";
import colors from "@/src/constants/colors";
import { Ionicons } from "@expo/vector-icons";

const ControlledInput = <T extends Record<string, number>>({
  control,
  name,
  label,
  placeholder,
  secureTextEntry: initialSecureTextEntry = false,
  keyboardType = "default",
  rules,
  textContentType,
  autoCapitalize = "none",
  autoCorrect = false,
  autoComplete,
  returnKeyType = "next",
  maxLength,
}: ControlledInputProps<T>) => {
  const route = useRoute();
  const isLogin = route.name === "Login";
  const [secureTextEntry, setSecureTextEntry] = useState(
    initialSecureTextEntry
  );

  const isPassword = textContentType === "password" || initialSecureTextEntry;

  const togglePassword = useCallback(() => {
    setSecureTextEntry((prev) => !prev);
  }, []);

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <Text style={isLogin ? styles.labelLogin : styles.label}>
            {label}:
          </Text>
          <View
            style={[
              isPassword && styles.passwordInput,
              {
                marginTop: 6,
                marginBottom: error ? 2 : 12,
                borderColor: error ? colors.errorBorder : colors.borderColor,
              },
            ]}
          >
            <TextInput
              placeholder={placeholder}
              value={value}
              onChangeText={onChange}
              secureTextEntry={secureTextEntry}
              keyboardType={keyboardType}
              textContentType={textContentType}
              autoCapitalize={autoCapitalize}
              autoComplete={autoComplete}
              autoCorrect={autoCorrect}
              returnKeyType={returnKeyType}
              maxLength={maxLength}
              style={[
                isLogin ? styles.inputLogin : styles.input,
                isPassword
                  ? { flex: 1 }
                  : {
                      width: "100%",
                      borderWidth: 1,
                      borderColor: error
                        ? colors.errorBorder
                        : colors.borderColor,
                    },
              ]}
              accessibilityLabel={label}
            />
            {isPassword && (
              <TouchableOpacity
                onPress={togglePassword}
                style={styles.iconContainer}
                accessibilityLabel={
                  secureTextEntry ? "Show password" : "Hide password"
                }
                accessibilityRole="button"
              >
                <Ionicons
                  name={secureTextEntry ? "eye-outline" : "eye-off-outline"}
                  size={24}
                  color="gray"
                  style={styles.icon}
                />
              </TouchableOpacity>
            )}
          </View>
          {error && <Text style={styles.errorText}>{error.message}</Text>}
        </>
      )}
    />
  );
};

export default ControlledInput;

const styles = StyleSheet.create({
  label: {
    color: "#000",
    fontWeight: "500",
    fontSize: 14,
  },
  labelLogin: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 17,
  },
  passwordInput: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.borderColor,
    marginTop: 6,
  },
  input: {
    backgroundColor: "#fff",
    height: 45,
    fontSize: 14,
    padding: 10,
    borderRadius: 8,
  },
  inputLogin: {
    backgroundColor: "#fff",
    height: 45,
    fontSize: 17,
    padding: 10,
    borderRadius: 8,
  },
  errorText: {
    color: colors.errorText,
    fontSize: 12,
    marginBottom: 12,
    marginLeft: 2,
  },
  iconContainer: {
    padding: 10,
    marginRight: 5,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
