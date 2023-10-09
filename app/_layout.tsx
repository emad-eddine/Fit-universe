import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useCallback} from "react"

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded, fontError] = useFonts({
    'OS_Black': require("./assets/fonts/OpenSans-Bold.ttf"),
    'OS_Medium': require("./assets/fonts/OpenSans-Medium.ttf"),
    'OS_Regular': require("./assets/fonts/OpenSans-Regular.ttf"),
    'OS_Light': require("./assets/fonts/OpenSans-Light.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return <Stack />;
}
