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
                <Pressable onPress={() => navigation.navigate("Verification")} style={{ backgroundColor: "#007FFF", borderWidth: 1, borderColor: "#007FFF", padding: 10, borderRadius: 25, width: 300, width: "90%", marginVertical: 20 }}><Text style={{ color: "#007FFF", fontWeight: "bold", fontSize: 20, textAlign: "center" }}>Send</Text></Pressable>
            </View>
        </View>
    )
}

export default ForgotPassword