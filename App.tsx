/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useCallback, useEffect, useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import { Righteous_400Regular } from '@expo-google-fonts/righteous';
import {
  Sora_100Thin,
  Sora_200ExtraLight,
  Sora_300Light,
  Sora_400Regular,
  Sora_500Medium,
  Sora_600SemiBold,
  Sora_700Bold,
  Sora_800ExtraBold,
} from '@expo-google-fonts/sora';
import { Ramaraja_400Regular } from '@expo-google-fonts/ramaraja';
import * as SplashScreen from 'expo-splash-screen';
import { Asset } from 'expo-asset';
import { loadAsync, useFonts } from 'expo-font';
import Route from './src/navigations/Router';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// import MainNavigator from './src/navigations/MainNavigation';
import { UserDataProvider, loginContext } from './src/context/LoginProvider';
import { RootNavigation } from './src/navigations/Tab';
import { StackNavigator } from './src/navigations/MainNavigation';

SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();
export default function App() {
  const { userData, updateUserData } = loginContext();
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const [assets, setAssets] = useState<Asset[]>([]);

  const [loaded, error] = useFonts({
    Lato_400Regular,
    Lato_700Bold,

    Righteous_400Regular,
    Sora_100Thin,
    Sora_200ExtraLight,
    Sora_300Light,
    Sora_400Regular,
    Sora_500Medium,
    Sora_600SemiBold,
    Sora_700Bold,
    Sora_800ExtraBold,
    Ramaraja_400Regular,
  });

  const loadAssetsAsync = async () => {
    const asset = await Asset.loadAsync([require('./assets/icon.png')]);
    await loadAsync({
      Lato_400Regular,
      Lato_700Bold,
      Righteous_400Regular,
      Sora_100Thin,
      Sora_200ExtraLight,
      Sora_300Light,
      Sora_400Regular,
      Sora_500Medium,
      Sora_600SemiBold,
      Sora_700Bold,
      Sora_800ExtraBold,
      Ramaraja_400Regular,
      //
    });
    return asset;
  };

  useEffect(() => {
    loadAssetsAsync()
      .then((a) => {
        setAssets(a);
        setAssetsLoaded(true);
      })
      .catch((e) => {
        console.log(e);
        setAssetsLoaded(false);
      });
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (assetsLoaded && loaded) {
      await SplashScreen.hideAsync();
    }
  }, [assetsLoaded, loaded]);

  if (!assetsLoaded && !loaded) {
    return null;
  }

  const MainNavigator = () => {
    const { userData, updateUserData } = loginContext();
    return userData.hasLoggedIn ? <RootNavigation /> : <StackNavigator />;
  };

  return (
    <UserDataProvider>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <StatusBar backgroundColor="transparent" translucent={true} />

        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </View>
    </UserDataProvider>
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
