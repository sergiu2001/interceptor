// app/_layout.tsx
import React from 'react';
import { Stack, useRouter } from 'expo-router';
import { useAuthListener } from '../hooks/useAuthListener';

const RootLayout = () => {
  const router = useRouter();
  const { user, authLoading } = useAuthListener();

  React.useEffect(() => {
    if (!authLoading) {
      if (user) {
        router.replace('/');
      } else {
        router.replace('/auth');
      }
    }
  }, [user, authLoading, router]);

  if (authLoading) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false, animation: 'none' }} />
      <Stack.Screen name="game" options={{ headerShown: false, animation: 'none' }} />
      <Stack.Screen name="profile" options={{ headerShown: false, animation: 'none' }} />
      <Stack.Screen name="auth" options={{ headerShown: false, animation: 'none' }} />
    </Stack>
  );
};

export default RootLayout;
