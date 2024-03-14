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
import AppColors from '../../../constants/colors/AppColors';
const ExchangeScreen = () => {
  return (
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
      <Image
        style={{ height: 300, width: '100%' }}
        source={require('../../../images/exchange.png')}
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
          Coming Soon
        </Text>
        <Text
          style={{
            fontFamily: 'Lato_400Regular',
            fontSize: 16,
            color: AppColors.black,
          }}
        >
          We are working on this feature.
        </Text>
      </View>
    </View>
  );
};

export default ExchangeScreen;
