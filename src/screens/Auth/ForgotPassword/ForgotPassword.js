import React from 'react';
import { Image, Pressable, Switch, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ForgotPassword = ({ navigation }) => {

    const [email, setEmail] = React.useState("")

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <Image style={{ marginVertical: 40 }} source={require("./../../../assets/images/Audio3.png")} />
            <View style={{ backgroundColor: "white", width: "100%", height: "45%", position: "absolute", display: "flex", bottom: 0, alignItems: "center", justifyContent: "flex-start", paddingTop: 40, paddingHorizontal: 30 }}>
                <Text style={{ fontWeight: "500", fontSize: 18, marginVertical: 10 }}>Enter Email Address</Text>
                <TextInput
                    style={{ height: 50, paddingLeft: 20, borderColor: '#B9B9B9', borderWidth: 1, borderRadius: 30, padding: 2, width: "100%", marginVertical: 10 }}
                    placeholder="Email"
                    onChangeText={(e) => setEmail(e)}
                    value={email}
                />
                <Pressable onPress={() => navigation.navigate("Verification")} style={{ backgroundColor: "#007FFF", borderWidth: 1, borderColor: "#007FFF", padding: 10, borderRadius: 25, width: 300, width: "90%", marginVertical: 20 }}><Text style={{ color: "white", fontSize: 16, textAlign: "center" }}>Get Verification Code</Text></Pressable>
                <View style={{ display: "flex", flexDirection: "row", width: "100%", alignItems: "center", justifyContent: "center" }}>
                    <View style={{ display: "flex", marginHorizontal: 3, alignItems: "center", justifyContent: "center", backgroundColor: "black", width: 40, height: 40, borderRadius: 40 }}>
                        <Icon name="facebook" size={20} color={"white"} />
                    </View>
                    <View style={{ display: "flex", marginHorizontal: 3, alignItems: "center", justifyContent: "center", backgroundColor: "black", width: 40, height: 40, borderRadius: 40 }}>
                        <Icon name="google" size={20} color={"white"} />
                    </View>
                    <View style={{ display: "flex", marginHorizontal: 3, alignItems: "center", justifyContent: "center", backgroundColor: "black", width: 40, height: 40, borderRadius: 40 }}>
                        <Icon name="twitter" size={20} color={"white"} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ForgotPassword