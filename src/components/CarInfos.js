import { View, Text, SafeAreaView, Image, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";
import colors from "../constants/colors";

const CarInfos = ({
  company,
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
  const { t } = useTranslation();
  return (
    <SafeAreaView>
      <View style={styles.outerContainer}>
        <View style={styles.container}>
          <View style={styles.companyContainer}>
            <Text style={styles.company}>{company}</Text>
          </View>
          <Image source={imageUrl} style={styles.image} />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "87%",
            }}
          >
            <Text style={styles.carName}>{name}</Text>
            <Text style={styles.price}>${price}/day </Text>
          </View>
          <View>
            <Text style={styles.price}>{t("Specifications")}</Text>
            <View style={styles.boxesContainer}>
              <View style={styles.box}>
                <Image
                  source={require("../../assets/images/icons/transmision.png")}
                  style={styles.icon}
                />
                <Text style={styles.boxText}>{t(transmission)}</Text>
              </View>
              <View style={styles.box}>
                <Image
                  source={require("../../assets/images/icons/seats.png")}
                  style={styles.icon}
                />
                <Text style={styles.boxText}>
                  {seats} {t("seater")}
                </Text>
              </View>
              <View style={styles.box}>
                <Image
                  source={require("../../assets/images/icons/fuel.png")}
                  style={styles.icon}
                />
                <Text style={styles.boxText}>{t(fuel)}</Text>
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
            <Text>{t("Mileage")}: </Text>
            <Text>
              {km} {t("km")}
            </Text>
          </View>
          <View style={styles.date}>
            <Image
              source={require("../../assets/images/icons/time.png")}
              style={styles.smallIcon}
            />
            <Text>{t("Available date")}: </Text>
            <Text>{date}</Text>
          </View>
        </View>
        <View style={styles.bottomButton}>
          <Text style={styles.buttonText}>{t("Book Now")}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CarInfos;

const styles = StyleSheet.create({
  outerContainer: {},
  companyContainer: {
    alignItems: "center",
    marginTop: 10,
    padding: 15,
    width: "86%",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: colors.secondary,
  },
  company: {
    fontSize: 22,
    fontWeight: "700",
    color: "white",
  },
  boxesContainer: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 5,
  },
  image: {
    maxWidth: "86%",
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
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
    marginHorizontal: 20,
    marginVertical: 8,
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
    backgroundColor: colors.secondary,
    alignItems: "center",
    marginHorizontal: 45,
    borderRadius: 8,
  },
  buttonText: {
    padding: 18,
    color: "white",
    fontWeight: "700",
    fontSize: 20,
  },
});
