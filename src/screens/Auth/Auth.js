import React from 'react'
import { Image, Text, View } from 'react-native'

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
    <View style={{ flex: 1 }}>
      <Image style={{ marginVertical: 40 }} source={require("./../../assets/images/Audio3.png")} />
      <View style={{ borderTopEndRadius: 60, borderTopStartRadius: 60, boxShadow: "", backgroundColor: "white", width: "100%", height: "60%", position: "absolute", display: "flex", bottom: 0, alignItems: "center", justifyContent: "center" }}>
        <View style={{ display: "flex" }}>
          {
            methods.map((method, index) => (
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "start", display: "flex" }}>
                <Image style={{ width: 30, height: 30, marginHorizontal: 20 }} source={method.icon} />
                <Text style={{ fontSize: 20, fontWeight: "bold", marginVertical: 20 }}>{method.title}</Text>
              </View>
            ))
          }
        </View>
      </View>
    </View>
  )
}

export default Auth