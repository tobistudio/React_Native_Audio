import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Text } from 'react-native';
import { AppContext } from "./src/context/index";
import Login from './src/screens/Auth/Login';
import Signup from './src/screens/Auth/Signup';
import Welcome from './src/screens/Welcome/Welcome';
import React from 'react'
import Auth from './src/screens/Auth/Auth'

const Stack = createNativeStackNavigator();

export default function App({ }) {

  const [step, setStep] = React.useState(0)
  return (
    <AppContext.Provider value={{
      step,
      setStep
    }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome'>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
          <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
          <Stack.Screen name="Welcome" component={Welcome} options={{
            headerShown: true, title: "", headerRight: () => (
              <Pressable
                focusable
                onPress={() => {
                  setStep(3)
                }}
              >
                <Text style={styles.skipButton} >Skip</Text>

              </Pressable>
            ),
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}


const styles = StyleSheet.create({
  skipButton: {

  }
})