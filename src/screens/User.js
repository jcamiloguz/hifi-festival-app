import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { Text, ScrollView } from "react-native"
import { Hero_tickets } from "../components/Hero_tickets"
import { Choose_tickets } from "../components/Choose_tickets"

export function User({ navigation, goToHome }) {
  return (
    <ScrollView>
      <Hero_tickets />
      <Choose_tickets />
    </ScrollView>
  )
}
