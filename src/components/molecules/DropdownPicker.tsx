import { View, Text, StyleSheet, Platform } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { Entypo } from "@expo/vector-icons";
import colors from "../../constants/colors";
import { CarDetailsProps } from "../../constants/filters";

const ChevronIcon = ({ isOpened }: { isOpened: boolean }) => {
  return (
    <Entypo
      name={isOpened ? "chevron-up" : "chevron-down"}
      size={21}
      color={colors.secondary}
    />
  );
};
interface Props {
  data: CarDetailsProps[] | { name: string }[];
  selectedItem: string;
  onSelect: (select: { name: string }) => void;
  placeholder: string;
  errorMessage?: string;
}

const DropdownPicker = ({
  data,
  selectedItem,
  onSelect,
  placeholder,
  errorMessage,
}: Props) => {
  return (
    <>
      <SelectDropdown
        data={data}
        onSelect={onSelect}
        renderButton={(selectedItem, isOpened) => (
          <View
            style={[
              styles.container,
              errorMessage &&
                errorMessage.length > 0 && { borderColor: colors.errorBorder },
            ]}
          >
            <Text style={styles.buttonText}>
              {selectedItem ? selectedItem.name : placeholder}
            </Text>
            <ChevronIcon isOpened={isOpened} />
          </View>
        )}
        renderItem={(item, index) => (
          <View
            key={index}
            style={[
              styles.itemContainer,
              selectedItem == item.name && { backgroundColor: "#D2D9DF" },
            ]}
          >
            <Text style={styles.itemText}>{item.name}</Text>
          </View>
        )}
        dropdownStyle={styles.menuList}
      />
      {errorMessage && errorMessage.length > 0 && (
        <Text style={styles.errorText}>{errorMessage}</Text>
      )}
    </>
  );
};

export default DropdownPicker;

const styles = StyleSheet.create({
  errorText: {
    color: colors.errorText,
    fontSize: 12,
    marginTop: -10,
    marginBottom: 10,
    marginLeft: 2,
  },
  container: {
    marginTop: 6,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.borderColor,
    backgroundColor: "#fff",
    height: 45,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  buttonText: {
    flex: 1,
    fontSize: 14,
    fontWeight: "500",
  },
  menuList: {
    borderRadius: 8,
    marginTop: Platform.OS === "android" ? -22 : 0,
  },
  itemContainer: {
    width: "100%",
    paddingHorizontal: 12,
    paddingVertical: 13,
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: colors.borderColor,
  },
  itemText: {
    flex: 1,
    fontSize: 14,
    fontWeight: "500",
  },
});
