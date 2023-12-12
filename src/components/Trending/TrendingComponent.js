import React from 'react'
import { Image, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const TrendingComponent = () => {
    return (
        <View style={{ display: "flex", borderRadius: 30, flexDirection: "row", height: 135, width: "100%", position: "relative", backgroundColor: "#57ABFF" }}>
            <View style={{ backgroundColor: "rgba(0, 0, 0, 0.8)", borderRadius: 30, width: 40, position: "absolute", left: 6, top: 6, height: 40, display: 'flex', alignItems: "center", justifyContent: "center" }}>
                <Icon name="play" size={20} color="#fff" style={{}} />
            </View>
            <View style={{ backgroundColor: "rgba(255, 255, 255, 0.3)", paddingHorizontal: 5, paddingVertical: 2, borderRadius: 30, position: "absolute", right: 6, top: 6, display: 'flex', alignItems: "center", justifyContent: "center" }}>
                <Text style={{ fontWeight: "500", fontSize: 14, color: "white" }}>Friendship</Text>
            </View>
            <Image source={require('./../../assets/images/deer.png')} style={{ borderRadius: 30, height: 135, width: 110, borderRadius: 30 }} />
            <View style={{ marginTop: 10, marginLeft: 7, display: "flex", width: "70%" }}>
                <Text style={{ color: "white", fontWeight: "bold", fontSize: 16, width: "70%" }}>Jason's Space Adventure with Friends</Text>
                <Text style={{ color: "white", fontSize: 14 }}>Jason's Space Adventure with Friends is a podcast that talks more about what helps children to socialize much.</Text>
            </View>
            <Text style={{ position: "absolute", bottom: 4, right: 20, fontWeight: "600", fontSize: 16, color: "white" }}>4min 30</Text>
        </View>
    )
}

export default TrendingComponent