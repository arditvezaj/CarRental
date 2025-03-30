import { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  BackHandler,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { setYearFrom, setYearTo } from "../../redux/modules/filters/slice";
import colors from "@/src/constants/colors";
import { RootState } from "@/src/redux/store";

const CarYears = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const reduxYearFrom = useSelector(
    (state: RootState) => state.filtersReducer.yearFrom
  );
  const reduxYearTo = useSelector(
    (state: RootState) => state.filtersReducer.yearTo
  );

  const [yearFrom, setLocalYearFrom] = useState(
    reduxYearFrom ? reduxYearFrom.toString() : ""
  );
  const [yearTo, setLocalYearTo] = useState(
    reduxYearTo ? reduxYearTo.toString() : ""
  );
  const [error, setError] = useState("");

  const handleYearFromChange = (text: string) => {
    const newYearFrom = text ? parseInt(text, 10) : null;
    setLocalYearFrom(text);

    if (
      newYearFrom &&
      yearTo?.length == 4 &&
      text.length !== 4 &&
      newYearFrom > parseInt(yearTo, 10)
    ) {
      Alert.alert(
        "Invalid Input",
        "Year From must be less than or equal to Year To",
        [
          {
            text: "OK",
            onPress: () => {
              setLocalYearFrom("");
              dispatch(setYearFrom(""));
            },
          },
        ]
      );
    } else {
      dispatch(setYearFrom(newYearFrom));
      dispatch(setYearTo(reduxYearTo));
    }
  };

  const handleYearToChange = (text: string) => {
    const newYearTo = text ? parseInt(text, 10) : null;
    setLocalYearTo(text);

    if (
      yearFrom?.length == 4 &&
      text.length == 4 &&
      newYearTo &&
      parseInt(yearFrom, 10) > newYearTo
    ) {
      Alert.alert(
        "Invalid Input",
        "Year From must be less than or equal to Year To3",
        [
          {
            text: "OK",
            onPress: () => {
              setLocalYearTo("");
              dispatch(setYearTo(""));
            },
          },
        ]
      );
    } else {
      dispatch(setYearTo(newYearTo));
      dispatch(setYearFrom(reduxYearFrom));
    }
  };

  const validateYears = () => {
    const from = parseInt(yearFrom, 10);
    const to = parseInt(yearTo, 10);

    if (yearFrom && (from < 1950 || from > 2025)) {
      setError("Year From must be between 1950 and 2025");
      return false;
    }

    if (yearTo && (to < 1950 || to > 2025)) {
      setError("Year To must be between 1950 and 2025");
      return false;
    }

    if (from && to && from > to) {
      Alert.alert(
        "Invalid Input",
        "Year From must be less than or equal to Year To",
        [{ text: "OK", onPress: () => {} }]
      );
      return false;
    }

    if (yearFrom && yearTo && from > to) {
      setError("Year From must be less than or equal to Year To");
      return false;
    }

    setError("");
    return true;
  };

  const handleDone = () => {
    if (!validateYears()) return;

    navigation.goBack();
  };

  useEffect(() => {
    const backAction = () => {
      if (!validateYears()) {
        Alert.alert(
          "Invalid Input",
          "Please enter valid years before going back."
        );
        return true;
      }

      handleDone();
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [yearFrom, yearTo]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>First registration:</Text>
      <TextInput
        style={styles.input}
        placeholder="From"
        keyboardType="numeric"
        value={yearFrom}
        onChangeText={handleYearFromChange}
        maxLength={4}
      />
      <TextInput
        style={styles.input}
        placeholder="To"
        keyboardType="numeric"
        value={yearTo}
        onChangeText={handleYearToChange}
        maxLength={4}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleDone}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CarYears;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
    marginTop: 30,
    marginBottom: 15,
  },
  input: {
    width: "100%",
    height: 44,
    fontSize: 16,
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    backgroundColor: "#fff",
    borderColor: colors.borderColor,
    borderRadius: 8,
  },
  errorText: {
    color: colors.errorText,
    fontSize: 14,
    marginBottom: 10,
  },
  button: {
    width: "100%",
    height: 44,
    backgroundColor: colors.secondary,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
