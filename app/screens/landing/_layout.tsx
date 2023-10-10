
import { Stack } from 'expo-router';


export default function Layout() {
  return (
    <Stack>
        <Stack.Screen name='LandingScreen' options={{
            headerShown : false,
        }}/>
       
    </Stack>
  )
}