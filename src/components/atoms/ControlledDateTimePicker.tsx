import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
  Modal,
  Pressable,
} from "react-native";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { Control, Controller } from "react-hook-form";
import colors from "../../constants/colors";
import { FontAwesome } from "@expo/vector-icons";

interface ControlledDateTimePickerProps {
  name: string;
  label: string;
  control: Control<any>;
  rules?: object;
}

const ControlledDateTimePicker = ({
  name,
  label,
  control,
  rules,
}: ControlledDateTimePickerProps) => {
  const [show, setShow] = useState(false);
  const [tempDate, setTempDate] = useState<Date | null>(null);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const handleDateChange = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined
  ) => {
    if (event.type === "set" && selectedDate) {
      setTempDate(selectedDate);
    }
  };

  const toggleShow = () => {
    setShow((prev) => !prev);
  };

  const handleDone = (
    fieldOnChange: (...event: any[]) => void,
    currentValue: Date | null
  ) => {
    const dateToSet = tempDate || currentValue || today;
    fieldOnChange(dateToSet);
    setTempDate(null);
    toggleShow();
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <View style={styles.container}>
          <Text style={styles.label}>{label}:</Text>
          <TouchableOpacity
            style={[styles.input, error && styles.errorInput]}
            onPress={toggleShow}
          >
            <Text style={[styles.dateText, !value && styles.placeholder]}>
              {value ? formatDate(value) : "Select date"}
            </Text>
          </TouchableOpacity>
          {error && <Text style={styles.errorText}>{error.message}</Text>}

          <Modal
            visible={show}
            transparent={true}
            animationType="fade"
            onRequestClose={toggleShow}
          >
            <Pressable style={styles.modalOverlay} onPress={toggleShow}>
              <View style={styles.modalContent}>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalTitle}>Select Date:</Text>
                  <TouchableOpacity
                    onPress={toggleShow}
                    style={styles.closeButton}
                  >
                    <FontAwesome name="times" size={20} color="#000" />
                  </TouchableOpacity>
                </View>
                <DateTimePicker
                  testID="dateTimePicker"
                  value={tempDate || value || today}
                  mode="date"
                  display={Platform.OS === "ios" ? "spinner" : "default"}
                  onChange={handleDateChange}
                  minimumDate={today}
                />
                <TouchableOpacity
                  style={styles.doneButton}
                  onPress={() => handleDone(onChange, value)}
                >
                  <Text style={styles.doneButtonText}>Done</Text>
                </TouchableOpacity>
              </View>
            </Pressable>
          </Modal>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  doneButton: {
    backgroundColor: colors.secondary,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
  },
  doneButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  container: {
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 6,
    color: "#00000",
  },
  input: {
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#fff",
  },
  errorInput: {
    borderColor: colors.errorText,
  },
  dateText: {
    fontSize: 16,
    color: "#00000",
  },
  placeholder: {
    color: "#00000",
  },
  errorText: {
    color: colors.errorText,
    fontSize: 12,
    marginTop: 2,
    marginLeft: 2,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    width: "90%",
    maxWidth: 400,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
  closeButton: {
    padding: 5,
  },
});

export default ControlledDateTimePicker;
