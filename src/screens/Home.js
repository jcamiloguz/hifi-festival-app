import { Image, ScrollView, StyleSheet, Text, View } from "react-native"

import { CustomCarousel } from "../components/Carousel"
import { Location } from "../components/Location"
import { Playlist } from "../components/Playlist"
import React from "react"
import Unorderedlist from "react-native-unordered-list"
import { Video } from "expo-av"

const dataArtists = [
  {
    title: "Kanye West",
    imgUrl: require("../assets/img/Artists/kanye.jpeg"),
  },
  {
    title: "Wos",
    imgUrl: require("../assets/img/Artists/wos.jpeg"),
  },
  {
    title: "C.Tangana",
    imgUrl: require("../assets/img/Artists/ctangana.jpeg"),
  },
  {
    title: "Bad Bunny",
    imgUrl: require("../assets/img/Artists/badbunny.jpeg"),
  },
  {
    title: "Frank Ocean",
    imgUrl: require("../assets/img/Artists/frank.jpeg"),
  },
]
const dataSponsors = [
  {
    title: "Github",
    imgUrl: require("../assets/img/Sponsors/Github.png"),
  },
  {
    title: "Globant",
    imgUrl: require("../assets/img/Sponsors/globant.png"),
  },
  {
    title: "Spotify",
    imgUrl: require("../assets/img/Sponsors/spotify.png"),
  },
  {
    title: "Y Combinator",
    imgUrl: require("../assets/img/Sponsors/yc.png"),
  },
]

export function Home() {
  const video = React.useRef(null)
  return (
    <ScrollView>
      <View style={styles.containerHero}>
        <Video
          ref={video}
          style={styles.backgroundVideo}
          source={
            // {uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',}
            require("../files/vid/hero.mp4")
          }
          resizeMode="cover"
          isLooping={true}
          shouldPlay={true}
        />

        <Image
          style={styles.animationVideo}
          source={require("../files/vid/animacion.gif")}
        ></Image>
      </View>

      <Text style={styles.title}>About HiFi Festival</Text>
      <Text style={styles.parrafo}>
        The HiFi Festival is the most important festival of hifi music in latam,
        we get the 21 most important artist of the century. Hifi festival is
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
      <Location></Location>
      <CustomCarousel data={dataArtists} title="OUR ARTISTS" />
      <Playlist />
      <CustomCarousel data={dataSponsors} title="SPONSORS" />
    </ScrollView>
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
