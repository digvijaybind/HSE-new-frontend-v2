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
import AppColors from '../../../constants/colors/AppColors';

const BookMarkScreen = ({ navigation }: { navigation: any }) => {
  const bookMarkList = [];
  return (
    <View
      style={{
        backgroundColor: '#ffffff',
        width: '100%',
        height: '100%',
        position: 'relative',
      }}
    >
      <View
        style={{
          width: '100%',
          height: 115,
          backgroundColor: AppColors.primaryColor,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
      >
        <View
          style={{
            width: '90%',
            marginLeft: '5%',
            marginRight: '5%',
            flexDirection: 'row',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 5,
          }}
        >
          <View
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexDirection: 'row',
              gap: 10,
            }}
          >
            <TouchableOpacity
              style={{ maxHeight: 30, maxWidth: 30 }}
              onPress={() => {
                navigation.dispatch(DrawerActions.openDrawer);
              }}
            >
              <Image
                style={{ maxHeight: '100%', maxWidth: '100%' }}
                source={require('../../../images/hamburgerButton.png')}
                resizeMode="cover"
              />
            </TouchableOpacity>

            <Text
              style={{
                fontFamily: 'Lato_700Bold',
                fontSize: 32,
                color: AppColors.white,
                lineHeight: 34,
              }}
            >
              Hello, User
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexDirection: 'row',
              gap: 10,
            }}
          >
            <TouchableOpacity style={{ maxHeight: 23, maxWidth: 23 }}>
              <Image
                style={{ maxHeight: '100%', maxWidth: '100%' }}
                source={require('../../../images/search.png')}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ maxHeight: 23, maxWidth: 23 }}
              onPress={() => {
                navigation.navigate('notification');
              }}
            >
              <Image
                style={{ maxHeight: '100%', maxWidth: '100%' }}
                source={require('../../../images/notification.png')}
                resizeMode="cover"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView
        style={{ width: '100%', marginTop: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {bookMarkList.length === 0 && (
          <View
            style={{
              width: '80%',
              display: 'flex',
              marginRight: '10%',
              marginLeft: '10%',
              alignItems: 'center',
              flexDirection: 'column',
              marginTop: 50,
              gap: 40,
              marginBottom: 160,
            }}
          >
            <Text>Saved properties will Show up here</Text>
            <Image
              style={{ height: 300, width: '100%' }}
              source={require('../../../images/not_found.png')}
              resizeMode="cover"
            />
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'column',
                display: 'flex',
                gap: 30,
              }}
            >
              <Text
                style={{
                  fontFamily: 'Lato_700Bold',
                  fontSize: 32,
                  color: AppColors.black,
                }}
              >
                Sorry !
              </Text>
              <Text
                style={{
                  fontFamily: 'Lato_400Regular',
                  fontSize: 16,
                  color: AppColors.black,
                }}
              >
                No properties are listed to show
              </Text>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default BookMarkScreen;
