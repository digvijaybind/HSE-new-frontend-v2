import React, { useEffect, useMemo, useState } from 'react';
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
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import CheckBox from 'expo-checkbox';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppColors from '../../../constants/colors/AppColors';
const ResetPasswordScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View
      style={{
        backgroundColor: '#ffffff',
        width: '100%',
        height: '100%',
        position: 'relative',
      }}
    >
      <ScrollView style={{}}>
        <View
          style={{
            width: '90%',
            marginLeft: '5%',
            height: '100%',
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginBottom: 30,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ marginTop: 50 }}
          >
            <Image
              style={{ maxHeight: 40, maxWidth: 40 }}
              source={require('../../../images/back_arrow.png')}
              resizeMode="cover"
            />
          </TouchableOpacity>

          <View
            style={{
              width: '100%',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 30,
            }}
          >
            <Text
              style={{
                fontSize: 32,
                fontWeight: 'bold',
                fontFamily: 'Lato_700Bold',
              }}
            >
              Reset Password
            </Text>
            <View
              style={{
                width: '100%',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 30,
              }}
            >
              <Text
                style={{
                  color: '#5A5A5A',
                  fontSize: 20,
                  fontFamily: 'Lato_400Regular',
                }}
              >{`Your new password must be different\n from previously entered passwords.`}</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              marginTop: 35,
              marginBottom: 9,
              width: '90%',
              marginLeft: '5%',
              gap: 25,
            }}
          >
            <View
              style={{
                backgroundColor: '#fff',
                height: 45,
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
                placeholder={'Enter password'}
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
                  source={require('../../../images/cancelInput_value.png')}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                backgroundColor: '#fff',
                height: 45,
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
                placeholder={'Confirm password'}
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
                  source={require('../../../images/cancelInput_value.png')}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => {
                console.log('This is login In');
              }}
              style={{
                backgroundColor: AppColors.primaryColor,
                height: 45,
                width: '100%',
                borderRadius: 6,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  color: '#ffffff',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  fontSize: 16,
                  fontFamily: 'Lato_400Regular',
                  lineHeight: 22,
                }}
              >
                Change Password
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ResetPasswordScreen;
