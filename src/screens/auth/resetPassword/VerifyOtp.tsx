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
const VerifyOtpForForgetPasswordScreen = ({
  navigation,
}: {
  navigation: any;
}) => {
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
          <View
            style={{
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 50,
              flexDirection: 'row',
            }}
          >
            <Text
              style={{
                fontFamily: 'Lato_700Bold',
                fontSize: 32,
                lineHeight: 40,
              }}
            >
              Verify
            </Text>
            <TouchableOpacity
              style={{ width: 20, height: 20 }}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={{ maxHeight: '100%', maxWidth: '100%' }}
                source={require('../../../images/cancel_icon.png')}
                resizeMode="cover"
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 30,
            }}
          >
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  color: '#5A5A5A',
                  fontFamily: 'Lato_400Regular',
                  fontSize: 20,
                }}
              >
                {`Enter the 4 - digit code sent to\n `}
                <Text style={{ color: AppColors.black }}>
                  user4455@gmail.com
                </Text>
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              marginTop: 35,
              marginBottom: 9,
              width: '100%',
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
                borderWidth: 1,
                borderColor: '#646464',
              }}
            >
              <TextInput
                style={{
                  width: '94%',
                  height: '100%',
                  marginLeft: '3%',
                  fontSize: 16,
                  fontFamily: 'Lato_400Regular',
                }}
                id="otp"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType={'default'}
                placeholder={'Enter 4 - Digit Code'}
                textContentType="oneTimeCode"
              />
            </View>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('resetPassword');
              }}
              style={{
                backgroundColor: AppColors.primaryColor,
                height: 45,
                width: '100%',
                borderRadius: 10,
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
                  lineHeight: 22,
                  fontFamily: 'Lato_400Regular',
                }}
              >
                Verify Code
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default VerifyOtpForForgetPasswordScreen;
