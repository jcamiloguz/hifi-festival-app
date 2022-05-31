import { ITEM_WIDTH, ItemCarousel, SLIDER_WIDTH } from "./ItemCarousel"
import { StyleSheet, Text, View } from "react-native"

import Carousel from "react-native-snap-carousel"
import React from "react"

export const CustomCarousel = ({ title, data }) => {
  const isCarousel = React.useRef(null)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Carousel
        layout="default"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={ItemCarousel}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  container: {
    marginTop: 15,
  },
})
