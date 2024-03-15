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
  description: string;
  right_icon: any[];
}
// Define a type to represent valid image sources for right_icon

const BoxScreen = ({ data }: { data: ContainerInterface }) => {
  const [hasCollapse, setHasCollapse] = useState(false);
  return (
    <View
      style={{
        backgroundColor: AppColors.white,
        width: '95%',
        marginRight: '2.5%',
        marginLeft: '2.5%',
        maxHeight: 180,
        minHeight: 90,
        borderWidth: 2,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',

        alignItems: 'center',
        borderColor: '#D9D9D9',
        position: 'relative',
        zIndex: 1,
        paddingTop: 15,
        paddingBottom: 15,
      }}
    >
      <View
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontFamily: 'Lato_700Bold',
            fontSize: 14,
            lineHeight: 20,
            letterSpacing: 0.1,
            marginLeft: 20,
            color: AppColors.black,
          }}
        >
          {data.title}
        </Text>

        {!hasCollapse && (
          <TouchableOpacity
            onPress={() => {
              setHasCollapse(true);
            }}
            style={{ marginRight: 20 }}
          >
            <Image
              style={{ height: 20, width: 20 }}
              source={data.right_icon[0]}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
        {hasCollapse && (
          <TouchableOpacity
            onPress={() => {
              setHasCollapse(false);
            }}
            style={{ marginRight: 10 }}
          >
            <Image
              style={{ height: 40, width: 40 }}
              source={data.right_icon[1]}
              resizeMode="cover"
            />
          </TouchableOpacity>
        )}
      </View>
      {hasCollapse && (
        <View style={{ marginLeft: 10, marginTop: 20, maxWidth: '90%' }}>
          <Text
            style={{
              fontFamily: 'Lato_700Bold',
              fontSize: 14,
              lineHeight: 20,
              letterSpacing: 0.1,
              color: AppColors.black,
            }}
          >
            {data.description}
          </Text>
        </View>
      )}
    </View>
  );
};

export default BoxScreen;
