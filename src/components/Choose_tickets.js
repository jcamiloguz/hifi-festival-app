import React from "react"
import { Text, StyleSheet, View } from "react-native"
import { RadioGroup, RadioButton } from "react-native-radio-buttons-group"
import { useState } from "react"

const radioButtonsData = [
  {
    id: "1", // acts as primary key, should be unique and non-empty string
    label: "200$",
    value: "200",
    containerStyle: {
      display: "flex",
      flexDirection: "column-reverse",
      alignItems: "center",
      justifyContent: "center",
    },
    labelStyle: {
      fontSize: 17,
      fontWeight: "bold",
      marginHorizontal: 8,
    },
  },
  {
    id: "2", // acts as primary key, should be unique and non-empty string
    label: "300$",
    value: "300",
    containerStyle: {
      display: "flex",
      flexDirection: "column-reverse",
      alignItems: "center",
      justifyContent: "center",
    },
    labelStyle: {
      fontSize: 17,
      fontWeight: "bold",
      marginHorizontal: 8,
    },
  },
  {
    id: "3", // acts as primary key, should be unique and non-empty string
    label: "400$",
    value: "400",
    containerStyle: {
      display: "flex",
      flexDirection: "column-reverse",
      alignItems: "center",
      justifyContent: "center",
    },
    labelStyle: {
      fontSize: 17,
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
  console.log(radioButtons)
  return (
    <View style={styles.container_tickets}>
      <View style={styles.container_choose}>
        <View style={styles.option}>
          <View style={styles.option__info}>
            <Text style={styles.info__title}>Standard</Text>
            <Text style={styles.info__body}>All stages acces</Text>
          </View>
          <RadioGroup
            radioButtons={radioButtons}
            onPress={onPressRadioButton}
          />
        </View>
        <View style={styles.option}>
          <View style={styles.option__info}>
            <Text style={styles.info__title}>VIP</Text>
            <Text style={styles.info__body}>All stages acces</Text>
            <Text style={styles.info__body}>Exclusive front seats</Text>
          </View>
          <RadioGroup
            radioButtons={radioButtons}
            onPress={onPressRadioButton}
          />
        </View>
        <View style={styles.option}>
          <View style={styles.option__info}>
            <Text style={styles.info__title}>Platinum</Text>
            <Text style={styles.info__body}>All stages acces</Text>
            <Text style={styles.info__body}>Exclusive front seats</Text>
            <Text style={styles.info__body}>Exclusive meet & greet</Text>
          </View>
          <RadioGroup
            radioButtons={radioButtons}
            onPress={onPressRadioButton}
          />
        </View>
      </View>
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
    padding: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    borderRadius: 15,
    borderColor: "gray",
    backgroundColor: "powderblue",
  },
  option: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "pink",
  },
  option__info: {},
  info__title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  info__body: {
    fontSize: 16,
  },
})
