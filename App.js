import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { AppContext } from "./src/context/index";
import Login from './src/screens/Auth/Login';
import Signup from './src/screens/Auth/Signup';
import Welcome from './src/screens/Welcome/Welcome';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AppContext.Provider value={{}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome'>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
          <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
