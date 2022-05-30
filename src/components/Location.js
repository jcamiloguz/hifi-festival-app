import { Dimensions, StyleSheet, Text, View } from "react-native"

import MapView from "react-native-maps"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"

export function Location() {
  return (
    <SafeAreaView>
      <Text style={styles.title}>When and Where?</Text>
      <View style={styles.locattion}>
        <Text style={styles.paragraphs}>Autocine Piedra Grande</Text>
        <Text style={styles.paragraphs}>19 de Junio del 2022</Text>
      </View>
      <MapView
        initialRegion={{
          latitude: 3.348150595105045,
          longitude: -76.52372054565333,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map}
      >
        <MapView.Marker
          coordinate={{
            latitude: 3.348150595105045,
            longitude: -76.52372054565333,
          }}
        />
      </MapView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 15,
  },
  locattion: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  paragraphs: {
    fontSize: 15,
  },
  map: {
    marginTop: 15,
    width: Dimensions.get("window").width,
    height: 300,
  },
})
