import { TextInput, Text, StyleSheet } from "react-native";
import { Controller, Control } from "react-hook-form";
import { useRoute } from "@react-navigation/native";

type ControlledInputProps = {
  control: Control<any>;
  name: string;
  label: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  leftIcon?: string;
  rightIcon?: { icon: string; onPress: () => void };
  rules?: object;
  textContentType?: any;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  autoCorrect?: boolean | undefined;
  autoComplete?: any;
  returnKeyType?: "done" | "go" | "next" | "search" | "send";
  maxLength?: number;
};

const ControlledInput = ({
  control,
  name,
  label,
  placeholder,
  secureTextEntry = false,
  keyboardType = "default",
  rules,
  textContentType,
  autoCapitalize = "none",
  autoCorrect = false,
  autoComplete,
  returnKeyType = "next",
  maxLength,
}: ControlledInputProps) => {
  const route = useRoute();

  const isLogin = route.name === "LoginScreen";

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
              {
                marginBottom: error ? 5 : 15,
                borderColor: error ? "#FF0D10" : "#E6E8EC",
              },
            ]}
          />
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
  input: {
    width: "100%",
    backgroundColor: "#fff",
    height: 45,
    fontSize: 15,
    marginBottom: 15,
    marginTop: 7,
    padding: 10,
    borderWidth: 1,
    borderColor: "#E6E8EC",
    borderRadius: 8,
  },
  inputLogin: {
    width: "100%",
    backgroundColor: "#fff",
    height: 45,
    fontSize: 17,
    marginBottom: 30,
    marginTop: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: "#E6E8EC",
    borderRadius: 8,
  },
  errorText: {
    color: "#FF0D10",
    fontSize: 12,
    marginBottom: 15,
  },
});
