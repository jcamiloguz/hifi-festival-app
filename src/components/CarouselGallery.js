import { ITEM_WIDTH, ItemGallery, SLIDER_WIDTH } from "./ItemGallery"
import { StyleSheet, Text, View, Dimensions } from "react-native"

import Carousel from "react-native-snap-carousel"
import React from "react"

export const CarouselGallery = ({ title, data }) => {
  const isCarousel = React.useRef(null)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Carousel
        layout="default"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={ItemGallery}
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
      marginTop: 80,
  },
})