import React, { useCallback, useEffect, useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { useAuthListener } from '@/hooks/useAuthListener';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import * as SystemUI from 'expo-system-ui';
import { View } from 'react-native';
import { ProfileProvider } from '@/components/ProfileContext';
import { ThemeProvider } from '@/components/ThemeContext';
import { getAuthFromSecureStore } from '@/firebaseConfig';
import { logIn } from '@/services/firebaseAuthService';
import { downloadAvatars, downloadOtherImage } from '@/services/firebaseStorageService';

SystemUI.setBackgroundColorAsync('black');

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const router = useRouter();
  const { user, authLoading } = useAuthListener();
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [isAutoLoginChecked, setIsAutoLoginChecked] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    async function loadResources() {
      try {
        await Font.loadAsync({
          VT323Regular: require('../assets/fonts/VT323Regular.ttf'),
        });
      } catch (e) {
        console.warn('Error loading fonts:', e);
      } finally {
        setFontsLoaded(true);
      }
    }
    loadResources();
  }, []);

  useEffect(() => {
    async function checkAutoLogin() {
      try {
        const cachedAuth = await getAuthFromSecureStore();
        if (cachedAuth?.email && cachedAuth?.password) {
          await logIn(cachedAuth.email, cachedAuth.password);
        }
      } catch (error) {
        console.error('Auto-login failed:', error);
      } finally {
        setIsAutoLoginChecked(true);
      }
    }

    checkAutoLogin();
  }, []);

  useEffect(() => {
    async function cacheImages() {
      try {

        if (user) {
          await downloadAvatars();
          await downloadOtherImage('terminusF');
        }
      } catch (error) {
        console.error('Downloading images failed:', error);
      } finally {
        setImagesLoaded(true);
      }
    }
    
    if (user) {
      cacheImages();
    }
  }, []);

  useEffect(() => {
    if (!authLoading && fontsLoaded && isAutoLoginChecked && imagesLoaded) {
      if (user) {
        router.replace('/');
      } else {
        router.replace('/auth');
      }
    }
  }, [user, authLoading, fontsLoaded, isAutoLoginChecked, imagesLoaded, router]);

  const onLayoutRootView = useCallback(async () => {
    if (!authLoading && fontsLoaded && isAutoLoginChecked) {
      await SplashScreen.hideAsync();
    }
  }, [authLoading, fontsLoaded, isAutoLoginChecked]);

  if (!fontsLoaded || authLoading || !isAutoLoginChecked) {
    return null;
  }

  return (
    <ThemeProvider>
      <ProfileProvider>
        <View onLayout={onLayoutRootView} style={{ flex: 1, backgroundColor: 'black' }}>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false, animation: 'none' }} />
            <Stack.Screen name="game" options={{ headerShown: false, animation: 'none' }} />
            <Stack.Screen name="profile" options={{ headerShown: false, animation: 'none' }} />
            <Stack.Screen name="auth" options={{ headerShown: false, animation: 'none' }} />
            <Stack.Screen name="store" options={{ headerShown: false, animation: 'none' }} />
          </Stack>
        </View>
      </ProfileProvider>
    </ThemeProvider>
  );
};

export default RootLayout;
