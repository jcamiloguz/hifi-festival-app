import * as React from "react"

import Menu from "./src/navigation/Menu"
import CustomButtons from "./src/screens/Onboarding"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="OnboardingScreen" component={CustomButtons} />
        <Stack.Screen
          name="MenuScreen"
          component={Menu}
          options={{ headerShown: false, headerLeftLabelVisible: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
