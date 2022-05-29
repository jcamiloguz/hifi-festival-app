import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
<<<<<<< HEAD
import Unorderedlist from "react-native-unordered-list"
import { Video, AVPlaybackStatus } from "expo-av"
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native"
=======
import { Text, StyleSheet, View, Animated } from "react-native"
import { Hero_main } from "../components/Hero_main"
import { Playlist } from "../components/Playlist"
>>>>>>> remotes/origin/feature-bhc

export function Home() {
  const video = React.useRef(null)
  return (
    <SafeAreaView>
<<<<<<< HEAD
      <View style={styles.containerHero}>
        <Video
          ref={video}
          style={styles.backgroundVideo}
          source={
            // {uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',}
            require("../files/vid/hero.mp4")
          }
          resizeMode="cover"
          isLooping="true"
          shouldPlay="true"
        />
        
        <Image 
        style={styles.animationVideo}
        source={require("../files/vid/animacion.gif")}>
        </Image>
      
      </View>
      
      <Text style={styles.title}>About HiFi Festival</Text>
      <Text style={styles.parrafo}>
        The HiFi Festival is the most important festival of hifi music in latam,
        we get the 20 most important artist of the century. Hifi festival is
        looking for the performance of each artist.
      </Text>
      <View style={styles.ul}>
        <View style={styles.list}>
          <Unorderedlist style={styles.item}>
            <Text>Indie</Text>
          </Unorderedlist>
          <Unorderedlist style={styles.item}>
            <Text>Hip Hop</Text>
          </Unorderedlist>
          <Unorderedlist style={styles.item}>
            <Text>RnB</Text>
          </Unorderedlist>
        </View>
        <View style={styles.list}>
          <Unorderedlist style={styles.item}>
            <Text>Rap</Text>
          </Unorderedlist>
          <Unorderedlist style={styles.item}>
            <Text>Pop</Text>
          </Unorderedlist>
          <Unorderedlist style={styles.item}>
            <Text>Chill</Text>
          </Unorderedlist>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  containerHero: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ecf0f1",
  },
  backgroundVideo: {
    position: "absolute",
    width: "100%",
    height: 600,
    top: -50,
    left: 0,
    bottom: 0,
    right: 0,
  },
  animationVideo: {
    position: "absolute",
    width: 420,
    height: 120,
    marginTop: 200,
  },
  title: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 30,
    marginTop: 580,
  },
  parrafo: {
    fontWeight: "400",
    marginTop: 20,
    marginRight: "auto",
    marginLeft: "auto",
    maxWidth: 360,
  },
  ul: {
    marginTop: 20,
    justifyContent: "center",
  },
  list: {
    flexDirection: "row",
    maxWidth: 100,
    alignItems: "center",
    alignSelf: "center",
    marginRight: 120,
    paddingRight: 10,
  },
  item: {
    fontSize: 20,
  },
})
=======
      <Hero_main />
      <Playlist />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({})
>>>>>>> remotes/origin/feature-bhc
