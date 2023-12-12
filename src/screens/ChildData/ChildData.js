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

    const ages = [
        {
            name: "0-4",
            label: "0 - 4",
        },
        {
            name: "4-6",
            label: "4 - 6",
        },
        {
            name: "6-10",
            label: "6 - 10",
        },
        {
            name: "11-14",
            label: "11 - 14",
        },
    ]
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <Image style={{}} source={require("./../../assets/images/Audio3.png")} />
            <View style={{ position: "absolute", width: "100%", height: "80%", backgroundColor: "transparent", bottom: 0 }}>
                <View style={{ height: "25%", borderTopEndRadius: 60, borderTopStartRadius: 60, backgroundColor: "rgba(255, 255, 255, 0.8)", paddingTop: 20, opacity: 80 }}>
                    <Text style={{ fontWeight: "bold", textAlign: "center", marginTop: 15, fontSize: 32 }}>Let's create a wonderland for your child</Text>
                </View>
                <View style={{ width: "100%", backgroundColor: "white", height: "75%", display: "flex", alignItems: "center" }}>
                    <TextInput
                        style={{ height: 50, paddingLeft: 10, borderColor: '#B9B9B9', borderWidth: 1, borderRadius: 10, padding: 2, width: "90%", marginVertical: 0 }}
                        placeholder="Enter your kid's name"
                        onChangeText={(e) => setChildData({ ...childData, childName: e })}
                        value={childData.childName}
                    />
                    <View style={{ display: "flex", marginTop: 10, alignItems: "center", justifyContent: "space-around", flexDirection: "row", width: "100%" }}>
                        {
                            genders.map((gender, index) => {
                                return (
                                    <Pressable style={{ width: "40%" }} key={index} onPress={() => setChildData({ ...childData, gender: gender.name })}>
                                        <View style={{ padding: 10, width: "100%", backgroundColor: "rgba(227, 227, 227, 0.54)", paddingBottom: 0, display: "flex", alignItems: "center", borderRadius: 20, backgroundColor: "#e3e3e3", borderWidth: gender.name === childData.gender ? 2 : 0, borderColor: "#007FFF", borderStyle: "solid" }}>
                                            <Text style={{ fontWeight: "bold", fontSize: 18 }}>{gender.label}</Text>
                                            <Image source={gender.image} alt="" />
                                        </View>
                                    </Pressable>
                                )
                            })
                        }
                    </View>

                    <Text style={{ fontSize: 18, fontWeight: "500", marginTop: 20 }}>ChooseYour Age</Text>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        padding: 10,
                    }}>
                        {
                            ages.map((age, index) => {
                                return (

                                    <View style={{
                                        width: '48%',
                                        paddingVertical: 4,
                                        borderColor: '#007FFF',
                                        backgroundColor: childData.age === age.name ? "#007FFF" : "white",
                                        borderWidth: 1,
                                        marginBottom: 10,
                                        borderRadius: 20,
                                    }} key={index}>
                                        <Pressable onPress={() => setChildData({ ...childData, age: age.name })}>
                                            <Text style={{ textAlign: "center", fontSize: 18, color: childData.age === age.name ? "white" : "#007FFF", fontWeight: "500" }}>{age.label}</Text>
                                        </Pressable>
                                    </View>
                                )
                            })
                        }
                    </View>
                    <Pressable onPress={() => navigation.navigate("Home")} style={{ backgroundColor: "white", borderWidth: 1, borderColor: "#007FFF", padding: 10, borderRadius: 25, width: 300, width: "90%", marginVertical: 20 }}><Text style={{ color: "#007FFF", fontWeight: "bold", fontSize: 20, textAlign: "center" }}>Save</Text></Pressable>
                </View>
            </View>
        </View>
    )
}

export default ChildData