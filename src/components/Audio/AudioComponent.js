import React from 'react'
import { ImageBackground, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const AudioComponent = () => {
    return (
        <ImageBackground
            source={require('./../../assets/images/deer.png')}
            style={{ borderRadius: 20, padding: 10, position: "relative", overflow: "hidden", resizeMode: "cover", height: 164, width: 255 }}>
            <View style={{ backgroundColor: "rgba(0, 0, 0, 0.8)", borderRadius: 30, width: 40, position: "absolute", left: 6, top: 6, height: 40, display: 'flex', alignItems: "center", justifyContent: "center" }}>
                <Icon name="play" size={20} color="#fff" style={{}} />
            </View>
            <View style={{ backgroundColor: "rgba(255, 255, 255, 0.3)", paddingHorizontal: 10, paddingVertical: 4, borderRadius: 30, position: "absolute", right: 6, top: 6, display: 'flex', alignItems: "center", justifyContent: "center" }}>
                <Text style={{ fontWeight: "500", fontSize: 18, color: "white" }}>Friendship</Text>
            </View>
            <View style={{ backgroundColor: "rgba(255, 255, 255, 0.4)", width: 255, height: 60, paddingVertical: 4, borderRadius: 20, position: "absolute", bottom: 0, display: 'flex', paddingHorizontal: 7, }}>
                <Text style={{ fontWeight: "500", fontSize: 16, color: "white" }}>Jason's space Adventure With Friends</Text>
                <Text style={{ position: "absolute", bottom: 1, right: 10, fontWeight: "600", fontSize: 16, color: "white" }}>4min 30</Text>
            </View>


        </ImageBackground>
    )
}

export default AudioComponent