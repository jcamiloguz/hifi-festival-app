import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { Text } from "react-native"
import { Location } from "../components/Location"

export function Home() {
  return (
    <SafeAreaView>
      <Location></Location>
    </SafeAreaView>
  )
}
