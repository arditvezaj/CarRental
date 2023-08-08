import { View, Text, SafeAreaView, Image, StyleSheet } from "react-native";

const CarInfos = ({ name, price, imageUrl }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Image source={imageUrl} />
        <Text>{name}</Text>
        <Text>{price}</Text>
      </SafeAreaView>
    </View>
  );
};

export default CarInfos;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});
