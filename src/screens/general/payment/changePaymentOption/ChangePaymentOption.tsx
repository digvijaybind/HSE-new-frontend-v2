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

const ChangePaymentOptionScreen = ({ navigation }: { navigation: any }) => {
  const flatItem = ['Personal Info', 'Address Info', 'KYC Verification'];

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
            width: '90%',
            marginLeft: '5%',
            gap: 35,
            marginRight: '5%',
          }}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              gap: 20,
            }}
          >
            <Image
              style={{ width: 100, height: 100 }}
              source={require('../../../../images/property_details_curve.png')}
              resizeMode="cover"
            />
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                gap: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 27.46,
                  fontFamily: 'Lato_700Bold',
                  color: AppColors.black,
                }}
              >
                Marshall Meadows
              </Text>
              <Text
                style={{
                  fontSize: 16.02,
                  fontFamily: 'Lato_400Regular',
                  color: AppColors.primaryColor,
                }}
              >
                Payment on Nov 25, 2023
              </Text>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              gap: 20,
            }}
          >
            <Text
              style={{
                fontSize: 54.91,
                fontFamily: 'Lato_700Bold',
                color: AppColors.primaryColor,
              }}
            >
              ₹ 10,200.00
            </Text>
            <TouchableOpacity
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(138, 202, 202, 0.1)',
                height: 60,
                width: '100%',
                borderRadius: 18.3,
              }}
            >
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  gap: 8,
                }}
              >
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require('../../../../images/cream_info.png')}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    color: AppColors.primaryColor,
                    fontFamily: 'Lato_400Regular',
                    fontSize: 16.02,
                  }}
                >
                  Payment fee ₹200 has been applied
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: '#F2F2F2',
          height: 330,
          width: '100%',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
      >
        <View
          style={{
            width: '90%',
            marginLeft: '5%',
            marginRight: '5%',
            height: '90%',
            marginTop: '5%',
            marginBottom: '5%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 20,
            }}
          >
            <Text
              style={{
                fontSize: 20.59,
                color: '#030319',
                fontFamily: 'Lato_700Bold',
              }}
            >
              Default - Choose Cards
            </Text>
            <View
              style={{
                width: '100%',
                backgroundColor: AppColors.white,
                minHeight: 90,
                maxHeight: 140,
                borderRadius: 18.3,
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  width: '90%',
                  marginLeft: '5%',
                  marginRight: '5%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                    gap: 10,
                  }}
                >
                  <Image
                    style={{ width: 60, height: 25 }}
                    source={require('../../../../images/bank_one.png')}
                    resizeMode="contain"
                  />
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      gap: 10,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16.02,
                        color: '#030319',
                        fontFamily: 'Lato_700Bold',
                      }}
                    >
                      Axis Bank Debit Card
                    </Text>
                    <Text
                      style={{
                        fontSize: 13.73,
                        color: '#8F92A1',
                        fontFamily: 'Lato_400Regular',
                      }}
                    >
                      XXXX-XXXX-2354
                    </Text>
                  </View>
                </View>
                {!hasToggleCard && (
                  <TouchableOpacity
                    onPress={() => {
                      setHasToggleCard(true);
                    }}
                  >
                    <Image
                      style={{ height: 40, width: 40 }}
                      source={require('../../../../images/green_arrow_down.png')}
                      resizeMode="contain"
                      tintColor={'#105D38'}
                    />
                  </TouchableOpacity>
                )}
                {hasToggleCard && (
                  <TouchableOpacity
                    onPress={() => {
                      setHasToggleCard(false);
                    }}
                  >
                    <Image
                      style={{ height: 20, width: 20 }}
                      source={require('../../../../images/green_arrow_up.png')}
                      resizeMode="contain"
                      tintColor={'#105D38'}
                    />
                  </TouchableOpacity>
                )}
              </View>
              {hasToggleCard && (
                <View
                  style={{
                    width: '100%',
                    marginTop: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <View
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      flexDirection: 'column',
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 10,
                        fontFamily: 'Lato_400Regular',
                        color: AppColors.primaryColor,
                      }}
                    >
                      EXP.
                    </Text>
                    <Text
                      style={{
                        fontSize: 10,
                        fontFamily: 'Lato_400Regular',
                        color: AppColors.primaryColor,
                      }}
                    >
                      09/2024
                    </Text>
                  </View>
                </View>
              )}
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                width: '100%',
                gap: 25,
              }}
            >
              <TouchableOpacity
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  borderColor: AppColors.black,
                  borderStyle: 'solid',
                  borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#F2F2F2',
                  height: 60,
                  width: '100%',
                  borderRadius: 18.3,
                }}
              >
                <Text
                  style={{
                    color: AppColors.primaryColor,
                    fontFamily: 'Lato_700Bold',
                    fontSize: 20,
                  }}
                >
                  Change Payment Method
                </Text>
              </TouchableOpacity>
              <CommonButtonScreen
                data={{
                  title: 'Proceed to Pay',
                  width: '100%',
                  height: 55,
                  doPress: () => {
                    console.log('CLIKING');
                  },
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default ChangePaymentOptionScreen;
