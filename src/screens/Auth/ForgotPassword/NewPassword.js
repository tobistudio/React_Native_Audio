import React from 'react';
import { Image, Pressable, Switch, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const NewPassword = ({ navigation }) => {

    const [newPasswordData, setNewPasswordData] = React.useState({
        newPassword: "",
        confirmPassword: "",
    })

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <Image style={{ marginVertical: 40 }} source={require("./../../../assets/images/Audio3.png")} />
            <View style={{ backgroundColor: "white", width: "100%", height: "50%", position: "absolute", display: "flex", bottom: 0, alignItems: "center", justifyContent: "flex-start", paddingTop: 20, paddingHorizontal: 30 }}>
                <TextInput
                    style={{ height: 50, paddingLeft: 20, borderColor: '#B9B9B9', borderWidth: 1, borderRadius: 30, padding: 2, width: "100%", marginVertical: 10 }}
                    placeholder="New Password"
                    onChangeText={(e) => setNewPasswordData({ ...newPasswordData, newPassword: e })}
                    value={newPasswordData.newPassword}
                />
                <TextInput
                    style={{ height: 50, paddingLeft: 20, borderColor: '#B9B9B9', borderWidth: 1, borderRadius: 30, padding: 2, width: "100%", marginVertical: 10 }}
                    placeholder="Confirm Password"
                    onChangeText={(e) => setNewPasswordData({ ...newPasswordData, confirmPassword: e })}
                    value={newPasswordData.confirmPassword}
                />
                <Pressable onPress={() => navigation.navigate("ChildData")} style={{ backgroundColor: "#007FFF", borderWidth: 1, borderColor: "#007FFF", padding: 10, borderRadius: 25, width: 300, width: "90%", marginVertical: 10 }}><Text style={{ color: "white", fontWeight: "bold", fontSize: 20, textAlign: "center" }}>Send</Text></Pressable>

            </View>
        </View>
    )
}

export default NewPassword