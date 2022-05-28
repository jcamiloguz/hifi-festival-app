import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { Text, StyleSheet, View, Animated } from "react-native"
import { Hero_main } from "../components/Hero_main"
import { Playlist } from "../components/Playlist"

export function Home() {
  return (
    <SafeAreaView>
      <Hero_main />
      <Playlist />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({})
