import { useFonts } from 'expo-font';
import { router, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Alert, Button } from 'react-native';
import 'react-native-reanimated';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="AllTeams" options={{ headerTitle: 'Add Team' }} />
      <Stack.Screen name="PremTeams" options={{ 
        headerTitle: 'My Teams',
        headerBackTitle: 'Back',
        headerRight: () => (
          <Button
            onPress={() => router.push('/AllTeams')}
            title="+"
          />
        )
      }} />
    </Stack>
  );
}