import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import {
  Text,
  StyleSheet,
  View,
  Animated,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native"
import SpotifyPlayer from "react-spotify-player"
import { useRef } from "react"
import { withAnchorPoint } from "react-native-anchor-point"

export function Playlist() {
  //*ANIMATION
  const circle1 = useRef(new Animated.Value(0)).current
  const circle2 = useRef(new Animated.Value(0)).current
  Animated.loop(
    Animated.parallel([
      Animated.timing(circle1, {
        toValue: 3,
        useNativeDriver: false,
        duration: 2000,
        delay: 200,
      }),
      Animated.timing(circle2, {
        toValue: 3,
        useNativeDriver: false,
        duration: 2000,
        delay: 500,
      }),
    ])
  ).start()

  //*SPOTIFY
  const size = {
    width: "100%",
    height: 300,
  }

  return (
    <View style={styles.section_playlist}>
      <Text style={styles.tittle}>PlayList</Text>
      <TouchableOpacity
        style={styles.spotify__playlist}
        onPress={() => {
          Linking.openURL("https://google.com")
        }}
      >
        <Image
          style={styles.spotify__icon}
          source={require("../assets/img/Vector.png")}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Animated.View
        style={[
          styles.circleAnimation,
          {
            transform: [
              {
                scaleX: circle1.interpolate({
                  inputRange: [0, 1, 2, 3],
                  outputRange: [0, 0.5, 0, 0],
                }),
              },
              {
                scaleY: circle1.interpolate({
                  inputRange: [0, 1, 2, 3],
                  outputRange: [0, 0.55, 0, 0],
                }),
              },
            ],
            opacity: circle1.interpolate({
              inputRange: [0, 1, 2, 3],
              outputRange: [0, 0.4, 0.3, 0],
            }),
          },
        ]}
      ></Animated.View>
      <Animated.View
        style={[
          styles.circleAnimation,
          {
            transform: [
              {
                scaleX: circle2.interpolate({
                  inputRange: [0, 1, 2, 3],
                  outputRange: [0, 0.5, 0, 0],
                }),
              },
              {
                scaleY: circle2.interpolate({
                  inputRange: [0, 1, 2, 3],
                  outputRange: [0, 0.55, 0, 0],
                }),
              },
            ],
            opacity: circle2.interpolate({
              inputRange: [0, 1, 2, 3],
              outputRange: [0, 0.4, 0.3, 0],
            }),
          },
        ]}
      ></Animated.View>
      <Text style={styles.subtittle}>Go to our playlist</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  section_playlist: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 360,
    // backgroundColor: "powderblue",
  },
  tittle: {
    position: "absolute",
    top: 34,
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
  },
  circleAnimation: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: -1,
    borderRadius: 1000,
    borderTopRightRadius: 1000,
    borderTopLeftRadius: 1000,
    borderTopStartRadius: 1000,
    backgroundColor: "#2fd766",
  },
  spotify__playlist: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    width: 200,
  },
  spotify__icon: {
    height: "80%",
    width: "80%",
  },
  subtittle: {
    position: "absolute",
    bottom: 44,
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
  },
})
