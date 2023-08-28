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
    <SafeAreaView>
      <View style={styles.container}>
        <Image source={imageUrl} style={styles.image} />
        <View style={{ flexDirection: "row", justifyContent: "space-between", width: "87%" }}>
          <Text style={styles.carName}>{name}</Text>
          <Text style={styles.price}>${price}/day </Text>
        </View>
        <View>
          <Text style={styles.price}>Specifications</Text>
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
                source={require("../../assets/images/icons/seats.png")}
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
        <View style={styles.date}>
          <Image
            source={require("../../assets/images/icons/engine.png")}
            style={styles.smallIcon}
          />
          <Text>Engine power: </Text>
          <Text>{engine} cc</Text>
        </View>
        <View style={styles.date}>
          <Image
            source={require("../../assets/images/icons/mileage.png")}
            style={styles.smallIcon}
          />
          <Text>Mileage: </Text>
          <Text>{km} km</Text>
        </View>
        <View style={styles.date}>
          <Image
            source={require("../../assets/images/icons/clock.gif")}
            style={styles.smallIcon}
          />
          <Text>Available date: </Text>
          <Text>{date}</Text>
        </View>
      </View>
      <View style={styles.bottomButton}>
        <Text style={styles.buttonText}>Book Now</Text>
      </View>
    </SafeAreaView>
  );
};

export default CarInfos;

const styles = StyleSheet.create({
  boxesContainer: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 5,
  },
  image: {
    borderRadius: 6,
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  smallIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
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
    marginVertical: 5,
  },
  container: {
    flex: 1,
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
    width: "87%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: "white",
    borderRadius: 6,
    marginVertical: 5,
  },
  bottomButton: {
    flex: 1,
    marginTop: 115,
    backgroundColor: "grey",
    alignItems: "center",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },
  buttonText: {
    padding: 18,
    fontWeight: "700",
    fontSize: 30,
    marginBottom: 20
  },
});
