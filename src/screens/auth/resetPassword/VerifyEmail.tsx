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
const VerifyEmailForForgetPasswordScreen = ({
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
              Forgot Password
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
                {`Please enter your registered email id to\n receive the reset code.`}
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
                id="emailId"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType={'default'}
                placeholder={'Enter Email id'}
                textContentType="emailAddress"
              />
            </View>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('verifyOtpForResetPassword');
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
                Send Code
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default VerifyEmailForForgetPasswordScreen;
