import { Dimensions, Image, StyleSheet, Text, View } from "react-native"

import React from "react"

export const SLIDER_WIDTH = Dimensions.get("window").width
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)
export const ItemGallery = ({ item }) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemContainer}>
        <Image style={styles.img} source={item.imgUrl} />
      </View>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  item: {
    width: ITEM_WIDTH,
    position: "relative",
  },
  itemContainer: {
    width: ITEM_WIDTH,
    aspectRatio: 1,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#fff",
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      height: 10,
      width: 10,
    },
    position: "relative",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    zIndex: 1,
    textTransform: "uppercase",
  },
})