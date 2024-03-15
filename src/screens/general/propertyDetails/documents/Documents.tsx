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
const DocumentScreen = () => {
  const [hasToggle, setHasToggle] = useState(false);
  const [hasToggleOne, setHasToggleOne] = useState(false);
  return (
    <>
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
        <ContainerScreen
          data={{
            title: 'Tittle Deed',
            right_icon: require('../../../../../src/images/pdf_downloader.png'),
          }}
        />
        <ContainerScreen
          data={{
            title: 'Floor Layouts',
            right_icon: require('../../../../../src/images/pdf_downloader.png'),
          }}
        />
        <ContainerScreen
          data={{
            title: 'Ownership Documents',
            right_icon: require('../../../../../src/images/pdf_downloader.png'),
          }}
        />
        <ContainerScreen
          data={{
            title: 'Other Documents',
            right_icon: require('../../../../../src/images/pdf_downloader.png'),
          }}
        />
      </View>
    </>
  );
};

export default DocumentScreen;
