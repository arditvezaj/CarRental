// import { useEffect } from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  // Alert,
  // Platform,
} from "react-native";
// import { useNavigation } from "@react-navigation/native";
import colors from "../../constants/colors";
// import { NavigationType } from "@/src/constants/types";
// import * as Notifications from "expo-notifications";

const BookButton = () => {
  // const navigation = useNavigation<NavigationType>();

  // const bookHandler = () => {
  //   navigation.navigate("Favorites");
  // };

  // useEffect(() => {
  //   const configurePushNotifications = async () => {
  //     const { status } = await Notifications.getPermissionsAsync();
  //     let finalStatus = status;

  //     if (finalStatus !== "granted") {
  //       const { status } = await Notifications.requestPermissionsAsync();
  //       finalStatus = status;
  //     }

  //     if (finalStatus !== "granted") {
  //       Alert.alert(
  //         "Permission required",
  //         "Failed to get push token for push notification!"
  //       );
  //       return;
  //     }

  //     const pushTokenData = await Notifications.getExpoPushTokenAsync();
  //     console.log(pushTokenData);

  //     if (Platform.OS === "android") {
  //       Notifications.setNotificationChannelAsync("default", {
  //         name: "default",
  //         importance: Notifications.AndroidImportance.DEFAULT,
  //       });
  //     }
  //   };

  //   configurePushNotifications();
  // }, []);

  // useEffect(() => {
  //   const subscription1 = Notifications.addNotificationReceivedListener(
  //     (notification) => {
  //       const userName = notification.request.content.data.userName;
  //       // console.log(userName);
  //     }
  //   );

  //   const subscription2 = Notifications.addNotificationResponseReceivedListener(
  //     (response) => {
  //       const userName = response.notification.request.content.data.userName;
  //       // console.log(userName);
  //     }
  //   );

  //   return () => {
  //     subscription1.remove();
  //     subscription2.remove();
  //   };
  // }, []);

  // const scheduleBNNotification = () => {
  //   Notifications.scheduleNotificationAsync({
  //     content: {
  //       title: "Car Rental",
  //       body: "Your car is due to be returned!",
  //       data: {
  //         userName: "John",
  //       },
  //     },
  //     trigger: {
  //       type:
  //     },
  //   });
  // };

  const sendPushNotificationHandler = () => {
    fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: "ExponentPushToken[b2gYk9M54JQB71WTUJ4zW8]",
        title: "Car Rental",
        body: "Your car is booked!",
        data: {
          userName: "John",
        },
      }),
    });
  };

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={sendPushNotificationHandler}
    >
      <Text style={styles.buttonText}>Book Now</Text>
    </TouchableOpacity>
  );
};

export default BookButton;

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 25,
    width: "100%",
    backgroundColor: colors.secondary,
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    padding: 12,
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
  },
});
