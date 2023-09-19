import * as SplashScreen from 'expo-splash-screen';
import Routes from './src/routes';

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost'
import { useEffect } from 'react';

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  useEffect(() => {
    async function loadApp() {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
    }
    loadApp();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <Routes />
  );
}

