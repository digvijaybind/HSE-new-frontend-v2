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
import ResidentialScreen from '../../../../src/screens/general/home/Residential';
import ExchangeScreen from '../../../../src/screens/general/home/Exchange';
const SettingsScreen = ({ navigation }: { navigation: any }) => {
  const [selectedValue, setSelectedValue] = useState('placeholder');
  const [selectedPriceValue, setSelectedPriceValue] = useState('INR');
  const items = [
    { label: 'Location', value: 'placeholder' },
    { label: 'Item 2', value: 'item2' },
    { label: 'Item 3', value: 'item3' },
  ];

  const priceItems = [
    { label: 'INR', value: 'INR' },
    { label: '3000', value: '3Inr' },
    { label: '12000', value: '12Inr' },
  ];

  const flatItem = [
    'Residential',
    'Commercial',
    'Affordable',
    'Vacational',
    'Exchange',
  ];
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  const [SelectedIndex, setSelectedIndex] = useState(0);
  const [slide, setSlide] = useState(0);
  const handlePress = (item: any, index: number) => {
    setSelectedIndex(index);
  };

  return (
    <View
      style={{
        backgroundColor: AppColors.white,
        width: '100%',
        height: '100%',
        position: 'relative',
      }}
    >
      <View
        style={{
          width: '100%',
          height: 160,
          backgroundColor: AppColors.primaryColor,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          display: 'flex',
          position: 'relative',
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
            paddingTop: 10,
            paddingBottom: 10,
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

          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontFamily: 'Lato_700Bold',
                fontSize: 32,
                color: AppColors.white,
                lineHeight: 34,
              }}
            >
              Settings
            </Text>
            <Text
              style={{
                fontFamily: 'Lato_400Regular',
                fontSize: 20,
                color: AppColors.white,
              }}
            >
              Account Information
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
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: '95%',
            marginLeft: '2.5%',
            marginRight: '2.5%',
            marginTop: 20,
            marginBottom: 110,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: '#fff',
              height: 50,
              borderRadius: 10,
              width: '100%',
              flexDirection: 'column',
              alignItems: 'center',
              borderStyle: 'solid',
              borderWidth: 2,
              borderColor: AppColors.primaryColor,
              justifyContent: 'center',
              marginBottom: 20,
            }}
            onPress={() => {
              navigation.navigate('profile');
            }}
          >
            <View
              style={{
                width: '90%',
                marginLeft: '5%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  color: AppColors.primaryColor,
                  fontSize: 20,
                  fontFamily: 'Lato_400Regular',
                  fontWeight: '500',
                }}
              >
                Profile Details
              </Text>
              <Image
                style={{ width: 20, height: 20, marginRight: 10 }}
                source={require('../../../../src/images/circular_angle.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#fff',
              height: 50,
              borderRadius: 10,
              width: '100%',
              flexDirection: 'column',
              alignItems: 'center',
              borderStyle: 'solid',
              borderWidth: 2,
              borderColor: AppColors.primaryColor,
              justifyContent: 'center',
              marginBottom: 20,
            }}
            onPress={() => {
              navigation.navigate('profile');
            }}
          >
            <View
              style={{
                width: '90%',
                marginLeft: '5%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  color: AppColors.primaryColor,
                  fontSize: 20,
                  fontFamily: 'Lato_400Regular',
                  fontWeight: '500',
                }}
              >
                Payment Methods
              </Text>
              <Image
                style={{ width: 20, height: 20, marginRight: 10 }}
                source={require('../../../../src/images/circular_angle.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#fff',
              height: 50,
              borderRadius: 10,
              width: '100%',
              flexDirection: 'column',
              alignItems: 'center',
              borderStyle: 'solid',
              borderWidth: 2,
              borderColor: AppColors.primaryColor,
              justifyContent: 'center',
              marginBottom: 20,
            }}
            onPress={() => {
              navigation.navigate('profile');
            }}
          >
            <View
              style={{
                width: '90%',
                marginLeft: '5%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  color: AppColors.primaryColor,
                  fontSize: 20,
                  fontFamily: 'Lato_400Regular',
                  fontWeight: '500',
                }}
              >
                My Wallet
              </Text>
              <Image
                style={{ width: 20, height: 20, marginRight: 10 }}
                source={require('../../../../src/images/circular_angle.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#fff',
              height: 50,
              borderRadius: 10,
              width: '100%',
              flexDirection: 'column',
              alignItems: 'center',
              borderStyle: 'solid',
              borderWidth: 2,
              borderColor: AppColors.primaryColor,
              justifyContent: 'center',
              marginBottom: 20,
            }}
            onPress={() => {
              navigation.navigate('profile');
            }}
          >
            <View
              style={{
                width: '90%',
                marginLeft: '5%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  color: AppColors.primaryColor,
                  fontSize: 20,
                  fontFamily: 'Lato_400Regular',
                  fontWeight: '500',
                }}
              >
                Email preferences
              </Text>
              <Image
                style={{ width: 20, height: 20, marginRight: 10 }}
                source={require('../../../../src/images/circular_angle.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#fff',
              height: 50,
              borderRadius: 10,
              width: '100%',
              flexDirection: 'column',
              alignItems: 'center',
              borderStyle: 'solid',
              borderWidth: 2,
              borderColor: AppColors.primaryColor,
              justifyContent: 'center',
              marginBottom: 20,
            }}
            onPress={() => {
              navigation.navigate('profile');
            }}
          >
            <View
              style={{
                width: '90%',
                marginLeft: '5%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  color: AppColors.primaryColor,
                  fontSize: 20,
                  fontFamily: 'Lato_400Regular',
                  fontWeight: '500',
                }}
              >
                Notification preferences
              </Text>
              <Image
                style={{ width: 20, height: 20, marginRight: 10 }}
                source={require('../../../../src/images/circular_angle.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#fff',
              height: 50,
              borderRadius: 10,
              width: '100%',
              flexDirection: 'column',
              alignItems: 'center',
              borderStyle: 'solid',
              borderWidth: 2,
              borderColor: AppColors.primaryColor,
              justifyContent: 'center',
              marginBottom: 20,
            }}
            onPress={() => {
              navigation.navigate('profile');
            }}
          >
            <View
              style={{
                width: '90%',
                marginLeft: '5%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  color: AppColors.primaryColor,
                  fontSize: 20,
                  fontFamily: 'Lato_400Regular',
                  fontWeight: '500',
                }}
              >
                Privacy Settings
              </Text>
              <Image
                style={{ width: 20, height: 20, marginRight: 10 }}
                source={require('../../../../src/images/circular_angle.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#fff',
              height: 50,
              borderRadius: 10,
              width: '100%',
              flexDirection: 'column',
              alignItems: 'center',
              borderStyle: 'solid',
              borderWidth: 2,
              borderColor: AppColors.primaryColor,
              justifyContent: 'center',
              marginBottom: 20,
            }}
            onPress={() => {
              navigation.navigate('profile');
            }}
          >
            <View
              style={{
                width: '90%',
                marginLeft: '5%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  color: AppColors.primaryColor,
                  fontSize: 20,
                  fontFamily: 'Lato_400Regular',
                  fontWeight: '500',
                }}
              >
                Password
              </Text>
              <Image
                style={{ width: 20, height: 20, marginRight: 10 }}
                source={require('../../../../src/images/circular_angle.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#fff',
              height: 50,
              borderRadius: 10,
              width: '100%',
              flexDirection: 'column',
              alignItems: 'center',
              borderStyle: 'solid',
              borderWidth: 2,
              borderColor: AppColors.primaryColor,
              justifyContent: 'center',
              marginBottom: 20,
            }}
            onPress={() => {
              navigation.navigate('profile');
            }}
          >
            <View
              style={{
                width: '90%',
                marginLeft: '5%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  color: AppColors.primaryColor,
                  fontSize: 20,
                  fontFamily: 'Lato_400Regular',
                  fontWeight: '500',
                }}
              >
                Location
              </Text>
              <Image
                style={{ width: 20, height: 20, marginRight: 10 }}
                source={require('../../../../src/images/circular_angle.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#fff',
              height: 50,
              borderRadius: 10,
              width: '100%',
              flexDirection: 'column',
              alignItems: 'center',
              borderStyle: 'solid',
              borderWidth: 2,
              borderColor: AppColors.primaryColor,
              justifyContent: 'center',
              marginBottom: 20,
            }}
            onPress={() => {
              navigation.navigate('profile');
            }}
          >
            <View
              style={{
                width: '90%',
                marginLeft: '5%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  color: AppColors.primaryColor,
                  fontSize: 20,
                  fontFamily: 'Lato_400Regular',
                  fontWeight: '500',
                }}
              >
                Deactivate account
              </Text>
              <Image
                style={{ width: 20, height: 20, marginRight: 10 }}
                source={require('../../../../src/images/circular_angle.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SettingsScreen;
