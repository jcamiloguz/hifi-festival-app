import {
  Dimensions,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"

import React from "react"

export const SLIDER_WIDTH = Dimensions.get("window").width
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)
export const ArtistsItem = ({ item }) => {
  const { name, imgUrl, description, genre, instagram, spotify } = item
  return (
    <View style={styles.item}>
      <View style={styles.itemContainer}>
        <Image style={styles.img} source={imgUrl} />
      </View>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.subtitle}>{genre}</Text>
      <Text style={styles.description}>{description}</Text>
      <TouchableOpacity onPress={() => Linking.openURL(instagram)}>
        <Image
          style={styles.inta}
          source={require("../assets/icons/insta.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL(spotify)}>
        <Image
          style={styles.spot}
          source={require("../assets/icons/spotif.png")}
        />
      </TouchableOpacity>
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
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "left",
    zIndex: 1,
    textTransform: "uppercase",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#c0c0c0",
    textAlign: "left",
    textTransform: "uppercase",
  },
  description: {
    fontSize: 14,
  },
  inta: {
    marginTop: 10,
    width: 30,
    height: 30,
  },
  spot: {
    marginTop: 10,
    width: 30,
    height: 30,
  },
})
