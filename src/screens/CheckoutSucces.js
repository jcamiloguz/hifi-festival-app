import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import {
  Text,
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native"
import { useNavigation } from "@react-navigation/native"

export default function CheckoutSucces({ navigation }) {
  const goToHome = () => {
    navigation.navigate("UserScreen", { goToHome: true })
  }
  return (
    <ScrollView style={styles.container__main}>
      <Image
        style={styles.icon}
        source={require("../assets/img/SuccesCheck_icon.png")}
      />
      <Text style={styles.title}>Payment Succes</Text>
      <Text style={styles.text__success}>
        Your payment was succesfull and you can start preparing for our
        festival.
      </Text>
      <View style={styles.container__summary}>
        <View style={styles.container__results}>
          <Text style={styles.summary__title}>Tickets</Text>
          <Text style={styles.summary__result}>$200.00</Text>
        </View>
        <View style={styles.container__results}>
          <Text style={styles.summary__title}>Tax & Fees</Text>
          <Text style={styles.summary__result}>$20.00</Text>
        </View>
        <View
          style={[
            styles.container__results,
            { height: 78, borderTopWidth: 1, borderColor: "grey" },
          ]}
        >
          <Text style={styles.summary__title}>Total</Text>
          <Text style={[styles.summary__result, { color: "#1B4D97" }]}>
            $200.00(PAID)
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.btn__Home} onPress={() => goToHome()}>
        <Text style={[styles.title, { color: "#fff", height: 30 }]}>HOME</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container__main: {
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 31,
  },
  icon: {
    width: 75,
    height: 75,
    marginBottom: 38,
    marginTop: 38,
    alignSelf: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 14,
    textAlign: "center",
  },
  text__success: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 38,
  },
  container__summary: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: 14,
    backgroundColor: "#fff",
  },
  summary__title: {
    color: "grey",
    fontSize: 16,
  },
  summary__result: {
    color: "black",
    fontSize: 16,
  },
  container__results: {
    width: "100%",
    height: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  btn__Home: {
    width: "100%",
    height: 50,
    marginTop: 38,
    padding: 12,
    borderRadius: 14,
    backgroundColor: "#1B4D97",
  },
})
