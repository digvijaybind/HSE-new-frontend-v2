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
const GrowthScreen = () => {
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
            maxHeight: 180,
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
                Investment Overview
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
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  display: 'flex',
                  marginTop: 10,
                  width: '90%',
                  marginLeft: '2.5%',
                  marginRight: '2.5%',
                  gap: 40,
                  justifyContent: 'center',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    gap: 20,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: AppColors.primaryColor,
                        fontFamily: 'Lato_400Regular',
                        fontSize: 12,
                      }}
                    >
                      Age Growth
                    </Text>
                    <View
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        gap: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}
                    >
                      <Image
                        style={{ height: 15, width: 15 }}
                        source={require('../../../../images/triangle.png')}
                        resizeMode="contain"
                      />
                      <Text
                        style={{
                          color: AppColors.black,
                          fontFamily: 'Lato_400Regular',
                          fontSize: 14,
                        }}
                      >
                        20.31 %
                      </Text>
                    </View>
                  </View>
                  <Image
                    style={{ height: 45, width: 3 }}
                    source={require('../../../../images/line_up.png')}
                    resizeMode="contain"
                  />
                </View>
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    gap: 20,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: AppColors.primaryColor,
                        fontFamily: 'Lato_400Regular',
                        fontSize: 12,
                      }}
                    >
                      Total Tokens
                    </Text>
                    <View
                      style={{
                        display: 'flex',
                        justifyContent: 'center',

                        flexDirection: 'row',
                        alignItems: 'center',
                      }}
                    >
                      <Text
                        style={{
                          color: AppColors.black,
                          fontFamily: 'Lato_400Regular',
                          fontSize: 14,
                          textAlign: 'center',
                        }}
                      >
                        2,030
                      </Text>
                    </View>
                  </View>
                  <Image
                    style={{ height: 45, width: 3 }}
                    source={require('../../../../images/line_up.png')}
                    resizeMode="contain"
                  />
                </View>
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    gap: 20,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: AppColors.primaryColor,
                        fontFamily: 'Lato_400Regular',
                        fontSize: 12,
                      }}
                    >
                      Lock in
                    </Text>
                    <View
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        gap: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}
                    >
                      <Text
                        style={{
                          color: AppColors.black,
                          fontFamily: 'Lato_400Regular',
                          fontSize: 14,
                        }}
                      >
                        2 Years
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}
              >
                <Image
                  style={{ height: 45, width: '100%' }}
                  source={require('../../../../images/line_through.png')}
                  resizeMode="contain"
                />
                <View
                  style={{
                    marginTop: -10,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Text
                    style={{
                      color: AppColors.primaryColor,
                      fontFamily: 'Lato_400Regular',
                      fontSize: 14,
                    }}
                  >
                    2% Invested
                  </Text>
                  <Text
                    style={{
                      color: AppColors.primaryColor,
                      fontFamily: 'Lato_400Regular',
                      fontSize: 14,
                    }}
                  >
                    2,000 Tokens left
                  </Text>
                </View>
              </View>
            </View>
          )}
        </View>
        <View
          style={{
            marginTop: 20,
            width: '100%',
            maxHeight: 180,
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
                Key Highlights
              </Text>
              <Image
                style={{ height: 30, width: 30 }}
                source={require('../../../../images/Info.png')}
                resizeMode="contain"
              />
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
              <View
                style={{
                  display: 'flex',
                  marginTop: 10,
                  width: '90%',
                  marginLeft: '2.5%',
                  marginRight: '2.5%',
                  gap: 10,
                  justifyContent: 'center',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    gap: 20,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: AppColors.primaryColor,
                        fontFamily: 'Lato_400Regular',
                        fontSize: 12,
                      }}
                    >
                      Total Asset Value
                    </Text>
                    <View
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        gap: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}
                    >
                      <Text
                        style={{
                          color: AppColors.black,
                          fontFamily: 'Lato_400Regular',
                          fontSize: 14,
                        }}
                      >
                        ₹ 1, 72,22,520
                      </Text>
                    </View>
                    <TouchableOpacity>
                      <Text
                        style={{
                          color: AppColors.primaryColor,
                          fontFamily: 'Lato_400Regular',
                          fontSize: 8,
                          textDecorationLine: 'underline',
                          textDecorationColor: AppColors.primaryColor,
                        }}
                      >
                        Know more
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <Image
                    style={{ height: 45, width: 3 }}
                    source={require('../../../../images/line_up.png')}
                    resizeMode="contain"
                  />
                </View>
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    gap: 20,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: AppColors.primaryColor,
                        fontFamily: 'Lato_400Regular',
                        fontSize: 12,
                      }}
                    >
                      Share type
                    </Text>
                    <View
                      style={{
                        display: 'flex',
                        justifyContent: 'center',

                        flexDirection: 'row',
                        alignItems: 'center',
                      }}
                    >
                      <Text
                        style={{
                          color: AppColors.black,
                          fontFamily: 'Lato_400Regular',
                          fontSize: 14,
                          textAlign: 'center',
                        }}
                      >
                        LLP Ownership
                      </Text>
                    </View>
                    <TouchableOpacity>
                      <Text
                        style={{
                          color: AppColors.primaryColor,
                          fontFamily: 'Lato_400Regular',
                          fontSize: 8,
                          textDecorationLine: 'underline',
                          textDecorationColor: AppColors.primaryColor,
                        }}
                      >
                        Know more
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <Image
                    style={{ height: 45, width: 3 }}
                    source={require('../../../../images/line_up.png')}
                    resizeMode="contain"
                  />
                </View>
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    gap: 20,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: AppColors.primaryColor,
                        fontFamily: 'Lato_400Regular',
                        fontSize: 12,
                      }}
                    >
                      Holding Company
                    </Text>
                    <View
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        gap: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}
                    >
                      <Text
                        style={{
                          color: AppColors.black,
                          fontFamily: 'Lato_400Regular',
                          fontSize: 14,
                        }}
                      >
                        RYZHL-GOA-01
                      </Text>
                    </View>
                    <TouchableOpacity>
                      <Text
                        style={{
                          color: AppColors.primaryColor,
                          fontFamily: 'Lato_400Regular',
                          fontSize: 8,
                          textDecorationLine: 'underline',
                          textDecorationColor: AppColors.primaryColor,
                        }}
                      >
                        Know more
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          )}
        </View>
      </View>
    </>
  );
};

export default GrowthScreen;
