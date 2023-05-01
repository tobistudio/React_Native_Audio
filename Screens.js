import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Auth from './src/screens/Auth/Auth';
import Login from './src/screens/Auth/Login/Login';
import Signup from './src/screens/Auth/Signup/Signup';
import ForgotPassword from './src/screens/Auth/ForgotPassword/ForgotPassword';
import Verification from './src/screens/Auth/ForgotPassword/Verification';
import NewPassword from './src/screens/Auth/ForgotPassword/NewPassword';
import Home from './src/screens/Home/Home';
import Welcome from './src/screens/Welcome/Welcome';
import ChildData from './src/screens/ChildData/ChildData';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Screens = ({ }) => {

    const Stack = createNativeStackNavigator();
    const navigation = useNavigation();

    return (
        <Stack.Navigator initialRouteName='Welcome'>
            <Stack.Screen name="Login" component={Login} options={{
                headerShown: true, headerTransparent: true, headerStyle: { paddingHorizontal: 0, backgroundColor: "transparent" }, headerShown: true, title: "",
                headerTitle: "Login"
            }} />
            <Stack.Screen name="Signup" component={Signup} options={{
                headerShown: true, title: "", headerTransparent: true, headerStyle: { paddingHorizontal: 0, backgroundColor: "transparent" }, headerLeft: () => (
                    <Pressable
                        focusable
                        style={styles.skipButton}
                        onPress={() => navigation.goBack()}
                    >
                        <Icon style={{ marginTop: 2 }} name="long-arrow-left" size={16} color="#000" />
                    </Pressable>
                ),
            }} />
            <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
            <Stack.Screen name="Welcome" component={Welcome} options={{
                headerShown: true, title: "", headerTransparent: true, headerStyle: { paddingHorizontal: 0, backgroundColor: "transparent" }, headerShown: true, title: "", headerRight: () => (
                    <Pressable
                        focusable
                        style={styles.skipButton}
                        onPress={() => navigation.navigate("Auth")}
                    >
                        <Text>Skip</Text>
                        <Icon style={{ marginLeft: 4, marginTop: 2 }} name="chevron-right" size={14} color="#000" />
                    </Pressable>
                ),
            }} />

            <Stack.Screen name="ChildData" component={ChildData} options={{
                headerShown: true, headerTitle: "", title: "", headerTransparent: true, headerStyle: { backgroundColor: "transparent" },
            }} />
            <Stack.Screen name="Verification" component={Verification} options={{ headerShown: true, headerTitle: "Verification", headerTransparent: true, headerStyle: { paddingHorizontal: 0, backgroundColor: "transparent" } }} />
            <Stack.Screen name="NewPassword" component={NewPassword} options={{ headerShown: true, headerTitle: "New Password", headerTransparent: true, headerStyle: { paddingHorizontal: 0, backgroundColor: "transparent" } }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false, headerTransparent: true, headerStyle: { paddingHorizontal: 0, backgroundColor: "transparent" } }} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: true, headerTransparent: true, headerStyle: { paddingHorizontal: 0, backgroundColor: "transparent" }, headerTitle: "Forgot Password", }} />
        </Stack.Navigator>
    )
}


const styles = StyleSheet.create({
    skipButton: {
        display: "flex",
        width: 40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
})

export default Screens