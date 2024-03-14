import React, { useEffect, useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  Pressable,
  ImageBackground,
  Image,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppColors from '../../../constants/colors/AppColors';

export const OnboardingScreenTwo = ({ navigation }: { navigation: any }) => {
  return (
    <ImageBackground
      source={require('../../../assets/onboarding_screen_2.png')}
      style={{ width: '100%', height: '100%', flex: 1, position: 'relative' }}
    >
      <TouchableOpacity
        style={{ position: 'absolute', right: 20, top: 35 }}
        onPress={() => {
          navigation.navigate('onBoardingThree');
        }}
      >
        <Text
          style={{
            fontFamily: 'Lato_700Bold',
            fontSize: 16,
            color: AppColors.black,
          }}
        >
          Skip
        </Text>
      </TouchableOpacity>
      <View
        style={{
          width: '90%',
          marginLeft: '5%',
          marginRight: '5%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',

          justifyContent: 'flex-end',
        }}
      >
        <View
          style={{
            width: '100%',
            marginBottom: 3,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <View
            style={{
              width: '100%',

              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontFamily: 'Lato_700Bold',
                fontSize: 32,
                color: AppColors.black,
                textAlign: 'center',
              }}
            >
              {`"Smart Choices Simplified: We Find the Best, You Reap the Rewards"`}
            </Text>
            <Text
              style={{
                marginTop: 6,
                fontFamily: 'Lato_700Bold',
                fontSize: 20,
                color: '#5A5A5A',
                textAlign: 'center',
              }}
            >
              {`Our team diligently analyzes numerous properties to ease your burden. 
We showcase only the most appealing investments on our platform, sparing you from the exhaustive task.`}
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Image
              style={{ maxHeight: 6, maxWidth: 76 }}
              source={require('../../../assets/indicatot_two.png')}
              resizeMode="cover"
            />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: AppColors.primaryColor,
              height: 50,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              borderRadius: 10,
            }}
            onPress={() => {
              navigation.navigate('onBoardingThree');
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Lato_700Bold',
                color: AppColors.white,
              }}
            >
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
