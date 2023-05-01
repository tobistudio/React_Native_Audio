import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Auth from './src/screens/Auth/Auth';
import Login from './src/screens/Auth/Login';
import Signup from './src/screens/Auth/Signup';
import Welcome from './src/screens/Welcome/Welcome';
import ChildData from './src/screens/ChildData/ChildData';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Screens = ({ }) => {

    const Stack = createNativeStackNavigator();
    const navigation = useNavigation();

    return (
        <Stack.Navigator initialRouteName='Welcome'>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
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
                headerShown: true, title: "", headerRight: () => (
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
                headerShown: true, title: "", headerLeft: () => (
                    <Pressable
                        focusable
                        style={styles.skipButton}
                        onPress={() => navigation.goBack()}
                    >
                        <Icon style={{ marginLeft: 4, marginTop: 2 }} name="arrow-left" size={14} color="#000" />
                    </Pressable>
                ),
            }} />
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