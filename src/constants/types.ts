import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { CompositeNavigationProp } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { Control, Path } from "react-hook-form";
import { CarItemProps } from "../components/organisms/CarItem";

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  SignUp: undefined;
  "Car Rental": undefined;
  "Car Details": { id: string; fromMyCars?: boolean };
  "My Cars": undefined;
  "Add Car": undefined;
  "Edit Car": { car: CarItemProps };
  Favorites: undefined;
  Profile: undefined;
  "Edit Profile": undefined;
  "Filter Cars": undefined;
  "Car Makes": undefined;
  "Car Models": undefined;
  "Car Price": undefined;
  "Car Fuel": undefined;
  "Car Transmission": undefined;
  "Car Year": undefined;
};
export type NavigationType = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParamList>,
  BottomTabNavigationProp<RootStackParamList>
>;

export type ControlledInputProps<T extends Record<string, string | number>> = {
  control: Control<any>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  leftIcon?: string;
  rightIcon?: { icon: string; onPress: () => void };
  rules?: object;
  textContentType?:
    | "none"
    | "URL"
    | "addressCity"
    | "addressCityAndState"
    | "addressState"
    | "countryName"
    | "creditCardNumber"
    | "emailAddress"
    | "familyName"
    | "fullStreetAddress"
    | "givenName"
    | "jobTitle"
    | "location"
    | "middleName"
    | "name"
    | "namePrefix"
    | "nameSuffix"
    | "nickname"
    | "organizationName"
    | "postalCode"
    | "streetAddressLine1"
    | "streetAddressLine2"
    | "sublocality"
    | "telephoneNumber"
    | "username"
    | "password"
    | "newPassword"
    | "oneTimeCode";
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  autoCorrect?: boolean;
  autoComplete?:
    | "off"
    | "username"
    | "password"
    | "email"
    | "name"
    | "tel"
    | "street-address"
    | "postal-code"
    | "cc-number"
    | "cc-csc"
    | "cc-exp"
    | "cc-exp-month"
    | "cc-exp-year";
  returnKeyType?: "done" | "go" | "next" | "search" | "send";
  maxLength?: number;
  togglePassword?: () => void;
};

export type ControlledDropdownProps<T extends Record<string, string | number>> =
  {
    control: Control<T>;
    name: Path<T>;
    label: string;
    data: { label: string; value: string }[];
    placeholder?: string;
  };
