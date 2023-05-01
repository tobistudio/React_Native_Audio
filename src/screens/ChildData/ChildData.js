import React, { useState } from 'react'
import { Image, Pressable, Text, TextInput, View } from 'react-native'

const ChildData = ({ navigation }) => {

    const [childData, setChildData] = useState({
        childName: "",
        gender: "",
        age: "",
    })

    const genders = [
        {
            name: "girl",
            label: "Girl",
            image: require("./../../assets/images/girl.png")
        },
        {
            name: "boy",
            label: "Boy",
            image: require("./../../assets/images/boy.png")
        },
    ]
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <Image style={{}} source={require("./../../assets/images/Audio3.png")} />
            <View style={{ position: "absolute", width: "100%", height: "80%", backgroundColor: "transparent", bottom: 0 }}>
                <View style={{ height: "25%", borderTopEndRadius: 60, borderTopStartRadius: 60, backgroundColor: "rgba(255, 255, 255, 0.8)", paddingTop: 20, opacity: 80 }}>
                    <Text style={{ fontWeight: "bold", textAlign: "center", marginTop: 20, fontSize: 32 }}>Let's create a wonderland for your child</Text>
                </View>
                <View style={{ width: "100%", backgroundColor: "white", height: "75%", display: "flex", alignItems: "center" }}>
                    <TextInput
                        style={{ height: 50, paddingLeft: 10, borderColor: '#B9B9B9', borderWidth: 1, borderRadius: 10, padding: 2, width: "90%", marginVertical: 10 }}
                        placeholder="Enter your kid's name"
                        onChangeText={(e) => setChildData({ ...childData, childName: e })}
                        value={childData.childName}
                    />
                    <View style={{ display: "flex", marginTop: 20, alignItems: "center", justifyContent: "space-around", flexDirection: "row", width: "100%" }}>
                        {
                            genders.map((gender, index) => {
                                return (
                                    <Pressable key={index} onPress={() => setChildData({ ...childData, gender: gender.name })}>
                                        <View style={{ padding: 10, paddingBottom: 0, display: "flex", alignItems: "center", borderRadius: 20, backgroundColor: "#e3e3e3", borderWidth: gender.name === childData.gender ? 2 : 0, borderColor: "#007FFF", borderStyle: "solid" }}>
                                            <Text style={{ fontWeight: "bold", fontSize: 18 }}>{gender.label}</Text>
                                            <Image source={gender.image} alt="" />
                                        </View>
                                    </Pressable>
                                )
                            })
                        }
                    </View>
                </View>

            </View>
        </View>
    )
}

export default ChildData