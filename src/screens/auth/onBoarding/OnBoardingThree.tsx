/**
 * Copyright 2023 ROU Technology
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
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

export const OnboardingScreenThree = ({ navigation }: { navigation: any }) => {
  return (
    <ImageBackground
      source={require('../../../assets/onboarding_screen_3.png')}
      style={{ width: '100%', height: '100%', flex: 1 }}
    >
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
              {`“Seamless Transactions, Secure Investments"`}
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
              {`Easy Investing: 
No Commitments, No Lock-ins – Enjoy Smooth, Secure Transactions Enabled by Blockchain Technology.
`}
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
              source={require('../../../assets/indicator_three.png')}
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
              navigation.navigate('getStarted');
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
