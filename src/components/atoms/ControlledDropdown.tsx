import { Text, StyleSheet } from "react-native";
import { Control, Controller } from "react-hook-form";
import DropdownPicker from "../molecules/DropdownPicker";

interface ControlledDropdownProps {
  name: string;
  control: Control<any>;
  data: { name: string }[];
  label: string;
  placeholder: string;
  rules?: object;
}

const ControlledDropdown = ({
  name,
  control,
  data,
  label,
  placeholder,
  rules,
}: ControlledDropdownProps) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <Text style={styles.label}>{label}:</Text>
          <DropdownPicker
            data={data}
            onSelect={(item) => onChange(item.name)}
            selectedItem={value}
            placeholder={placeholder}
            errorMessage={error?.message}
          />
        </>
      )}
    />
  );
};

export default ControlledDropdown;

const styles = StyleSheet.create({
  label: {
    color: "#000",
    fontWeight: "500",
    fontSize: 14,
  },
});
