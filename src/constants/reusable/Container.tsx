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

interface ContainerInterface {
  title: string;
  right_icon?: any;
}
// Define a type to represent valid image sources for right_icon

const ContainerScreen = ({ data }: { data: ContainerInterface }) => {
  return (
    <View
      style={{
        width: '95%',
        marginRight: '2.5%',
        marginLeft: '2.5%',
        height: 60,
        borderWidth: 2,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: AppColors.primaryColor,
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Text
        style={{
          fontFamily: 'Lato_700Bold',
          fontSize: 20,
          lineHeight: 22,
          marginLeft: 10,
          color: AppColors.primaryColor,
        }}
      >
        {data.title}
      </Text>
      <TouchableOpacity
        style={{
          height: 28,
          width: 28,
          marginRight: 10,
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

export default ContainerScreen;
