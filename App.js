import * as React from "react"

import { Artists } from "./src/screens/Artists"
import { Gallery } from "./src/screens/Gallery"
import { Home } from "./src/screens/Home"
import { NavigationContainer } from "@react-navigation/native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { User } from "./src/screens/User"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Artists" component={Artists} />
          <Tab.Screen name="Gallery" component={Gallery} />
          <Tab.Screen name="User" component={User} />
        </Tab.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  )
}
