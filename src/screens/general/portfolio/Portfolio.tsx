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

const PortfolioScreen = ({ navigation }: { navigation: any }) => {
  const [selectedValue, setSelectedValue] = useState('Category');
  const items = [
    { label: 'Category', value: 'Category' },
    { label: 'Category1', value: 'item2' },
    { label: 'Category2', value: 'item3' },
  ];

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
          height: 115,
          backgroundColor: AppColors.primaryColor,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          display: 'flex',
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

          <Text
            style={{
              fontFamily: 'Lato_700Bold',
              fontSize: 32,
              color: AppColors.white,
              lineHeight: 34,
              marginLeft: 10,
            }}
          >
            Your Portfolio
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
            width: '90%',
            marginLeft: '5%',
            marginRight: '5%',
            gap: 20,
            marginBottom: 100,
          }}
        >
          <View
            style={{
              width: '100%',
              height: 90,
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
                marginTop: 15,
                gap: 10,
              }}
            >
              <Text
                style={{
                  fontFamily: 'Lato_700Bold',
                  fontSize: 20,
                  color: AppColors.grayBlack,
                }}
              >
                Total Portfolio Value
              </Text>
              <View
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}
              >
                <Text
                  style={{
                    fontFamily: 'Lato_700Bold',
                    fontSize: 16,
                    color: AppColors.grayBlack,
                  }}
                >
                  INR 0.00
                </Text>
                <Image
                  style={{ height: 30, width: 30 }}
                  source={require('../../../images/gray_arrow_down.png')}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              height: 150,
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

                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
              }}
            >
              <View
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}
              >
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    flexDirection: 'row',
                    gap: 12,
                  }}
                >
                  <View
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: 100,
                      backgroundColor: AppColors.primaryColor,
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: 'Lato_700Bold',
                      fontSize: 16,
                      color: AppColors.primaryColor,
                    }}
                  >
                    Rent total as of today :
                  </Text>
                </View>
                <Text
                  style={{
                    fontFamily: 'Lato_700Bold',
                    fontSize: 16,
                    color: AppColors.grayBlack,
                  }}
                >
                  INR 0.00
                </Text>
              </View>
              <View
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}
              >
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    flexDirection: 'row',
                    gap: 12,
                  }}
                >
                  <View
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: 100,
                      backgroundColor: AppColors.primaryColor,
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: 'Lato_700Bold',
                      fontSize: 16,
                      color: AppColors.primaryColor,
                    }}
                  >
                    Rent for Current Month Received :
                  </Text>
                </View>
                <Text
                  style={{
                    fontFamily: 'Lato_700Bold',
                    fontSize: 16,
                    color: AppColors.grayBlack,
                  }}
                >
                  INR 0.00
                </Text>
              </View>
              <View
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}
              >
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    flexDirection: 'row',
                    gap: 12,
                  }}
                >
                  <View
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: 100,
                      backgroundColor: AppColors.primaryColor,
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: 'Lato_700Bold',
                      fontSize: 16,
                      color: AppColors.primaryColor,
                    }}
                  >
                    Rent for Current Month Received :
                  </Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    flexDirection: 'row',
                    gap: 2,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: 'Lato_700Bold',
                      fontSize: 16,
                      color: AppColors.grayBlack,
                    }}
                  >
                    0
                  </Text>
                  <TouchableOpacity>
                    <Text
                      style={{
                        fontFamily: 'Lato_700Bold',
                        fontSize: 16,
                        color: AppColors.primaryColor,
                        textDecorationLine: 'underline',
                        textDecorationColor: AppColors.primaryColor,
                      }}
                    >
                      View
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              height: 320,
              borderColor: AppColors.primaryColor,
              backgroundColor: AppColors.white,
              borderWidth: 1,
              borderRadius: 20,
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
            }}
          >
            <View
              style={{
                width: '95%',
                marginLeft: '2.5%',
                marginRight: '2.5%',

                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 30,
              }}
            >
              <View
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}
              >
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    flexDirection: 'row',
                    gap: 7,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: 'Lato_700Bold',
                      fontSize: 20,
                      color: AppColors.grayBlack,
                    }}
                  >
                    Portfolio Allocation
                  </Text>
                  <Image
                    style={{ height: 30, width: 30 }}
                    source={require('../../../images/question_mark.png')}
                    resizeMode="contain"
                  />
                </View>
                <Picker
                  onValueChange={(itemValue) => {
                    if (itemValue !== 'Category') {
                      setSelectedValue(itemValue);
                      console.log('This is selectedvalue', selectedValue);
                    }
                  }}
                  selectedValue={selectedValue}
                  style={{
                    height: 50,
                    width: 145,
                    fontSize: 14,

                    fontFamily: 'Lato_400Regular',
                    color: AppColors.black,
                  }}
                  dropdownIconColor={'#5A5A5A'}
                  itemStyle={{ fontFamily: 'Lato_400Regular' }}
                >
                  {items.map((item) => (
                    <Picker.Item
                      key={item.value}
                      label={item.label}
                      value={item.value}
                    />
                  ))}
                </Picker>
              </View>
              <Image
                style={{ height: 200, width: 200 }}
                source={require('../../../images/portfolio_allocation.png')}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PortfolioScreen;
