import React, { useContext } from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../../constants'
import { AppContext } from '../../context'

const Welcome = ({ navigation }) => {
  const { step, setStep } = useContext(AppContext)
  const slides = [
    {
      id: 0,
      image: require("./../../assets/images/Audio3.png"),
      heading: "Your child's name",
      text: "Immerse your child in a world of wonder, with their name in every story"
    },
    {
      id: 1,
      image: require("./../../assets/images/Audio1.png"),
      heading: "Bring your own voice",
      text: "Watch your child's face light up as they hear your voice in every story"
    },
    {
      id: 2,
      image: require("./../../assets/images/Audio2.png"),
      heading: "Endless entertainment",
      text: "From enchanted forests to mystical kingdoms, explore over 12000 audio tale combinations"
    },
    {
      id: 3,
      image: require("./../../assets/images/Audio4.png"),
      heading: "Downloadable stories",
      text: "Download your child's favorite stories and enjoy them anywhere, nytime"
    },
  ]

  return (
    <View style={styles.container}>
      {
        slides.map((item, index) => {
          return (
            <View key={index} style={{ display: step === index ? "flex" : "none" }}>
              <Image source={item.image} style={{ marginVertical: 20, marginTop: 50 }} />
              <Text style={{ fontWeight: "bold", fontSize: 34, textAlignVertical: 'center', textAlign: "center" }}>{item.heading}</Text>
              <Text style={{ marginVertical: 3 }}>{item.text}</Text>
            </View>
          )
        })
      }

      <Pressable onPress={() => step === 3 ? navigation.navigate("Auth") : setStep(step + 1)} style={styles.nextButton}><Text style={{ color: COLORS.white.default, fontWeight: "bold", fontSize: 20, textAlign: "center" }}>Next</Text></Pressable>
      <View style={{ flexDirection: "row", marginVertical: 5, display: "flex", alignItems: "center", justifyContent: "space-around" }}>
        {
          [0, 1, 2, 3].map((item, index) => {
            return (
              <View key={index} style={{ marginHorizontal: 2, width: 10, height: 10, borderRadius: 5, backgroundColor: step === index ? COLORS.purple.app : "#DADEEB" }}></View>
            )
          })
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    display: "flex",
    flexDirection: "column",
    paddingTop: 30,
    paddingHorizontal: 15
  },
  header: {
    backgroundColor: "red",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  nextButton: {
    backgroundColor: COLORS.blue.light,
    padding: 13,
    borderRadius: 25,
    width: 300,
    marginVertical: 20
  }

})

export default Welcome