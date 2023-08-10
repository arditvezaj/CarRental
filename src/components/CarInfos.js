import { View, Text, SafeAreaView, Image, StyleSheet } from "react-native";

const CarInfos = ({
  name,
  price,
  date,
  engine,
  transmission,
  km,
  seats,
  fuel,
  imageUrl,
}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Image source={imageUrl} />
        <Text style={styles.text}>{name}</Text>
        <View style={styles.textOutline}>
          <Text style={styles.text}>Price: </Text>
          <Text style={styles.text}>{price} $</Text>
        </View>
        <View style={styles.textOutline}>
          <Text style={styles.text}>Transmission: </Text>
          <Text style={styles.text}>{transmission}</Text>
        </View>
        <View style={styles.textOutline}>
          <Text style={styles.text}>Seats: </Text>
          <Text style={styles.text}>{seats}</Text>
        </View>
        <View style={styles.textOutline}>
          <Text style={styles.text}>Fuel type: </Text>
          <Text style={styles.text}>{fuel}</Text>
        </View>
        <View style={styles.textOutline}>
          <Text style={styles.text}>Engine power: </Text>
          <Text style={styles.text}>{engine}</Text>
        </View>
        <View style={styles.textOutline}>
          <Text style={styles.text}>Milleage: </Text>
          <Text style={styles.text}>{km}</Text>
        </View>
        <View style={styles.textOutline}>
          <Text style={styles.text}>Available date: </Text>
          <Text style={styles.text}>{date}</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default CarInfos;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textOutline: {
    flexDirection: "row",
  },
  text: { color: "white" },
});
