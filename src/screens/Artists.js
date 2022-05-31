import { ArtistsCarousel } from "../components/ArtistCarousel"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"

export function Artists() {
  return (
    <SafeAreaView>
      <ArtistsCarousel />
    </SafeAreaView>
  )
}
