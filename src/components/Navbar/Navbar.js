import React from 'react'
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

const Navbar = () => {

    const [activeTheme, setActiveTheme] = React.useState({
        name: "All",
        label: "all",
        icon: "",
        hasSubThemes: false
    })
    const [activeSubTheme, setActiveSubTheme] = React.useState()
    const [showSubThemes, setShowSubThemes] = React.useState(false)

    const themes = [
        {
            name: "All",
            label: "all",
            icon: "",
            hasSubThemes: false
        },
        {
            name: "Emotional",
            label: "emotional",
            icon: "",
            hasSubThemes: true,
            subThemes: [
                {
                    name: "Friendship",
                    label: "friendship",
                    icon: ""
                }, {
                    name: "Empathy",
                    label: "empathy",
                    icon: ""
                }, {
                    name: "Compassion",
                    label: "compassion",
                    icon: ""
                }
            ]
        },
        {
            name: "Adventure",
            label: "adventure",
            icon: "",
            hasSubThemes: true,
            subThemes: [
                {
                    name: "Friendship",
                    label: "friendship",
                    icon: ""
                }, {
                    name: "Empathy",
                    label: "empathy",
                    icon: ""
                }, {
                    name: "Compassion",
                    label: "compassion",
                    icon: ""
                }
            ]
        },
        {
            name: "Personal Growth",
            label: "personal_growth",
            icon: "",
            hasSubThemes: false
        },
    ]

    return (
        <View style={{ width: "100%", paddingHorizontal: 20, paddingBottom: 5, paddingTop: 40, backgroundColor: "rgba(0, 127, 255, 0.66)", borderBottomStartRadius: 35, borderBottomEndRadius: 35, height: showSubThemes ? 201 : 180 }}>
            <View style={{ borderWidth: 40, borderColor: "rgba(217, 217, 217, 0.18)", borderRadius: 167, height: 167, width: 167, position: "absolute", top: -49, left: 267 }}></View>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <View style={{ display: "flex" }}>
                    <Text style={{ color: "white", fontWeight: "600", fontSize: 20 }}>Good Morning Aymen</Text>
                    <Text style={{ color: "black", fontWeight: "400", fontSize: 16 }}>What would you like to listen today ?</Text>
                </View>
                <View style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Image source={require("./../../assets/images/boy1.png")} style={{ backgroundColor: "#FAE3C1", width: 60, height: 60, borderRadius: 60 }} alt="Profile Image" />
                </View>
            </View>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal >
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingTop: 0,
                }}>
                    {
                        themes.map((theme, index) => (
                            <Pressable key={index} onPress={() => {
                                setActiveTheme(theme)
                                if (theme.hasSubThemes) {
                                    setShowSubThemes(true)
                                    setActiveSubTheme(theme.subThemes[0])
                                }
                            }}>
                                <View style={{ paddingHorizontal: 15, borderRadius: 18, marginHorizontal: 8, paddingVertical: 8, backgroundColor: activeTheme.label === theme.label ? "#FFB800" : "#21283F" }}>
                                    <Text style={{ margin: "auto", color: "white" }}>{theme.name}</Text>
                                </View>
                            </Pressable>
                        ))
                    }
                </View>
            </ScrollView>
            {
                showSubThemes && activeTheme.hasSubThemes && <View style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 8 }}>
                    <View style={{ backgroundColor: "white", height: 5, marginBottom: 10, borderRadius: 3, width: 75, margin: "auto" }}>
                    </View>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal >
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingTop: 0,
                        }}>
                            {
                                activeTheme.subThemes.map((subTheme, index) => (
                                    <Pressable key={index} onPress={() => {
                                        setActiveSubTheme(subTheme)
                                    }}>
                                        <View style={{ paddingHorizontal: 15, borderRadius: 18, marginHorizontal: 8, paddingVertical: 8, backgroundColor: activeSubTheme.label === subTheme.label ? "#FFB800" : "#21283F" }}>
                                            <Text style={{ margin: "auto", color: "white" }}>{subTheme.name}</Text>
                                        </View>
                                    </Pressable>
                                ))
                            }
                        </View>
                    </ScrollView>
                </View>
            }
        </View>
    )
}


export default Navbar