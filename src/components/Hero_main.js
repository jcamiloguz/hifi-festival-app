import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { Text, StyleSheet, View, Animated } from "react-native"
import { useEffect, useRef } from "react"
import { Video } from "expo-av"

export function Hero_main() {
  const video = require("../assets/videos/hero_main.mp4")
  const bar = useRef(new Animated.Value(0)).current
  const bar2 = useRef(new Animated.Value(0)).current
  const bar3 = useRef(new Animated.Value(0)).current
  const bar4 = useRef(new Animated.Value(0)).current
  const bar5 = useRef(new Animated.Value(0)).current

  Animated.loop(
    Animated.parallel([
      Animated.timing(bar, {
        toValue: 5,
        useNativeDriver: false,
        duration: 1000,
        delay: 500,
      }),
      Animated.timing(bar2, {
        toValue: 5,
        useNativeDriver: false,
        duration: 1000,
        delay: 480,
      }),
      Animated.timing(bar3, {
        toValue: 5,
        useNativeDriver: false,
        duration: 1000,
        delay: 560,
      }),
      Animated.timing(bar4, {
        toValue: 5,
        useNativeDriver: false,
        duration: 1000,
        delay: 470,
      }),
      Animated.timing(bar5, {
        toValue: 5,
        useNativeDriver: false,
        duration: 1000,
        delay: 565,
      }),
    ])
  ).start()
  // const bar1 = bar._animation._delay + 100
  // console.log(bar)

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
            <Text style={styles.info__title1}>FEEL THE</Text>
            <Text style={styles.info__title2}>SOUND</Text>
          </View>

          <View style={styles.hero__animation}>
            <Animated.View
              style={[
                styles.bar,
                styles.n1,
                {
                  height: bar5.interpolate({
                    inputRange: [0, 1, 2, 3, 4, 5],
                    outputRange: [10, 80, 40, 60, 30, 10],
                  }),
                },
              ]}
            ></Animated.View>
            <Animated.View
              style={[
                styles.bar,
                styles.n1,
                {
                  height: bar4.interpolate({
                    inputRange: [0, 1, 2, 3, 4, 5],
                    outputRange: [13, 80, 40, 60, 30, 6],
                  }),
                },
              ]}
            ></Animated.View>
            <Animated.View
              style={[
                styles.bar,
                styles.n1,
                {
                  height: bar3.interpolate({
                    inputRange: [0, 1, 2, 3, 4, 5],
                    outputRange: [10, 80, 40, 60, 30, 5],
                  }),
                },
              ]}
            ></Animated.View>
            <Animated.View
              style={[
                styles.bar,
                styles.n1,
                {
                  height: bar2.interpolate({
                    inputRange: [0, 1, 2, 3, 4, 5],
                    outputRange: [18, 80, 40, 60, 30, 10],
                  }),
                },
              ]}
            ></Animated.View>
            <Animated.View
              style={[
                styles.bar,
                styles.n1,
                {
                  height: bar.interpolate({
                    inputRange: [0, 1, 2, 3, 4, 5],
                    outputRange: [15, 80, 40, 60, 30, 8],
                  }),
                },
              ]}
            ></Animated.View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  hero: {
    width: "100%",
    height: 469,
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
    fontSize: 64,
    lineHeight: 66,
    height: 58,
    fontWeight: "bold",
    textAlign: "center",
  },
  info__title2: {
    color: "#ffff",
    fontSize: 64,
    lineHeight: 62,
    fontWeight: "bold",
    textAlign: "center",
  },
  hero__animation: {
    height: 100,
    marginTop: 48,
    display: "flex",
    flexDirection: "row",
    // backgroundColor: "red",
    transform: [{ rotate: "-180deg" }],
  },
  bar: {
    backgroundColor: "#ffff",
    width: 30,
    marginHorizontal: 1,
  },
})
