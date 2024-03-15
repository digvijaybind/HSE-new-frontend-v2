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
import ContainerScreen from '../../../../constants/reusable/Container';
import BoxScreen from '../../../../constants/reusable/Box';
const FaqsScreen = () => {
  const [hasToggle, setHasToggle] = useState(false);
  const [hasToggleOne, setHasToggleOne] = useState(false);
  return (
    <>
      <View
        style={{
          marginTop: 20,
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'flex-start',
          width: '100%',
        }}
      >
        <View
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontFamily: 'Lato_700Bold',
              fontSize: 16,
              lineHeight: 24,
              letterSpacing: 0.1,
              color: AppColors.black,
            }}
          >
            Frequently Asked
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontFamily: 'Lato_700Bold',
                fontSize: 16,
                lineHeight: 24,
                color: AppColors.primaryColor,
              }}
            >
              View all
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 20,
            gap: 15,
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'flex-start',
            width: '100%',
          }}
        >
          <BoxScreen
            data={{
              title: 'Question 1?',
              description:
                'People asked us how to go about this investment with Hse',
              right_icon: [
                require('../../../../../src/images/plus_icon.png'),
                require('../../../../../src/images/minus_icon.jpeg'),
              ],
            }}
          />
          <BoxScreen
            data={{
              title: 'Question 2?',
              description:
                'People asked us how to go collect loans for this investment with Hse',
              right_icon: [
                require('../../../../../src/images/plus_icon.png'),
                require('../../../../../src/images/minus_icon.jpeg'),
              ],
            }}
          />
          <BoxScreen
            data={{
              title: 'Question 3?',
              description:
                'People asked us how to go collect loans for this investment with Hse',
              right_icon: [
                require('../../../../../src/images/plus_icon.png'),
                require('../../../../../src/images/minus_icon.jpeg'),
              ],
            }}
          />
        </View>
      </View>
    </>
  );
};

export default FaqsScreen;
