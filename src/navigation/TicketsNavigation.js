import { User } from "../screens/User"
import Checkout from "../screens/Checkout"
import CheckoutSucces from "../screens/CheckoutSucces"
import { Home } from "../screens/Home"
import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

export function TicketsNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="UserScreen" component={User} />
      <Stack.Screen
        name="Checkout"
        component={Checkout}
        options={{ headerShown: true, headerLeftLabelVisible: false }}
      />
      <Stack.Screen
        name="Checkout Succes"
        component={CheckoutSucces}
        options={{ headerShown: true, headerLeftLabelVisible: false }}
      />
    </Stack.Navigator>
  )
}

//yarn add @react-navigation/native-stack
