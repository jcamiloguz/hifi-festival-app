import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { Text, StyleSheet, View, Animated } from "react-native"
import { useEffect, useRef } from "react"
import { Video } from "expo-av"

export function Hero_tickets() {
  const video = require("../assets/videos/hero_tickets.mp4")

  return (
    <SafeAreaView>
      <View style={styles.hero}>
        <Video
          style={styles.hero__backgroundVideo}
          source={video}
          useNativeControls={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          isMuted
        />

        <View style={styles.hero__info}>
          <View style={styles.hero__info__title}>
            <Text style={styles.info__title1}>GET</Text>
            <Text style={styles.info__title2}>YOUR</Text>
            <Text style={styles.info__title2}>TICKETS</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  hero: {
    width: "100%",
    height: 385,
    position: "relative",
  },
  hero__backgroundVideo: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 0,
  },
  hero__info: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  hero__info__title: {
    marginTop: 109,
  },
  info__title1: {
    color: "#ffff",
    fontSize: 70,
    lineHeight: 68,
    height: 64,
    fontWeight: "bold",
    // textAlign: "center",
  },
  info__title2: {
    color: "#ffff",
    fontSize: 70,
    lineHeight: 66,
    fontWeight: "bold",
    // textAlign: "center",
  },
})
