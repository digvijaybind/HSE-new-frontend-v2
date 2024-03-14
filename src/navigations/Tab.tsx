import { Image, TouchableOpacity, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import HomeScreen from '../screens/general/home/Home';
import BookMarkScreen from '../screens/general/bookmark/BookMark';
import UserProfileScreen from '../screens/general/myProfile/MyProfile';
import AppColors from '../constants/colors/AppColors';
import React, {
  useState,
  useMemo,
  useEffect,
  Children,
  useCallback,
  useRef,
} from 'react';
import NotificationScreen from '../screens/general/notification/Notification';
import SettingsScreen from '../screens/general/settings/Settings';
import DrawerContent from '../components/DrawerContent';
import PortfolioScreen from '../screens/general/portfolio/Portfolio';
import PropertyDetailsScreen from '../screens/general/propertyDetails/PropertyDetails';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabel: '',
        tabBarStyle: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          height: 60,
          borderRadius: 120,
          backgroundColor: AppColors.primaryColor,
          position: 'absolute',
          bottom: 10,
          width: '90%',
          marginLeft: '5%',
          marginRight: '5%',
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        options={{
          headerStatusBarHeight: 5,
          headerTitle: '',
          headerTransparent: true,
          tabBarIcon: ({ focused }) => (
            <Image
              style={{ height: 40, width: 40, marginTop: 15 }}
              source={
                focused
                  ? require('../../src/images/home_focus.png')
                  : require('../../src/images/home_unfocus.png')
              }
              resizeMode="contain"
            />
          ),
        }}
        name="home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              style={{ height: 40, width: 40, marginTop: 15 }}
              source={
                focused
                  ? require('../../src/images/portfolio_focus.png')
                  : require('../../src/images/portfolio_unfocus.png')
              }
              resizeMode="contain"
            />
          ),
        }}
        name="portfolio"
        component={PortfolioScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              style={{ height: 40, width: 40, marginTop: 15 }}
              source={
                focused
                  ? require('../../src/images/bookmark_focus.png')
                  : require('../../src/images/bookmark_unfocus.png')
              }
              resizeMode="contain"
            />
          ),
        }}
        name="bookmark"
        component={BookMarkScreen}
      />

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              style={{ height: 40, width: 40, marginTop: 15 }}
              source={
                focused
                  ? require('../../src/images/user_profile_focus.png')
                  : require('../../src/images/user_profile_unfocus.png')
              }
              resizeMode="contain"
            />
          ),
        }}
        name="profile"
        component={UserProfileScreen}
      />
    </Tab.Navigator>
  );
};

export function DrawerNavigation() {
  const navigation = useNavigation();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent navigation={navigation} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#006B6B',
          width: 230,
          borderBottomRightRadius: 32,
        },
      }}
    >
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="hometabs"
        component={Tabs}
      ></Drawer.Screen>
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="settings"
        component={SettingsScreen}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
}

export function RootNavigation() {
  return (
    <Stack.Navigator initialRouteName="tabsdrawer">
      <Stack.Screen
        name="tabsdrawer"
        component={DrawerNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="notification"
        component={NotificationScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="propertyDetails"
        component={PropertyDetailsScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
