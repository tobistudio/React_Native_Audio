import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Screens from './Screens';
import { AppContext } from "./src/context/index";
import { useFonts } from 'expo-font';

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
