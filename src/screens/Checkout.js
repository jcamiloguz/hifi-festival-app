import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import {
  Text,
  ScrollView,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Switch,
} from "react-native"
import { useState } from "react"
import { useNavigation } from "@react-navigation/native"

export default function Checkout() {
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState)

  const navigation = useNavigation()
  const goToCheckOutSucces = () => {
    navigation.navigate("Checkout Succes")
  }
  return (
    <ScrollView style={{ paddingHorizontal: 35 }}>
      <View style={styles.container__info}>
        <Text style={styles.title}>Total Price</Text>
        <Text style={styles.info__price}>$200.00 USD</Text>
        <Text style={styles.title}>Payment Method</Text>
        <View style={styles.container__method}>
          <Text style={styles.method__title}>Credit Card</Text>
        </View>
      </View>
      <View style={styles.container__CardInfo}>
        <Text style={styles.title}>Card Number</Text>
        <TextInput
          style={[styles.textInput, { marginBottom: 22 }]}
          placeholder="Card Number"
          autoCompleteType="cc-number"
          keyboardType="numeric"
        />
        <View style={styles.cardInfo}>
          <View style={styles.cardInfo__body}>
            <Text style={styles.title}>Valid Until</Text>
            <TextInput
              style={styles.textInput__CardInfo}
              placeholder="Month/Year"
              autoComplete="cc-exp-year"
              keyboardType="default"
            />
          </View>
          <View style={styles.cardInfo__body}>
            <Text style={styles.title}>CCV</Text>
            <TextInput
              style={[styles.textInput__CardInfo, { width: "100%" }]}
              placeholder="CCV Number"
              keyboardType="numeric"
            />
          </View>
        </View>
        <Text style={styles.title}>Card Holder</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Your Name and surname"
          autoCompleteType="name"
          keyboardType="default"
          required="true"
        />
      </View>
      <View style={styles.container__SaveCard}>
        <Text>Save card data for future payments</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#1B4D97" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <TouchableOpacity
        style={styles.btn__PlaceOrder}
        onPress={() => goToCheckOutSucces()}
      >
        <Text style={styles.btn__PlaceOrder__text}>PLACE ORDER</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container__info: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 35,
    // backgroundColor: "pink",
    // paddingLeft: 35,
  },
  title: {
    fontSize: 20,
    fontWeight: "300",
  },
  info__price: {
    color: "#1B4D97",
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 12,
  },
  container__method: {
    width: 110,
    height: 50,
    marginTop: 12,
    padding: 12,
    borderRadius: 14,
    backgroundColor: "#1B4D97",
  },
  method__title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  container__CardInfo: {
    width: "100%",
    // paddingHorizontal: 35,
  },
  cardInfo: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 22,
  },
  textInput: {
    borderWidth: 0,
    borderRadius: 14,
    padding: 12,
    backgroundColor: "#fff",
  },
  textInput__CardInfo: {
    borderWidth: 0,
    borderRadius: 14,
    padding: 12,
    backgroundColor: "#fff",
    width: "90%",
  },
  cardInfo__body: {
    width: "50%",
  },
  container__SaveCard: {
    width: "100%",
    marginVertical: 22,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btn__PlaceOrder: {
    width: "100%",
    height: 50,
    backgroundColor: "#1B4D97",
    borderRadius: 14,
    padding: 12,
  },
  btn__PlaceOrder__text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
})
