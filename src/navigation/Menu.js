import * as React from "react"

import { Artists } from "../screens/Artists"
import { Gallery } from "../screens/Gallery"
import { Home } from "../screens/Home"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import IconSecond from "react-native-vector-icons/FontAwesome"
import { NavigationContainer } from "@react-navigation/native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { User } from "../screens/User"
import { TicketsNavigation } from "../navigation/TicketsNavigation"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <SafeAreaProvider>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Artists"
          component={Artists}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="account-music" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Gallery"
          component={Gallery}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="view-carousel" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="User"
          component={TicketsNavigation}
          options={{
            tabBarLabel: "Tickets",
            tabBarIcon: ({ color, size }) => (
              <IconSecond name="ticket" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaProvider>
  )
}
