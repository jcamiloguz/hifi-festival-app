import { Image, Text, TouchableOpacity, View } from "react-native"

import Button from "react-native-elements"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import IconSecond from "react-native-vector-icons/FontAwesome"
import Onboarding from "react-native-onboarding-swiper"
import React from "react"
import { useNavigation } from "@react-navigation/native"

const Square = ({ isLight, selected }) => {
  let backgroundColor
  if (isLight) {
    backgroundColor = selected ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.3)"
  } else {
    backgroundColor = selected ? "#fff" : "rgba(255, 255, 255, 0.5)"
  }
  return (
    <View
      style={{
        width: 6,
        height: 6,
        borderRadius: 50,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  )
}

const backgroundColor = (isLight) => (isLight ? "blue" : "lightblue")
const color = (isLight) => backgroundColor(!isLight)

const Done = ({ isLight, ...props }) => (
  <Button
    title={"Done"}
    buttonStyle={{
      backgroundColor: backgroundColor(isLight),
    }}
    containerViewStyle={{
      marginVertical: 10,
      width: 70,
      backgroundColor: backgroundColor(isLight),
    }}
    textStyle={{ color: color(isLight) }}
    {...props}
  />
)

const Skip = ({ isLight, skipLabel, ...props }) => (
  <Button
    title={"Skip"}
    buttonStyle={{
      backgroundColor: backgroundColor(isLight),
    }}
    containerViewStyle={{
      marginVertical: 10,
      width: 70,
    }}
    textStyle={{ color: color(isLight) }}
    {...props}
  >
    {skipLabel}
  </Button>
)

const Next = ({ isLight, ...props }) => (
  <Button
    title={"Next"}
    buttonStyle={{
      backgroundColor: backgroundColor(isLight),
    }}
    containerViewStyle={{
      marginVertical: 10,
      width: 70,
      backgroundColor: backgroundColor(isLight),
    }}
    textStyle={{ color: color(isLight) }}
    {...props}
  />
)

export default function CustomButtons({ navigation }) {
  const goToMenu = () => {
    navigation.navigate("MenuScreen", { screen: "Home" })
  }
  return (
    <Onboarding
      //   DotComponent={Square}
      //   NextButtonComponent={Next}
      //   SkipButtonComponent={Skip}
      onDone={goToMenu}
      //   titleStyles={{ color: "blue" }} // set default color for the title
      pages={[
        {
          backgroundColor: "#fff",
          image: <Icon name="home" size={80} />,
          title: "Home",
          subtitle: "Where you can find all the information about us",
        },
        {
          backgroundColor: "#fff",
          image: <Icon name="account-music" size={80} />,
          title: "Artists",
          subtitle:
            "This is where you cand find all the artist that will come to our festival.",
        },
        {
          backgroundColor: "#fff",
          image: <Icon name="view-carousel" size={80} />,
          title: "Gallery",
          subtitle: "All our past festivals and concerts.",
        },
        {
          backgroundColor: "#fff",
          image: <IconSecond name="ticket" size={80} />,
          title: "Tickets",
          subtitle: "Where you can buy your tickets.",
        },
      ]}
    />
  )
}
