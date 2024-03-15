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
const OverViewScreen = () => {
  const [hasToggle, setHasToggle] = useState(false);
  const [hasToggleOne, setHasToggleOne] = useState(false);
  return (
    <>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'flex-start',
          width: '100%',
        }}
      >
        <View
          style={{
            marginTop: 20,
            width: '100%',
            maxHeight: 280,
            paddingTop: 10,
            backgroundColor: '#F1F1F1',
            paddingBottom: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            borderColor: AppColors.primaryColor,
            borderWidth: 1,
            borderRadius: 20,
          }}
        >
          <View
            style={{
              width: '95%',
              marginLeft: '2.5%',
              marginRight: '2.5%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  color: AppColors.black,
                  fontFamily: 'Lato_700Bold',
                  fontSize: 20,
                }}
              >
                About the Property
              </Text>
              <Image
                style={{ height: 30, width: 30 }}
                source={require('../../../../images/Info.png')}
                resizeMode="contain"
              />
            </View>
            {!hasToggle && (
              <TouchableOpacity
                onPress={() => {
                  setHasToggle(true);
                }}
              >
                <Image
                  style={{ height: 20, width: 20 }}
                  source={require('../../../../images/green_arrow_up.png')}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            )}
            {hasToggle && (
              <TouchableOpacity
                onPress={() => {
                  setHasToggle(false);
                }}
              >
                <Image
                  style={{ height: 40, width: 40 }}
                  source={require('../../../../images/green_arrow_down.png')}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            )}
          </View>
          {!hasToggle && (
            <View
              style={{
                width: '95%',
                marginLeft: '2.5%',
                marginRight: '2.5%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                marginTop: 10,
              }}
            >
              <Text style={{ lineHeight: 20 }}>
                {` This property is a project by Silva Real Estate And\r Developers Pvt Ltd in Goa. It is a Under Construction\r residential project.
The project is spread over 0.51 Acres . Launched in April\r 2022,Marshall Meadows is slated for possession in Aug,
 2025. The address of Marshall Meadows is Survey No. 230/6 & 230/7 At Dramapur Village Salcete, Dramapur.`}
              </Text>
            </View>
          )}
        </View>
        <View
          style={{
            marginTop: 20,
            width: '100%',
            maxHeight:230,
            paddingTop: 10,
            backgroundColor: AppColors.white,
            paddingBottom: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            borderColor: AppColors.primaryColor,
            borderWidth: 1,
            borderRadius: 20,
          }}
        >
          <View
            style={{
              width: '95%',
              marginLeft: '2.5%',
              marginRight: '2.5%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  color: AppColors.black,
                  fontFamily: 'Lato_700Bold',
                  fontSize: 20,
                }}
              >
                Amenities
              </Text>
            </View>
            {!hasToggleOne && (
              <TouchableOpacity
                onPress={() => {
                  setHasToggleOne(true);
                }}
              >
                <Image
                  style={{ height: 20, width: 20 }}
                  source={require('../../../../images/green_arrow_up.png')}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            )}
            {hasToggleOne && (
              <TouchableOpacity
                onPress={() => {
                  setHasToggleOne(false);
                }}
              >
                <Image
                  style={{ height: 40, width: 40 }}
                  source={require('../../../../images/green_arrow_down.png')}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            )}
          </View>
          {!hasToggleOne && (
            <View
              style={{
                width: '95%',
                marginLeft: '2.5%',
                marginRight: '2.5%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Image
                style={{height: 120, width: '100%' }}
                source={require('../../../../images/amenities_image.png')}
                resizeMode="contain"
              />
            </View>
          )}
        </View>
      </View>
    </>
  );
};

export default OverViewScreen;
