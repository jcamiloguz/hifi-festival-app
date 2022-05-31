import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { StyleSheet } from "react-native"
import { CarouselGallery } from "../components/CarouselGallery"

const dataGallery = [
  {
    title: "KID SEE GHOST",
    imgUrl: require("../assets/img/Gallery/1.jpg"),
  },
  {
    title: "TRAVIS SCOTT CONCERT",
    imgUrl: require("../assets/img/Gallery/2.jpg"),
  },
  {
    title: "OUR PAST FESTIVAL",
    imgUrl: require("../assets/img/Gallery/3.jpg"),
  },
  {
    title: "ALCOLIRYKOZ CONCERT",
    imgUrl: require("../assets/img/Gallery/4.jpg"),
  },
]

export function Gallery() {
  return (
    <SafeAreaView style={styles.container}>
      <CarouselGallery data={dataGallery} title="OUR CONCERTS" />
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  container: {
  }
})
