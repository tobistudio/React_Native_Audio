import React from 'react';
import { Image, Pressable, Switch, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Signup = ({ navigation }) => {

  const [signupData, setSignupData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
    agree: false
  })

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Image style={{ marginVertical: 0 }} source={require("./../../../assets/images/Audio3.png")} />
      <View style={{ borderTopEndRadius: 60, borderTopStartRadius: 60, backgroundColor: "white", width: "100%", height: "75%", position: "absolute", display: "flex", bottom: 0, alignItems: "center", justifyContent: "flex-start", paddingTop: 40, paddingHorizontal: 30 }}>
        <Text style={{ color: "#000", fontWeight: "400", fontSize: 25, width: "100%", textAlign: "left" }}>Get Started for free</Text>
        <TextInput
          style={{ height: 50, paddingLeft: 10, borderColor: '#B9B9B9', borderWidth: 1, borderRadius: 10, padding: 2, width: "100%", marginVertical: 10 }}
          placeholder="First Name"
          onChangeText={(e) => setSignupData({ ...signupData, firstName: e })}
          value={signupData.firstName}
        />
        <TextInput
          style={{ height: 50, paddingLeft: 10, borderColor: '#B9B9B9', borderWidth: 1, borderRadius: 10, padding: 2, width: "100%", marginVertical: 10 }}
          placeholder="Last Name"
          onChangeText={(e) => setSignupData({ ...signupData, lastName: e })}
          value={signupData.lastName}
        />
        <TextInput
          style={{ height: 50, paddingLeft: 10, borderColor: '#B9B9B9', borderWidth: 1, borderRadius: 10, padding: 2, width: "100%", marginVertical: 10 }}

          placeholder="Email"
          onChangeText={(e) => setSignupData({ ...signupData, email: e })}
          value={signupData.email}
        />
        <View style={{
          width: "100%", display: "flex", alignItems: "flex-start", justifyContent: "center", height: 50, paddingLeft: 10, borderColor: '#B9B9B9', borderWidth: 1, borderRadius: 10, padding: 2, position: "relative", marginVertical: 10
        }}
        >
          <TextInput
            style={{ width: "90%", }}
            placeholder="Password"
            onChangeText={(e) => setSignupData({ ...signupData, password: e })}
            value={signupData.password}
            secureTextEntry={!signupData.showPassword}
          />

          <Icon onPress={() => setSignupData({ ...signupData, showPassword: !signupData.showPassword })} style={{ position: "absolute", right: 15 }} name={signupData.showPassword ? "eye" : 'eye-slash'} size={20} color="#B9B9B9" />
        </View>

        <View style={{
          width: "100%", display: "flex", alignItems: "flex-start", justifyContent: "center", height: 50, paddingLeft: 10, borderColor: '#B9B9B9', borderWidth: 1, borderRadius: 10, padding: 2, position: "relative", marginVertical: 10
        }}
        >
          <TextInput
            style={{ width: "90%", }}
            placeholder="Confirm Password"
            onChangeText={(e) => setSignupData({ ...signupData, confirmPassword: e })}
            value={signupData.confirmPassword}
            secureTextEntry={!signupData.showPassword}
          />
          <Icon onPress={() => setSignupData({ ...signupData, showPassword: !signupData.showPassword })} style={{ position: "absolute", right: 15 }} name={signupData.showPassword ? "eye" : 'eye-slash'} size={20} color="#B9B9B9" />
        </View>
        <View style={{ display: "flex", marginVertical: 10, alignItems: "center", justifyContent: "flex-start", flexDirection: "row", width: "100%" }}>
          <Switch value={signupData.agree} onValueChange={(() => setSignupData({ ...signupData, agree: !signupData.agree }))} />
          <Text style={{ width: "90%" }}>I agree with the terms and conditions by creating an account</Text>
        </View>
        <Text style={{ width: "90%" }}>Already have an account? <Text onPress={() => navigation.navigate("Login")} style={{ color: "#007FFF" }}>Login</Text></Text>
        <Pressable onPress={() => navigation.navigate("ChildData")} style={{ backgroundColor: "white", borderWidth: 1, borderColor: "#007FFF", padding: 10, borderRadius: 25, width: 300, width: "90%", marginVertical: 20 }}><Text style={{ color: "#007FFF", fontWeight: "bold", fontSize: 20, textAlign: "center" }}>Signup</Text></Pressable>
      </View>
    </View>
  )
}

export default Signup