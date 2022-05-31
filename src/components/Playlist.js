import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import React, { useRef } from "react"

import { WebView } from "react-native-webview"

export function Playlist() {
  // ANIMATION
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

  return (
    <View style={styles.section_playlist}>
      <Text style={styles.tittle}>PlayList</Text>
      <TouchableOpacity
        style={styles.spotify__playlist}
        // onPress={() => {
        //   Linking.openURL("https://google.com")
        // }}
      >
        <WebView
          originWhitelist={["*"]}
          source={{
            html: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/1MmGFc1vZRqamgyvroE7Wp?utm_source=generator" width="100%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
          }}
          style={{
            width: "253%",
            height: "277%",
          }}
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
                  outputRange: [0, 0.8, 0, 0],
                }),
              },
              {
                scaleY: circle1.interpolate({
                  inputRange: [0, 1, 2, 3],
                  outputRange: [0, 0.85, 0, 0],
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
                  outputRange: [0, 0.8, 0, 0],
                }),
              },
              {
                scaleY: circle2.interpolate({
                  inputRange: [0, 1, 2, 3],
                  outputRange: [0, 0.85, 0, 0],
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
    height: 420,
  },
  tittle: {
    position: "absolute",
    top: 20,
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
  },
  circleAnimation: {
    position: "absolute",
    top: 24,
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
    // display: "none",
    marginTop: 24,
    width: 253,
    height: 277,
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
