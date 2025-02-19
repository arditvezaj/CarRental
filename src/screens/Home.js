import { useState } from "react";
import { Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import { carsData } from "../data/dummy-data";
import CarItem from "../components/organisms/CarItem";
import SearchInput from "../components/molecules/SearchInput";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowAlert: true,
    };
  },
});

const Home = () => {
  const [text, setText] = useState("");

  const renderItem = ({ item }) => {
    return (
      <CarItem
        id={item.id}
        name={item.name}
        discount={item.discount}
        price={item.price}
        imageUrl={item.imageUrl}
      />
    );
  };

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
  //       seconds: 5,
  //     },
  //   });
  // };

  // const sendPushNotificationHandler = () => {
  //   fetch("https://exp.host/--/api/v2/push/send", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       to: "ExponentPushToken[b2gYk9M54JQB71WTUJ4zW8]",
  //       title: "Car Rental",
  //       body: "Your car is due to be returned!",
  //       data: {
  //         userName: "John",
  //       },
  //     }),
  //   });
  // };

  return (
    <SafeAreaView style={styles.container}>
      {/* <Button title="Schedule Notification" onPress={scheduleBNNotification} />
      <Button
        title="Send Push Notification"
        onPress={sendPushNotificationHandler}
      /> */}
      <SearchInput text={text} setText={setText} placeholder="Search cars" />
      <FlatList
        data={carsData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
        ListEmptyComponent={<Text>No cars found</Text>}
        contentContainerStyle={styles.contentList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
  },
  contentList: {
    paddingBottom: 60,
  },
});

export default Home;
