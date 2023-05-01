import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import Screens from './Screens';
import { AppContext } from "./src/context/index";

export default function App({ }) {

  const [step, setStep] = React.useState(0)
  return (
    <AppContext.Provider value={{
      step,
      setStep
    }}>
      <NavigationContainer>
        <Screens />
      </NavigationContainer>
    </AppContext.Provider>
  );
}
