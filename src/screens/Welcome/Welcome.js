import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../../constants'

const Welcome = ({ navigation }) => {
  const [step, setStep] = React.useState(0)
  const slides = [
    {
      id: 1,
      image: require("./../../assets/images/Audio1.png"),
      heading: "Your child's name",
      text: "Immerse your child in a world of wonder, with their name in every story"
    },
    {
      id: 2,
      image: require("./../../assets/images/Audio2.png"),
      heading: "Bring your own voice",
      text: "Watch your child's face light up as they hear your voice in every story"
    },
    {
      id: 3,
      image: require("./../../assets/images/Audio3.png"),
      heading: "Endless entertainment",
      text: "From enchanted forests to mystical kingdoms, explore over 12000 audio tale combinations"
    },
    {
      id: 4,
      image: require("./../../assets/images/Audio4.png"),
      heading: "Downloadable stories",
      text: "Download your child's favorite stories and enjoy them anywhere, anytime"
    },
  ]
  return (
    <View style={styles.container}>
      {
        slides.map((item, index) => {
          return (
            <View key={index} style={{ display: step === index ? "flex" : "none" }}>
              <Image source={item.image} />
              <Text style={styles.text1}>{item.heading}</Text>
              <Text>{item.text}</Text>
            </View>
          )
        })
      }

      <Pressable onPress={() => step === 4 ? navigation.push("Auth") : setStep(step + 1)} style={styles.nextButton}><Text>Next</Text></Pressable>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
    display: "flex",
    flexDirection: "column",
    padding: 20,
  },
  header: {
    backgroundColor: "red",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "end",
  },
  text1: { fontWeight: "bold" },
  nextButton: {
    backgroundColor: COLORS.blue.light,
    color: COLORS.white.default,
    padding: 10,
    borderRadius: 5,
    width: 300,
  }

})

export default Welcome