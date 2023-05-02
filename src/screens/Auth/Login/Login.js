import React from 'react';
import { Image, Pressable, Switch, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = ({ navigation }) => {

  const [loginData, setLoginData] = React.useState({
    email: "",
    password: "",
    showPassword: false,
    rememberPass: false
  })

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Image style={{ marginVertical: 40 }} source={require("./../../../assets/images/Audio3.png")} />
      <View style={{ backgroundColor: "white", width: "100%", height: "50%", position: "absolute", display: "flex", bottom: 0, alignItems: "center", justifyContent: "flex-start", paddingTop: 20, paddingHorizontal: 30 }}>
        <TextInput
          style={{ height: 50, paddingLeft: 10, borderColor: '#B9B9B9', borderWidth: 1, borderRadius: 10, padding: 2, width: "100%", marginVertical: 10 }}

          placeholder="Email"
          onChangeText={(e) => setLoginData({ ...loginData, email: e })}
          value={loginData.email}
        />
        <View style={{
          width: "100%", display: "flex", alignItems: "flex-start", justifyContent: "center", height: 50, paddingLeft: 10, borderColor: '#B9B9B9', borderWidth: 1, borderRadius: 10, padding: 2, position: "relative", marginVertical: 10
        }}
        >
          <TextInput
            style={{ width: "90%", }}
            placeholder="Password"
            onChangeText={(e) => setLoginData({ ...loginData, password: e })}
            value={loginData.password}
            secureTextEntry={!loginData.showPassword}
          />

          <Icon onPress={() => setLoginData({ ...loginData, showPassword: !loginData.showPassword })} style={{ position: "absolute", right: 15 }} name={loginData.showPassword ? "eye" : 'eye-slash'} size={20} color="#B9B9B9" />
        </View>

        <View style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", flexDirection: "row", width: "100%" }}>
          <Switch value={loginData.agree} onValueChange={(() => setLoginData({ ...loginData, agree: !loginData.agree }))} />
          <Text style={{ width: "50%" }}>Remember Password</Text>
          <Text onPress={() => navigation.navigate("ForgotPassword")} style={{ color: "#007FFF" }}>Forgot Password ?</Text>
        </View>
        <Pressable onPress={() => navigation.navigate("Home")} style={{ backgroundColor: "#007FFF", borderWidth: 1, borderColor: "#007FFF", padding: 10, borderRadius: 25, width: 300, width: "90%", marginVertical: 10 }}><Text style={{ color: "white", fontWeight: "bold", fontSize: 20, textAlign: "center" }}>Send</Text></Pressable>
        <Text style={{ color: "#007FFF", width: "100%", textAlign: "center", marginVertical: 10 }}>or</Text>
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

export default Login