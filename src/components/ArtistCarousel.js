import { ArtistsItem, ITEM_WIDTH, SLIDER_WIDTH } from "./ArtistsItem"
import { StyleSheet, View } from "react-native"

import Carousel from "react-native-snap-carousel"
import React from "react"

const data = [
  {
    name: "KANYE WEST",
    genre: `Rap`,
    description: `🐐 Best sampler and rapper of '00s`,
    imgUrl: require("../assets/img/Artists/kanye.jpeg"),
    instagram: "https://www.instagram.com/kanyewest/",
    spotify:
      "https://open.spotify.com/playlist/37i9dQZF1DZ06evO3nMr04?si=2f0647b0657d48c6&nd=1",
  },
  {
    name: "FRANK OCEAN",
    genre: `RNB`,
    description: `Frank is an American singer, songwriter, and rapper. He has been described as one of the greatest songwriters of his generation`,
    imgUrl: require("../assets/img/Artists/frank.jpeg"),
    instagram: "https://www.instagram.com/blonded/",
    spotify:
      "https://open.spotify.com/playlist/37i9dQZF1DXdyjMX5o2vCq?si=d84dae5743904bbc&nd=1",
  },
  {
    name: "BAD BUNNY",
    genre: `REGGAETON`,
    description: `Benito Antonio Martínez Ocasio, better known by his stage name Bad Bunny, is a Puerto Rican rapper, singer, and record producer. His music is often defined as Latin trap and reggaeton, but he has incorporated various other genres into his music`,
    imgUrl: require("../assets/img/Artists/badbunny.jpeg"),
    instagram: "https://www.instagram.com/badbunnypr/",
    spotify:
      "https://open.spotify.com/playlist/37i9dQZF1DX2apWzyECwyZ?si=76d0a28e6df64e72",
  },
  {
    name: "WOS",
    genre: `INDIE RAP`,
    description: `Starting as a freestyler, he won the Argentine competition of freestyle battle El Quinto Escalón on several occasions, achieving national recognition.He also won the FMS Argentina and the international tournament Red Bull Batalla de Gallos, both in 2018.`,
    imgUrl: require("../assets/img/Artists/wos.jpeg"),
    instagram: "https://www.instagram.com/wos.ds3/",
    spotify:
      "https://open.spotify.com/playlist/37i9dQZF1DX7FSN9zgNE0f?si=ef0735e360e742b8",
  },
  {
    name: "C. TANGANA",
    genre: `RAP`,
    description: `is a Spanish rapper from Madrid, Spain. He began his musical career in 2005 under the pseudonym Crema with a demo called Él Es Crema. Tangana has headlined the Primavera Sound festival. In 2020, he was named one of the most influential people and most creative artists in Spain by Forbes.`,
    imgUrl: require("../assets/img/Artists/ctangana.jpeg"),
    instagram: "https://www.instagram.com/c.tangana/",
    spotify:
      "https://open.spotify.com/playlist/37i9dQZF1DZ06evO3tJsDm?si=a1d9a33893d74985",
  },
]
export const ArtistsCarousel = () => {
  const isCarousel = React.useRef(null)
  return (
    <View style={styles.container}>
      <Carousel
        layout="default"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={ArtistsItem}
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
    marginTop: 50,
  },
})
