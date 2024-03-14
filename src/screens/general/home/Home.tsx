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
import ResidentialScreen from './Residential';
import ExchangeScreen from './Exchange';

const HomeScreen = ({ navigation }: { navigation: any }) => {
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
              Hello, User
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
            <TouchableOpacity style={{ maxHeight: 23, maxWidth: 23 }}>
              <Image
                style={{ maxHeight: '100%', maxWidth: '100%' }}
                source={require('../../../images/search.png')}
                resizeMode="cover"
              />
            </TouchableOpacity>
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
          }}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              width: '100%',
            }}
          >
            <TouchableOpacity
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                width: '100%',
                height: 70,
                borderColor: AppColors.primaryColor,
                borderWidth: 1,
                borderRadius: 20,
              }}
            >
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '98%',

                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <Text
                  style={{
                    fontFamily: 'Lato_700Bold',
                    fontSize: 16,
                    marginTop: '1%',
                    color: AppColors.primaryColor,
                  }}
                >
                  You are almost there !
                </Text>
                <View
                  style={{
                    width: '90%',
                    marginLeft: '5%',
                    marginRight: '5%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    gap: 6,
                  }}
                >
                  <Image
                    style={{ maxHeight: 4, maxWidth: '80%' }}
                    source={require('../../../images/line_progress.png')}
                    resizeMode="cover"
                  />
                  <Text
                    style={{
                      color: '#5A5A5A',
                      fontFamily: 'Lato_400Regular',
                      fontSize: 12,
                    }}
                  >
                    3/10
                  </Text>
                </View>
                <Text
                  style={{
                    marginBottom: '1%',
                    fontFamily: 'Lato_700Bold',
                    fontSize: 16,
                    color: AppColors.grayBlack,
                  }}
                >
                  Tap to complete registration
                </Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                width: '100%',
                marginTop: 20,
                display: 'flex',
                alignItems: 'flex-start',
                flexDirection: 'column',
              }}
            >
              <View
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}
              >
                <Picker
                  selectedValue={selectedValue}
                  onValueChange={(itemValue) => {
                    if (itemValue !== 'placeholder') {
                      setSelectedValue(itemValue);
                      console.log('This is selectedvalue', selectedValue);
                    }
                  }}
                  style={{
                    height: 50,
                    width: 145,
                    fontSize: 14,

                    fontFamily: 'Lato_400Regular',
                    color: AppColors.black,
                  }}
                  dropdownIconColor={AppColors.black}
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
                <View
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    flexDirection: 'row',
                    gap: 10,
                  }}
                >
                  <TouchableOpacity style={{ maxHeight: 23, maxWidth: 23 }}>
                    <Image
                      style={{ maxHeight: '100%', maxWidth: '100%' }}
                      source={require('../../../images/map_marker.png')}
                      resizeMode="cover"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ maxHeight: 23, maxWidth: 23 }}>
                    <Image
                      style={{ maxHeight: '100%', maxWidth: '100%' }}
                      source={require('../../../images/filter_icon.png')}
                      resizeMode="cover"
                    />
                  </TouchableOpacity>
                  <View>
                    <Picker
                      selectedValue={selectedPriceValue}
                      onValueChange={(itemValue) => {
                        if (itemValue !== 'INR') {
                          setSelectedPriceValue(itemValue);
                          console.log(
                            'This is selectedvalue',
                            selectedPriceValue
                          );
                        }
                      }}
                      style={{
                        height: 50,
                        width: 145,

                        fontSize: 12,
                        fontFamily: 'Lato_400Regular',
                        color: AppColors.black,
                      }}
                      dropdownIconColor={AppColors.black}
                    >
                      {priceItems.map((item) => (
                        <Picker.Item
                          key={item.value}
                          label={item.label}
                          value={item.value}
                        />
                      ))}
                    </Picker>
                  </View>
                </View>
              </View>
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <FlatList
                  data={flatItem}
                  renderItem={({ item, index }) => (
                    <TouchableOpacity
                      style={[
                        {
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: 100,
                          height: 37,
                          borderWidth: 1,
                          borderRadius: 12,
                        },
                        SelectedIndex === index
                          ? {
                              borderColor: AppColors.primaryColor,
                              backgroundColor: AppColors.primaryColor,
                            }
                          : {
                              borderColor: '#979797',
                              backgroundColor: AppColors.white,
                            },
                      ]}
                      onPress={() => handlePress(item, index)}
                    >
                      <Text
                        style={[
                          {
                            fontSize: 14,
                            fontFamily: 'Lato_700Bold',
                          },
                          SelectedIndex === index
                            ? { color: AppColors.white }
                            : { color: '#C4C4C4' },
                        ]}
                      >
                        {item}
                      </Text>
                    </TouchableOpacity>
                  )}
                  keyExtractor={(item: any, index: any) => index.toString()}
                  showsHorizontalScrollIndicator={false}
                  showsVerticalScrollIndicator={true}
                  contentContainerStyle={{ columnGap: 10 }}
                  horizontal={true}
                />
              </View>
            </View>
            {SelectedIndex === 0 && (
              <ResidentialScreen navigation={navigation} />
            )}
            {SelectedIndex === 4 && <ExchangeScreen />}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
