import React from 'react'
import { Text, View } from 'react-native'
import Navbar from '../../components/Navbar/Navbar'
import AudioComponent from './../../components/Audio/AudioComponent'
import TrendingComponent from '../../components/Trending/TrendingComponent'

const Home = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <Navbar />
            <View style={{ display: "flex", paddingHorizontal: 10, }}>
                <Text>Home</Text>
                <AudioComponent />
                <Text>Trending now</Text>
                <TrendingComponent />
            </View>
        </View>
    )
}

export default Home