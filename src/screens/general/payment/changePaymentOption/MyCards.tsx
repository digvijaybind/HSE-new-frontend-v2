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
  ViewBase,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import CheckBox from 'expo-checkbox';
import { Picker } from '@react-native-picker/picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';
import AppColors from '../../../../constants/colors/AppColors';
import ContainerScreen from '../../../../constants/reusable/Container';
import BoxScreen from '../../../../constants/reusable/Box';
const MyCardScreen = () => {
  const [hasToggle, setHasToggle] = useState(false);
  const [hasToggleOne, setHasToggleOne] = useState(false);
  const flatList = [
    {
      imagePath: require('../../../../images/bank_one.png'),
      accountName: 'NORA FIELDS',
      accountNumber: '**** **** 2354',
      cvv: '09/2024',
    },
    {
      imagePath: require('../../../../images/master_card.png'),
      accountName: 'JOHN NORMAN',
      accountNumber: '**** **** 2354',
      cvv: '09/2024',
    },
    {
      imagePath: require('../../../../images/visa_card.png'),
      accountName: 'NORA FIELDS',
      accountNumber: '**** **** 2354',
      cvv: '09/2024',
    },
  ];

  const [SelectedIndex, setSelectedIndex] = useState(0);
  const [slide, setSlide] = useState(0);
  const handlePress = (item: any, index: number) => {
    setSelectedIndex(index);
  };
  return (
    <>
      <View
        style={{
          marginTop: 20,
          display: 'flex',
          backgroundColor: AppColors.white,
          borderRadius: 20,
          height: 450,
          borderColor: AppColors.primaryColor,
          borderWidth: 1,
          borderStyle: 'solid',
          ...Platform.select({
            ios: {
              shadowColor: 'rgba(0, 0, 0, 0.25)',
              shadowOffset: { width: 2, height: 1 },
              shadowOpacity: 1,
              shadowRadius: 7,
            },
            android: {
              elevation: 3,
            },
          }),
          flexDirection: 'column',
          alignContent: 'flex-start',
          width: '100%',
        }}
      >
        <View
          style={{
            width: '90%',
            marginLeft: '5%',
            marginRight: '5%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '90%',
            marginTop: '5%',
            marginBottom: '5%',
          }}
        >
          <View
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <View
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  color: AppColors.black,
                  fontFamily: 'Lato_700Bold',
                  fontSize: 20,
                }}
              >
                Payment Default
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    color: AppColors.primaryColor,
                    fontFamily: 'Lato_400Regular',
                    textDecorationColor: AppColors.primaryColor,
                    textDecorationLine: 'underline',
                    fontSize: 16,
                  }}
                >
                  Add New Card +
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                gap: 20,
                marginTop: 20,
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              {flatList.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    style={[
                      {
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: 'row',
                        width: '100%',
                        height: 75,
                        borderWidth: 1,
                        borderRadius: 18,
                        borderColor: AppColors.primaryColor,
                      },
                      SelectedIndex === index
                        ? {
                            backgroundColor: '#E8E8E8',
                          }
                        : {
                            backgroundColor: AppColors.white,
                          },
                    ]}
                    onPress={() => handlePress(item, index)}
                  >
                    <View
                      style={[
                        {
                          marginLeft: 20,
                          width: 20,
                          height: 20,
                          borderStyle: 'solid',
                          borderWidth: 2,
                          borderRadius: 100,
                          borderColor: AppColors.primaryColor,
                        },
                        SelectedIndex === index
                          ? {
                              backgroundColor: '#E8E8E8',
                            }
                          : {
                              backgroundColor: AppColors.white,
                            },
                      ]}
                    />
                    <View
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 10,
                        gap: 30,
                      }}
                    >
                      <Image
                        style={{ width: 65, height: 30 }}
                        source={item.imagePath}
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
                            fontSize: 14,
                            color: AppColors.black,
                            fontFamily: 'Lato_400Regular',
                          }}
                        >
                          {item.accountName}
                        </Text>
                        <Text
                          style={{
                            fontSize: 16,
                            color: AppColors.black,
                            fontFamily: 'Lato_700Bold',
                          }}
                        >
                          {item.accountNumber}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginRight: 20,
                      }}
                    >
                      <Text
                        style={{
                          color: AppColors.primaryColor,
                          fontFamily: 'Lato_400Regular',
                          fontSize: 10,
                        }}
                      >
                        EXP
                      </Text>
                      <Text
                        style={{
                          color: AppColors.primaryColor,
                          fontFamily: 'Lato_400Regular',
                          fontSize: 10,
                        }}
                      >
                        {item.cvv}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default MyCardScreen;
