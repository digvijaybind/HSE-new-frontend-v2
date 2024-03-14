import React, {
  useState,
  useMemo,
  useEffect,
  Children,
  useCallback,
  useRef,
} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Platform,
  StatusBar,
  Pressable,
  Image,
  FlatList,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import CheckBox from 'expo-checkbox';
import { Picker } from '@react-native-picker/picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import AppColors from '../constants/colors/AppColors';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { loginContext } from '../context/LoginProvider';

function DrawerContent({ navigation }: { navigation: any }, props: any) {
  const { userData, updateUserData } = loginContext();
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            marginLeft: 30,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <View
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                gap: 50,
              }}
            >
              <Text
                style={{
                  fontFamily: 'Lato_700Bold',
                  fontSize: 32,
                  letterSpacing: -0.24,

                  color: AppColors.white,
                }}
              >
                User A
              </Text>
              <TouchableOpacity
                style={{}}
                onPress={() => {
                  navigation.dispatch(DrawerActions.closeDrawer);
                }}
              >
                <Image
                  style={{ height: 15, width: 15 }}
                  source={require('../../src/images/close_drawer.png')}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{ marginTop: 40 }}
              onPress={() => {
                navigation?.navigate('profile');
              }}
            >
              <Text
                style={{
                  fontFamily: 'Lato_700Bold',
                  fontSize: 24,

                  color: AppColors.white,
                }}
              >
                My Profile
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginTop: 20 }}
              onPress={() => {
                navigation?.navigate('profile');
              }}
            >
              <Text
                style={{
                  fontFamily: 'Lato_700Bold',
                  fontSize: 24,

                  color: AppColors.white,
                }}
              >
                View Investments
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginTop: 20 }}
              onPress={() => {
                navigation?.navigate('profile');
              }}
            >
              <Text
                style={{
                  fontFamily: 'Lato_700Bold',
                  fontSize: 24,

                  color: AppColors.white,
                }}
              >
                Documents
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginTop: 20 }}
              onPress={() => {
                navigation?.navigate('profile');
              }}
            >
              <Text
                style={{
                  fontFamily: 'Lato_700Bold',
                  fontSize: 24,

                  color: AppColors.white,
                }}
              >
                Refer a Friend
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginTop: 20 }}
              onPress={() => {
                navigation?.navigate('profile');
              }}
            >
              <Text
                style={{
                  fontFamily: 'Lato_700Bold',
                  fontSize: 24,

                  color: AppColors.white,
                }}
              >
                Privacy Policy
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginTop: 20 }}
              onPress={() => {
                navigation?.navigate('profile');
              }}
            >
              <Text
                style={{
                  fontFamily: 'Lato_700Bold',
                  fontSize: 24,

                  color: AppColors.white,
                }}
              >
                Help & Support
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginTop: 20 }}
              onPress={() => {
                navigation?.navigate('profile');
              }}
            >
              <Text
                style={{
                  fontFamily: 'Lato_700Bold',
                  fontSize: 24,

                  color: AppColors.white,
                }}
              >
                FAQ
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginTop: 20 }}
              onPress={() => {
                navigation?.navigate('profile');
              }}
            >
              <Text
                style={{
                  fontFamily: 'Lato_700Bold',
                  fontSize: 24,

                  color: AppColors.white,
                }}
              >
                Key Risks
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginTop: 20 }}
              onPress={() => {
                navigation?.navigate('settings');
              }}
            >
              <Text
                style={{
                  fontFamily: 'Lato_700Bold',
                  fontSize: 24,

                  color: AppColors.white,
                }}
              >
                Settings
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </DrawerContentScrollView>
      <TouchableOpacity
        style={{ marginBottom: 30, marginLeft: 30 }}
        onPress={() => {
          updateUserData({ ...userData, hasLoggedIn: false });
        }}
      >
        <Text
          style={{
            fontFamily: 'Lato_700Bold',
            fontSize: 24,

            color: AppColors.white,
          }}
        >
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default DrawerContent;
