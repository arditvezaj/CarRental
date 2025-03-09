import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useNavigation } from "@react-navigation/native";
import {
  setIsAuthenticated,
  selectIsAuthenticated,
} from "../redux/modules/auth/slice";
import { NavigationType } from "../constants/types";

const useAuth = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationType>();
  const isAuth = useAppSelector(selectIsAuthenticated);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await SecureStore.getItemAsync("access_token");
      dispatch(setIsAuthenticated(!!token));

      setIsCheckingAuth(false);
    };

    checkLoginStatus();
  }, []);

  useEffect(() => {
    if (!isCheckingAuth && isAuth) {
      navigation.replace("Home");
    }
  }, [isCheckingAuth, isAuth]);

  return { isAuth, isCheckingAuth };
};

export default useAuth;
