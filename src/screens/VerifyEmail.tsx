import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { useVerifyCodeMutation } from "../redux/services/auth/api";

const VerifyEmailScreen = () => {
  const route: any = useRoute();
  const { email } = route.params;
  const [verifyCode] = useVerifyCodeMutation();
  const [code, setCode] = useState("");

  const handleVerify = async () => {
    if (code.length !== 4) {
      Alert.alert("Error", "Please enter a 4-digit code");
      return;
    }

    try {
      const response = await verifyCode({ email, code }).unwrap();
      Alert.alert("Success", response.data.message);
    } catch (error: any) {
      Alert.alert(
        "Error",
        error.response?.data?.message || "Verification failed"
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Verification Code</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        maxLength={4}
        value={code}
        onChangeText={setCode}
      />
      <TouchableOpacity style={styles.button} onPress={handleVerify}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 18, marginBottom: 10 },
  input: {
    borderWidth: 1,
    padding: 10,
    width: "80%",
    textAlign: "center",
    fontSize: 20,
  },
  button: { backgroundColor: "blue", padding: 10, marginTop: 10 },
  buttonText: { color: "white", fontSize: 16 },
});

export default VerifyEmailScreen;
