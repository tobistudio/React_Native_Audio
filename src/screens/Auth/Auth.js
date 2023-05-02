import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'

const Auth = ({ navigation }) => {

  const methods = [
    {
      title: "Continue with Google",
      icon: require("../../assets/images/socials/social-logo3.png"),
    },
    {
      title: "Continue with Facebook",
      icon: require("../../assets/images/socials/social-logo1.png"),
    },
    {
      title: "Continue with Twitter",
      icon: require("../../assets/images/socials/social-logo2.png"),
    },
  ]

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Image style={{ marginVertical: 40 }} source={require("./../../assets/images/Audio3.png")} />
      <View style={{ borderTopEndRadius: 60, borderTopStartRadius: 60, backgroundColor: "white", width: "100%", height: "60%", position: "absolute", display: "flex", bottom: 0, alignItems: "center", justifyContent: "space-between", paddingTop: 30 }}>
        <View style={{ display: "flex" }}>
          {
            methods.map((method, index) => (
              <View key={index} style={{ border: 1, borderColor: "rgba(185, 185, 185, 0.26)", marginVertical: 10, borderRadius: 30, paddingHorizontal: 20, borderWidth: 1, flexDirection: "row", alignItems: "center", justifyContent: "flex-start", display: "flex" }}>
                <Image style={{ width: 30, height: 30, marginHorizontal: 20 }} source={method.icon} />
                <Text style={{ fontSize: 17, marginVertical: 20 }}>{method.title}</Text>
              </View>
            ))
          }
        </View>
        <View style={{ marginVertical: 10, position: "relative", width: "90%", borderBottomColor: "rgba(185, 185, 185, 0.5)", borderWidth: 1, }}>
          <Text style={{ fontSize: 20, color: "rgba(185, 185, 185, 0.5)", textAlign: "center", backgroundColor: "white", width: 30, left: "45%", position: "absolute", bottom: -30, fontWeight: "bold", marginVertical: 20 }}>or</Text>
        </View>
        <Pressable onPress={() => navigation.navigate("Signup")} style={{ backgroundColor: "white", borderWidth: 1, borderColor: "#007FFF", padding: 10, borderRadius: 25, width: 300, width: "90%", marginVertical: 20 }}><Text style={{ color: "#007FFF", fontWeight: "bold", fontSize: 20, textAlign: "center" }}>Continue with E-mail</Text></Pressable>
      </View>
    </View>
  )
}

export default Auth