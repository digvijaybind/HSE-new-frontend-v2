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
import { useRoute, useNavigationState } from '@react-navigation/native';
import AppColors from '../colors/AppColors';

interface SpecialInputInterface {
  label: string;
  placeHolder: string;
  editable: boolean;
  right_icon?: any;
}
// Define a type to represent valid image sources for right_icon

const SpecialCustomInputScreen = ({
  data,
}: {
  data: SpecialInputInterface;
}) => {
  return (
    <View
      style={{
        width: '95%',
        marginRight: '2.5%',
        marginLeft: '2.5%',
        height: 60,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: AppColors.primaryColor,
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Text
        style={{
          fontFamily: 'Lato_400Regular',
          fontSize: 12,
          left: 10,
          color: AppColors.primaryColor,
          position: 'absolute',
          top: -10,
          backgroundColor: AppColors.white,
          zIndex: 99999,
        }}
      >
        {data.label}
      </Text>
      <TextInput
        style={{
          width: '94%',
          height: '100%',
          marginLeft: '3%',
          color: '#1D1B20',
          fontSize: 16,
          fontFamily: 'Lato_400Regular',
        }}
        id="password"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType={'default'}
        editable={data.editable}
        placeholder={data.placeHolder}
        placeholderTextColor={'#979797'}
        textContentType="password"
      />
      <TouchableOpacity
        style={{
          height: 40,
          width: 40,
          position: 'absolute',
          right: 5,
          bottom: 5,
        }}
      >
        <Image
          style={{
            width: '100%',
            height: '100%',
          }}
          source={data.right_icon}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default SpecialCustomInputScreen;
