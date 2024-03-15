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
import AppColors from '../../../constants/colors/AppColors';
const ResidentialScreen = ({ navigation }: { navigation: any }) => {
  const [SelectedIndex, setSelectedIndex] = useState(0);
  const [slide, setSlide] = useState(0);
  const handlePress = (item: any, index: number) => {
    setSelectedIndex(index);
  };

  const slides = useMemo(
    () => [
      {
        ImagePathOne: require('../../../images/showcase_one.png'),
        buttonTitle: 'Shop Now',
        status: 'Trending',
        investRate: '41% Invested',
        price: '₹ 7,99,00,000',
        about: 'Beach front villa 6br, North Goa, Calangute',
      },
      {
        ImagePathOne: require('../../../images/showcase_two.png'),
        buttonTitle: 'Shop Now',
        status: 'Trending',
        investRate: '41% Invested',
        price: '₹ 7,99,00,000',
        about: 'Beach front villa 6br, North Goa, Calangute',
      },
    ],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [slides.length]);

  const renderSlides = () => {
    return slides.map((slideItem, index) => (
      <View
        key={index}
        style={{
          borderColor: AppColors.primaryColor,
          borderWidth: 1,
          borderRadius: 13,
          width: '100%',
          height: 300,
          position: 'relative',
        }}
      >
        <Image
          source={slideItem.ImagePathOne}
          style={{
            maxWidth: '100%',
            maxHeight: 225,
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }}
          resizeMode="cover"
        />
        <View
          style={{
            position: 'absolute',
            width: '95%',
            height: '100%',
            marginLeft: '2.5%',
            marginRight: '2.5%',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <View
            style={{
              width: '100%',
              height: '95%',
              marginTop: '1.5%',
              marginBottom: '3.5%',
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'column',
            }}
          >
            <View
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  backgroundColor: AppColors.white,
                  width: 90,
                  height: 28,
                  borderRadius: 8,
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Text
                  style={{
                    fontSize: 13.22,
                    fontFamily: 'Lato_700Bold',
                    color: AppColors.primaryColor,
                  }}
                >
                  {slideItem.status}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: AppColors.white,
                  width: 90,
                  height: 28,
                  borderRadius: 8,
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Text
                  style={{
                    fontSize: 13.22,
                    fontFamily: 'Lato_700Bold',
                    color: AppColors.primaryColor,
                  }}
                >
                  {slideItem.investRate}
                </Text>
              </View>
            </View>
            <View
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}
              >
                <Text
                  style={{
                    color: '#040404',
                    fontSize: 18.89,
                    fontFamily: 'Lato_700Bold',
                  }}
                >
                  {slideItem.price}
                </Text>
                <Text
                  style={{
                    color: '#040404',
                    fontSize: 15.11,
                    fontFamily: 'Lato_400Regular',
                    maxWidth: 210,
                  }}
                >
                  {slideItem.about}
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: 6,
                }}
              >
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    gap: 10,
                  }}
                >
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      borderColor: AppColors.primaryColor,
                      borderWidth: 1,
                      width: 40,
                      height: 20,
                      borderRadius: 8,
                      backgroundColor: AppColors.white,
                      justifyContent: 'space-between',
                    }}
                  >
                    <TouchableOpacity
                      style={{ maxHeight: 13, maxWidth: 13, marginLeft: 1 }}
                    >
                      <Image
                        style={{ maxHeight: '100%', maxWidth: '100%' }}
                        source={require('../../../images/star.png')}
                        resizeMode="cover"
                      />
                    </TouchableOpacity>
                    <Text
                      style={{
                        fontSize: 13.22,
                        marginRight: 1,
                        color: AppColors.primaryColor,
                        fontFamily: 'Lato_700Bold',
                      }}
                    >
                      4.7
                    </Text>
                  </View>
                  <TouchableOpacity>
                    <Text
                      style={{
                        fontSize: 13.22,
                        marginRight: 1,
                        color: AppColors.primaryColor,
                        fontFamily: 'Lato_700Bold',
                      }}
                      onPress={() => {
                        navigation.navigate('propertyDetails');
                      }}
                    >
                      Read more
                    </Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: 110,
                    borderRadius: 8,
                    height: 30,
                    alignItems: 'center',
                    backgroundColor: AppColors.primaryColor,
                    justifyContent: 'center',
                  }}
                  onPress={() => {
                    navigation.navigate('confirmSummary');
                  }}
                >
                  <Text
                    style={{
                      fontFamily: 'Lato_700Bold',
                      fontSize: 14,
                      lineHeight: 12.2,
                      color: AppColors.white,
                    }}
                  >
                    Invest now
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    ));
  };

  const products = [
    {
      ImagePathOne: require('../../../images/showcase_one.png'),
      buttonTitle: 'Shop Now',
      status: 'Trending',
      investRate: '41% Invested',
      price: '₹ 7,99,00,000',
      about: 'Beach front villa 6br, North Goa, Calangute',
    },
    {
      ImagePathOne: require('../../../images/showcase_two.png'),
      buttonTitle: 'Shop Now',
      status: 'Trending',
      investRate: '41% Invested',
      price: '₹ 7,99,00,000',
      about: 'Beach front villa 6br, North Goa, Calangute',
    },
  ];
  return (
    <>
      <View
        style={{
          width: '100%',
          marginTop: 10,
          height: 300,

          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Swiper
          loop={false}
          index={slide}
          onIndexChanged={(index) => setSlide(index)}
          showsPagination={false}
        >
          {renderSlides()}
        </Swiper>
      </View>
      <View
        style={{
          width: '100%',
          marginTop: 10,
          marginBottom: 120,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          <Text
            style={{
              color: AppColors.grayBlack,
              fontSize: 16,
              fontFamily: 'Lato_700Bold',
            }}
          >
            Show More
          </Text>
          <Image
            style={{ maxHeight: 23, maxWidth: 23 }}
            source={require('../../../images/green_arrow_down.png')}
            resizeMode="cover"
          />
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'column',
            display: 'flex',
            alignItems: 'flex-start',
            gap: 10,
            marginTop: 10,
          }}
        >
          {products.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  borderColor: AppColors.primaryColor,
                  borderWidth: 1,
                  borderRadius: 13,
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',

                  height: 120,
                  position: 'relative',
                }}
              >
                <View
                  style={{
                    width: '95%',
                    marginRight: '2.5%',
                    marginLeft: '2.5%',
                    height: '93%',
                    marginTop: '3.5%',
                    marginBottom: '3.5%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    source={item.ImagePathOne}
                    style={{
                      maxWidth: 130,
                      maxHeight: '100%',
                      borderRadius: 12,
                    }}
                    resizeMode="cover"
                  />
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      justifyContent: 'space-between',
                    }}
                  >
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                      }}
                    >
                      <View
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'flex-start',
                        }}
                      >
                        <Text
                          style={{
                            color: AppColors.black,
                            fontSize: 14,
                            fontFamily: 'Lato_700Bold',
                          }}
                        >
                          {item.price}
                        </Text>
                        <Text
                          style={{
                            color: AppColors.black,
                            fontSize: 14,
                            fontFamily: 'Lato_400Regular',
                            maxWidth: 150,
                          }}
                        >
                          {item.about}
                        </Text>
                      </View>
                      <View
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          borderColor: AppColors.primaryColor,
                          borderWidth: 1,
                          width: 40,
                          height: 20,
                          borderRadius: 8,
                          backgroundColor: AppColors.white,
                          justifyContent: 'space-between',
                        }}
                      >
                        <TouchableOpacity
                          style={{
                            maxHeight: 13,
                            maxWidth: 13,
                            marginLeft: 1,
                          }}
                        >
                          <Image
                            style={{
                              maxHeight: '100%',
                              maxWidth: '100%',
                            }}
                            source={require('../../../images/star.png')}
                            resizeMode="cover"
                          />
                        </TouchableOpacity>
                        <Text
                          style={{
                            fontSize: 13.22,
                            marginRight: 1,
                            color: AppColors.primaryColor,
                            fontFamily: 'Lato_700Bold',
                          }}
                        >
                          4.7
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 6,
                        alignItems: 'flex-start',
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 13.22,
                          fontFamily: 'Lato_700Bold',
                          color: AppColors.primaryColor,
                        }}
                      >
                        {item.investRate}
                      </Text>
                      <TouchableOpacity
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          width: 110,
                          borderRadius: 8,
                          height: 30,
                          alignItems: 'center',
                          backgroundColor: AppColors.primaryColor,
                          justifyContent: 'center',
                        }}
                      >
                        <Text
                          style={{
                            fontFamily: 'Lato_700Bold',
                            fontSize: 14,
                            lineHeight: 12.2,
                            color: AppColors.white,
                          }}
                        >
                          Invest now
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </>
  );
};

export default ResidentialScreen;
