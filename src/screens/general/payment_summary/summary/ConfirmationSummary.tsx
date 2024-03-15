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
import CommonButtonScreen from '../../../../constants/reusable/CommonButton';

const ConfirmationSummaryScreen = ({ navigation }: { navigation: any }) => {
  const [editable, setEditable] = useState(false);
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
          width: '95%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginLeft: '5%',
          marginTop: 80,
          gap: 20,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()} style={{}}>
          <Image
            style={{ height: 40, width: 40 }}
            source={require('../../../../images/back_arrow.png')}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: 'Lato_700Bold',
            fontSize: 32,
            color: AppColors.black,
          }}
        >
          Marshall Meadows
        </Text>
      </View>
      <ScrollView
        style={{ width: '100%' }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            width: '90%',
            marginLeft: '5%',
            marginRight: '5%',
            display: 'flex',
            alignItems: 'center',
            marginTop: 20,
            flexDirection: 'column',
            gap: 20,
          }}
        >
          <View
            style={{
              width: '100%',
              height: 210,
              borderColor: AppColors.primaryColor,
              borderWidth: 1,
              backgroundColor: AppColors.white,
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
                gap: 22,
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
                  }}
                >
                  <Text
                    style={{
                      fontFamily: 'Lato_700Bold',
                      fontSize: 20,
                      color: AppColors.black,
                    }}
                  >
                    Asset ID :
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Lato_700Bold',
                      fontSize: 20,
                      color: AppColors.black,
                    }}
                  >
                    XXXX
                  </Text>
                </View>
                <TouchableOpacity
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}
                >
                  <Text
                    style={{
                      fontFamily: 'Lato_700Bold',
                      fontSize: 20,
                      color: AppColors.black,
                    }}
                  >
                    Edit
                  </Text>
                  <Image
                    style={{ height: 25, width: 25 }}
                    source={require('../../../../images/edit_pencil.png')}
                    resizeMode="contain"
                    tintColor={'#03C9C9'}
                  />
                </TouchableOpacity>
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
                      backgroundColor: AppColors.black,
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: 'Lato_700Bold',
                      fontSize: 16,
                      color: AppColors.black,
                    }}
                  >
                    You're going to invest
                  </Text>
                </View>
                <Text
                  style={{
                    fontFamily: 'Lato_700Bold',
                    fontSize: 16,
                    color: AppColors.grayBlack,
                  }}
                >
                  ₹ 10,200.00
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
                      backgroundColor: AppColors.black,
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: 'Lato_700Bold',
                      fontSize: 16,
                      color: AppColors.black,
                    }}
                  >
                    Ownership percentage
                  </Text>
                </View>
                <Text
                  style={{
                    fontFamily: 'Lato_700Bold',
                    fontSize: 16,
                    color: AppColors.grayBlack,
                  }}
                >
                  0.185%
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
                      backgroundColor: AppColors.black,
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: 'Lato_700Bold',
                      fontSize: 16,
                      color: AppColors.black,
                    }}
                  >
                    Average Growth
                  </Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    gap: 5,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    style={{ height: 15, width: 15 }}
                    source={require('../../../../images/triangle.png')}
                    resizeMode="contain"
                    tintColor={'#03C9C9'}
                  />
                  <Text
                    style={{
                      color: '#03C9C9',
                      fontFamily: 'Lato_700Bold',
                      fontSize: 16,
                    }}
                  >
                    20.31 %
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              width: '100%',
              height: 130,
              borderColor: AppColors.primaryColor,
              borderWidth: 1,
              backgroundColor: AppColors.white,
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
                gap: 22,
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
                  }}
                >
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      maxWidth: 150,
                    }}
                  >
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}
                    >
                      <TextInput
                        style={{
                          textAlign: 'center',
                          fontFamily: 'Lato_700Bold',
                          fontSize: 18,
                          color: AppColors.black,
                        }}
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType={'default'}
                        editable={editable}
                        placeholder={'₹  10,200.00'}
                        placeholderTextColor={AppColors.black}
                      />
                    </View>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Text
                        style={{
                          color: AppColors.primaryColor,
                          fontFamily: 'Lato_400Regular',
                          fontSize: 14,
                        }}
                      >
                        Your Investment
                      </Text>
                      <Image
                        style={{ height: 20, width: 20 }}
                        source={require('../../../../images/Info.png')}
                        resizeMode="contain"
                      />
                    </View>
                  </View>
                </View>
                <TouchableOpacity
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}
                  onPress={() => {
                    setEditable(true);
                  }}
                >
                  <Text
                    style={{
                      fontFamily: 'Lato_700Bold',
                      fontSize: 20,
                      color: AppColors.black,
                    }}
                  >
                    Edit Amount
                  </Text>
                  <Image
                    style={{ height: 25, width: 25 }}
                    source={require('../../../../images/edit_pencil.png')}
                    resizeMode="contain"
                    tintColor={'#03C9C9'}
                  />
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  color: '#C4C4C4',
                  fontSize: 16,
                  fontFamily: 'Lato_400Regular',
                }}
              >
                Minimum amount for investment is ₹ 10,000
              </Text>
            </View>
          </View>
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
          bottom: 70,
        }}
      >
        <CommonButtonScreen
          data={{
            title: 'Proceed',
            width: 190,
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

export default ConfirmationSummaryScreen;
