import { Text, StyleSheet } from "react-native";
import { Control, Controller, Path } from "react-hook-form";
import DropdownPicker from "../molecules/DropdownPicker";

interface ControlledDropdownProps<T extends Record<string, string>> {
  name: Path<T>;
  control: Control<any>;
  data: { name: string }[];
  label: string;
  placeholder: string;
  rules?: object;
}

const ControlledDropdown = <T extends Record<string, string>>({
  name,
  control,
  data,
  label,
  placeholder,
  rules,
}: ControlledDropdownProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: label + " is required", ...rules }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <Text style={styles.label}>{label}:</Text>
          <DropdownPicker
            data={data}
            value={value}
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
