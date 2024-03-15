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

interface CommonButtonInterface {
  title: string;
  height: any;
  width: any;
  doPress: any;
}
// Define a type to represent valid image sources for right_icon

const CommonButtonScreen = ({ data }: { data: CommonButtonInterface }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: AppColors.primaryColor,
        width: data.width,
        height: data.height,
        borderRadius: 12,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={data.doPress}
    >
      <Text
        style={{
          color: AppColors.white,
          fontFamily: 'Lato_700Bold',
          fontSize: 20,
        }}
      >
        {data.title}
      </Text>
    </TouchableOpacity>
  );
};

export default CommonButtonScreen;
