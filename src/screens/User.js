import { Choose_tickets } from "../components/Choose_tickets"
import { Hero_tickets } from "../components/Hero_tickets"
import React from "react"
import { ScrollView } from "react-native"

export function User({ navigation, goToHome }) {
  return (
    <ScrollView>
      <Hero_tickets />
      <Choose_tickets />
    </ScrollView>
  )
}
