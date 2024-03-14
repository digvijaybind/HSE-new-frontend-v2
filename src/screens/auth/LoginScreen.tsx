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
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppColors from '../../constants/colors/AppColors';
import CheckBox from 'expo-checkbox';
import { loginContext } from '../../context/LoginProvider';

export const LoginScreen = ({ navigation }: { navigation: any }) => {
  const { userData, updateUserData } = loginContext();
  const [isChecked, setChecked] = useState(false);
  return (
    <ImageBackground
      source={require('../../assets/login_screen.png')}
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

            display: 'flex',
            flexDirection: 'column',
            marginBottom: 20,
          }}
        >
          <View
            style={{
              width: '100%',

              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 20,
            }}
          >
            <Text
              style={{
                fontSize: 40,
                fontFamily: 'Lato_700Bold',
                color: AppColors.white,
                marginBottom: 5,
              }}
            >
              Login
            </Text>
            <Image
              style={{ height: 280, width: 280, borderRadius: 100 }}
              source={require('../../assets/ellipce.png')}
              resizeMode="cover"
            />
          </View>
          <View
            style={{
              width: '100%',
              gap: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Lato_400Regular',
                marginBottom: 10,
                color: AppColors.white,
              }}
            >
              Please login to continue
            </Text>
            <View
              style={{
                backgroundColor: '#fff',
                height: 50,
                borderRadius: 10,
                width: '100%',
                flexDirection: 'column',
                alignItems: 'center',
                borderTopWidth: 0,
                borderRightWidth: 0,
                borderLeftWidth: 0,
                borderBottomWidth: 1,
                borderBottomColor: '#C6C6C8',
                position: 'relative',
              }}
            >
              <TextInput
                style={{
                  width: '94%',
                  height: '100%',
                  marginLeft: '3%',
                  fontFamily: 'Lato_400Regular',
                }}
                id="password"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType={'default'}
                placeholder={'Enter Email id / Mobile Number'}
                placeholderTextColor={'#3C3C43'}
                textContentType="password"
              />
              <TouchableOpacity
                style={{
                  height: 40,
                  width: 40,
                  position: 'absolute',
                  right: 5,
                  bottom: 5,
                }}
              >
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  source={require('../../images/cancelInput_value.png')}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                backgroundColor: '#fff',
                height: 50,
                marginTop: 15,
                borderRadius: 10,
                width: '100%',
                flexDirection: 'column',
                alignItems: 'center',
                borderTopWidth: 0,
                borderRightWidth: 0,
                borderLeftWidth: 0,
                borderBottomWidth: 1,
                borderBottomColor: '#C6C6C8',
                position: 'relative',
              }}
            >
              <TextInput
                style={{
                  width: '94%',
                  height: '100%',
                  marginLeft: '3%',
                  fontFamily: 'Lato_400Regular',
                }}
                id="password"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType={'default'}
                placeholder={'Enter Password'}
                placeholderTextColor={'#3C3C43'}
                textContentType="password"
              />
              <TouchableOpacity
                style={{
                  height: 40,
                  width: 40,
                  position: 'absolute',
                  right: 5,
                  bottom: 5,
                }}
              >
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  source={require('../../images/cancelInput_value.png')}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={{
              marginTop: 30,
              backgroundColor: '#003534',
              height: 50,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              borderRadius: 10,
            }}
            onPress={() => {
              updateUserData({ ...userData, hasLoggedIn: true });
              // navigation.navigate('home');

              // navigation.navigate('home');
            }}
          >
            <Text
              style={{
                fontSize: 22,
                fontFamily: 'Lato_400Regular',
                color: AppColors.white,
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
          <View
            style={{
              marginTop: 10,
              width: '100%',
              flexDirection: 'row',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexDirection: 'row',
                gap: 6,
              }}
            >
              <CheckBox
                value={isChecked}
                onValueChange={setChecked}
                color={AppColors.white}
                style={{
                  height: 23,
                  width: 23,
                  borderWidth: 1,
                }}
              />
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'Lato_400Regular',
                  color: AppColors.white,
                }}
              >
                Remember me
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('resetPassword');
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'Lato_400Regular',
                  color: AppColors.white,
                }}
              >
                Forgot password ?
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              width: '100%',
              position: 'relative',
              marginTop: 30,
            }}
          >
            <Image
              source={require('../../assets/black_line.png')}
              style={{
                width: '90%',
                marginLeft: '5%',
                marginRight: '5%',
                height: 2,
              }}
            />
            <Text
              style={{
                position: 'absolute',
                top: -12,
                zIndex: 999,
                fontSize: 20,
                fontFamily: 'Lato_400Regular',
                color: AppColors.black,
              }}
            >
              Or Login with
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              width: '80%',
              marginLeft: '10%',
              marginRight: '10%',
              marginTop: 30,
            }}
          >
            <TouchableOpacity>
              <Image
                style={{
                  height: 30,
                  width: 30,
                }}
                source={require('../../images/facebook_icon.png')}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{
                  height: 30,
                  width: 30,
                }}
                source={require('../../images/goggle_icon.png')}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{
                  height: 30,
                  width: 30,
                }}
                source={require('../../images/apple_icon.png')}
                resizeMode="cover"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
