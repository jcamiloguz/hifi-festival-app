import React from "react"
import { Text, StyleSheet, View, TouchableOpacity } from "react-native"
import { RadioGroup, RadioButton } from "react-native-radio-buttons-group"
import { useState } from "react"
import DropDownPicker from "react-native-dropdown-picker"
import { useNavigation } from "@react-navigation/native"

const radioButtonsData = [
  {
    id: "1", // acts as primary key, should be unique and non-empty string
    label: "200$",
    value: "200",
    containerStyle: {
      // position: "absolute",
      // top: -120,
      // zIndex: 5,
      // backgroundColor: "red",
      display: "flex",
      flexDirection: "column-reverse",
      alignItems: "center",
      justifyContent: "center",
    },
    labelStyle: {
      fontSize: 19,
      fontWeight: "bold",
      marginHorizontal: 8,
    },
  },
  {
    id: "2", // acts as primary key, should be unique and non-empty string
    label: "300$",
    value: "300",
    containerStyle: {
      // backgroundColor: "red",
      display: "flex",
      flexDirection: "column-reverse",
      alignItems: "center",
      justifyContent: "center",
    },
    labelStyle: {
      fontSize: 19,
      fontWeight: "bold",
      marginHorizontal: 8,
    },
  },
  {
    id: "3", // acts as primary key, should be unique and non-empty string
    label: "400$",
    value: "400",
    containerStyle: {
      // position: "absolute",
      // bottom: -130,
      // zIndex: 5,
      // backgroundColor: "red",
      display: "flex",
      flexDirection: "column-reverse",
      alignItems: "center",
      justifyContent: "center",
    },
    labelStyle: {
      fontSize: 19,
      fontWeight: "bold",
      marginHorizontal: 8,
    },
  },
]

export function Choose_tickets() {
  const [radioButtons, setRadioButton] = useState(radioButtonsData)
  function onPressRadioButton(radioButtonsArray) {
    setRadioButton(radioButtonsArray)
  }
  // console.log(radioButtons)

  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(null)
  const [items, setItems] = useState([
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" },
  ])

  const navigation = useNavigation()
  const goToCheckOut = () => {
    navigation.navigate("Checkout")
  }

  return (
    <View style={styles.container_tickets}>
      <View style={styles.container_choose}>
        <View style={styles.option}>
          <View style={styles.option__info}>
            <Text style={styles.info__title}>Standard</Text>
            <Text style={styles.info__body}>All stages acces</Text>
          </View>
        </View>
        <RadioGroup
          radioButtons={radioButtons}
          onPress={onPressRadioButton}
          containerStyle={{
            position: "absolute",
            // backgroundColor: "yellow",
            zIndex: 5,
            top: 2,
            right: 18,
            height: 370,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        />
        <View style={styles.option}>
          <View style={styles.option__info}>
            <Text style={styles.info__title}>VIP</Text>
            <Text style={styles.info__body}>All stages acces</Text>
            <Text style={styles.info__body}>Exclusive front seats</Text>
          </View>
        </View>
        <View style={styles.option}>
          <View style={styles.option__info}>
            <Text style={styles.info__title}>Platinum</Text>
            <Text style={styles.info__body}>All stages acces</Text>
            <Text style={styles.info__body}>Exclusive front seats</Text>
            <Text style={styles.info__body}>Exclusive meet & greet</Text>
          </View>
        </View>
      </View>

      <DropDownPicker
        style={styles.dropDownPicker}
        placeholder="Amount of tickets?"
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />

      <TouchableOpacity
        style={styles.btn__buynow}
        onPress={() => goToCheckOut()}
      >
        <Text style={styles.btn__buynow__text}>BUY NOW</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container_tickets: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  container_choose: {
    width: 303,
    height: 410,
    paddingVertical: 12,
    paddingLeft: 28,
    marginTop: 28,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "grey",
    borderRadius: 15,
  },
  option: {
    position: "relative",
    zIndex: -1,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "pink",
  },
  info__title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  info__body: {
    fontSize: 16,
  },
  dropDownPicker: {
    width: 260,
    padding: 12,
    alignSelf: "center",
    borderWidth: 2,
    borderRadius: 14,
    marginTop: 24,
  },
  btn__buynow: {
    marginVertical: 24,
    backgroundColor: "#1B4D97",
    width: 284,
    padding: 15,
    borderRadius: 14,
  },
  btn__buynow__text: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffff",
  },
})
