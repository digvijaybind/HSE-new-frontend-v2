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
  KeyboardAvoidingView,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import CheckBox from 'expo-checkbox';
import { Picker } from '@react-native-picker/picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import AppColors from '../../../../constants/colors/AppColors';
import SpecialCustomInputScreen from '../../../../constants/reusable/SpecialCustomInput';
import CommonButtonScreen from '../../../../constants/reusable/CommonButton';
import MyCardScreen from './MyCards';

const ChangePaymentOptionScreen = ({ navigation }: { navigation: any }) => {
  const flatItem = [
    {
      label: 'My Cards',
      imagePath: require('../../../../images/card.png'),
    },
    {
      label: 'Wallets',
      imagePath: require('../../../../images/wallet.png'),
    },
    {
      label: 'Coins',
      imagePath: require('../../../../images/coins.png'),
    },
  ];

  const [SelectedIndex, setSelectedIndex] = useState(0);
  const [slide, setSlide] = useState(0);
  const handlePress = (item: any, index: number) => {
    setSelectedIndex(index);
  };
  const [hasToggleCard, setHasToggleCard] = useState(false);

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
          width: '100%',
          height: 150,
          backgroundColor: AppColors.primaryColor,
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
            paddingBottom: 40,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()} style={{}}>
            <Image
              style={{ height: 40, width: 40 }}
              source={require('../../../../images/back_arrow.png')}
              resizeMode="cover"
              tintColor={AppColors.white}
            />
          </TouchableOpacity>

          <Text
            style={{
              fontFamily: 'Lato_700Bold',
              fontSize: 32,

              color: AppColors.white,
              lineHeight: 34,
            }}
          >
            {` Payment\n Methods`}
          </Text>
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
                source={require('../../../../images/notification.png')}
                resizeMode="cover"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView
        style={{ width: '100%', marginTop: 16 }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: '100%',
            gap: 35,
          }}
        >
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '90%',
              marginLeft: '5%',
              marginRight: '5%',
              gap: 10,
              marginTop: 20,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            {flatItem.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={[
                    {
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column',
                      width: '30%',
                      height: 90,
                      paddingTop: 6,
                      paddingBottom: 6,
                      borderWidth: 1,
                      borderRadius: 12,
                    },
                    SelectedIndex === index
                      ? {
                          borderColor: AppColors.primaryColor,
                          backgroundColor: AppColors.primaryColor,
                        }
                      : {
                          borderColor: AppColors.primaryColor,
                          backgroundColor: AppColors.white,
                        },
                  ]}
                  onPress={() => handlePress(item, index)}
                >
                  <Image
                    style={{ height: 40, width: 40 }}
                    source={item.imagePath}
                    resizeMode="contain"
                    tintColor={
                      SelectedIndex === index
                        ? AppColors.white
                        : AppColors.primaryColor
                    }
                  />
                  <Text
                    style={[
                      {
                        fontSize: 20,
                        fontFamily: 'Lato_400Regular',
                      },
                      SelectedIndex === index
                        ? { color: AppColors.white }
                        : { color: AppColors.primaryColor },
                    ]}
                  >
                    {item.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
          {SelectedIndex === 0 && <MyCardScreen />}
        </View>
      </ScrollView>
      <View
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: 90,
        }}
      >
        <CommonButtonScreen
          data={{
            title: 'Continue',
            width: 205,
            height: 55,
            doPress: () => {
              navigation.navigate('confirmMakePayment');
            },
          }}
        />
      </View>
    </View>
  );
};
export default ChangePaymentOptionScreen;
