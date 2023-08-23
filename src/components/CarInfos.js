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
        <Image source={imageUrl} style={styles.image} />
        <Text style={styles.carName}>{name}</Text>
        <View style={styles.textOutline}>
          <Text style={styles.price}>Price: </Text>
          <Text style={styles.price}>${price}/day </Text>
        </View>
        <View>
          <Text style={styles.textKey}>Specifications</Text>
          <View style={styles.boxesContainer}>
            <View style={styles.box}>
              <Image
                source={require("../../assets/images/icons/transmision.png")}
                style={styles.icon}
              />
              <Text style={styles.boxText}>{transmission}</Text>
            </View>
            <View style={styles.box}>
              <Image
                source={require("../../assets/images/icons/seatss.png")}
                style={styles.icon}
              />
              <Text style={styles.boxText}>{seats} seater</Text>
            </View>
            <View style={styles.box}>
              <Image
                source={require("../../assets/images/icons/fuel.png")}
                style={styles.icon}
              />
              <Text style={styles.boxText}>{fuel}</Text>
            </View>
          </View>
        </View>
        {/* <View style={styles.textOutline}>
          <Text style={styles.textKey}>Transmission: </Text>
          <Text style={styles.text}>{transmission}</Text>
        </View> */}
        {/* <View style={styles.textOutline}>
          <Text style={styles.textKey}>Seats: </Text>
          <Text style={styles.text}>{seats}</Text>
        </View> */}
        {/* <View style={styles.textOutline}>
          <Text style={styles.textKey}>Fuel type: </Text>
          <Text style={styles.text}>{fuel}</Text>
        </View> */}
        <View style={styles.textOutline}>
          <Text style={styles.textKey}>Engine power: </Text>
          <Text style={styles.text}>{engine}</Text>
        </View>
        <View style={styles.textOutline}>
          <Text style={styles.textKey}>Milleage: </Text>
          <Text style={styles.text}>{km}</Text>
        </View>
        <View style={styles.date}>
          <Text>Available date: </Text>
          <Text>{date}</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default CarInfos;

const styles = StyleSheet.create({
  boxesContainer: {
    flexDirection: "row",
    gap: 10,
  },
  image: {
    borderRadius: 6,
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  box: {
    width: 95,
    height: 95,
    backgroundColor: "white",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  boxText: {
    color: "black",
  },
  carName: {
    marginVertical: 5,
    fontSize: 20,
    fontWeight: "700",
    color: "white",
  },
  price: {
    fontSize: 18,
    fontWeight: "700",
    color: "white",
  },
  container: {
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textOutline: {
    flexDirection: "row",
  },
  textKey: { color: "white" },
  text: { color: "white", fontWeight: "bold" },
  date: {
    width: "100%",
    padding: 10,
    backgroundColor: "white",
    borderRadius: 6
  }
});
