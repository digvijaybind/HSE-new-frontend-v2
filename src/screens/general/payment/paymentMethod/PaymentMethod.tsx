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
import AppColors from '../../../../constants/colors/AppColors';

const PaymentScreen = ({ navigation }: { navigation: any }) => {
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
          width: '95%',
          marginLeft: '5%',
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ marginTop: 80 }}
        >
          <Image
            style={{ height: 40, width: 40 }}
            source={require('../../../../images/back_arrow.png')}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{ width: '100%' }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            gap: 100,
          }}
        >
          <View
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
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
              Notifications
            </Text>
            <Text
              style={{
                fontFamily: 'Lato_400Regular',
                fontSize: 20,

                color: '#5A5A5A',
              }}
            >
              There are no new notifications.
            </Text>
          </View>
          <Image
            style={{ height: 200, width: 200 }}
            source={require('../../../../images/empty_notification.png')}
            resizeMode="cover"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default PaymentScreen;
