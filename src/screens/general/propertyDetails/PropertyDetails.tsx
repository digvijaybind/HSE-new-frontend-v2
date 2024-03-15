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
  ImageBackground,
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
import GrowthScreen from './growth/Growth';
import OverViewScreen from './overview/OverView';
import DocumentScreen from './documents/Documents';
import FaqsScreen from './fqa/Faqs';
import CommonButtonScreen from '../../../constants/reusable/CommonButton';
const PropertyDetailsScreen = ({ navigation }: { navigation: any }) => {
  const flatItem = ['Growth', 'Overview', 'Documents', 'FAQ’s'];

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
      <ImageBackground
        source={require('../../../images/productdetails.png')}
        style={{
          height: 300,
          width: '100%',
          position: 'relative',
          display: 'flex',
          alignItems: 'flex-start',
        }}
      >
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: 60,
            width: '90%',
            marginLeft: '5%',
            marginRight: '5%',
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{ height: 50, width: 50 }}
              source={require('../../../images/back_arrow.png')}
              resizeMode="cover"
              tintColor={'#fff'}
            />
          </TouchableOpacity>
          <View
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexDirection: 'row',
              gap: 20,
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                style={{ height: 40, width: 40 }}
                source={require('../../../images/bookmark_unfocus.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                style={{ height: 40, width: 40 }}
                source={require('../../../images/right_curve_arrow.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'row',
            position: 'absolute',
            bottom: -40,
            right: 10,
          }}
        >
          <TouchableOpacity>
            <Image
              style={{ height: 70, width: 70 }}
              source={require('../../../images/random_view.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{ height: 70, width: 70 }}
              source={require('../../../images/play_video.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <ScrollView
        style={{ width: '100%', marginTop: 35 }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            width: '90%',
            marginLeft: '5%',
            marginRight: '5%',
            display: 'flex',
            flexDirection: 'column',
            marginBottom: 90,
          }}
        >
          <View
            style={{
              marginTop: 10,
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 10,
            }}
          >
            <Text
              style={{
                color: AppColors.black,
                fontFamily: 'Lato_700Bold',
                fontSize: 20,
              }}
            >
              Marshall Meadows
            </Text>
            <Text
              style={{
                color: AppColors.grayBlack,
                fontFamily: 'Lato_400Regular',
                fontSize: 14,
              }}
            >
              Dramapur Village, Colva
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
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
                      width: 80,
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
                          borderColor: AppColors.primaryColor,
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
                        : { color: AppColors.primaryColor },
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {SelectedIndex === 0 && <GrowthScreen />}
          {SelectedIndex === 1 && <OverViewScreen />}
          {SelectedIndex === 2 && <DocumentScreen />}
          {SelectedIndex === 3 && <FaqsScreen />}
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
          bottom: 10,
        }}
      >
        <CommonButtonScreen
          data={{
            title: 'Let’s Invest',
            width: 205,
            height: 55,
            doPress: () => {
              navigation.navigate('confirmSummary');
            },
          }}
        />
      </View>
    </View>
  );
};

export default PropertyDetailsScreen;
