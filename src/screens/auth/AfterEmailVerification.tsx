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
import AppColors from '../../constants/colors/AppColors';

const AfterEmailVerificationScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View
      style={{
        backgroundColor: AppColors.primaryColor,
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
              height: '100%',
              flexDirection: 'column',
              alignItems: 'flex-start',
              marginBottom: 30,
              marginTop: 20,
              gap: 20,
            }}
          >
            <Text
              style={{
                marginTop: 50,
                fontSize: 20,
                lineHeight: 28,
                fontWeight: 'bold',
                color: '#000000',
              }}
            >
              {` Let's prepare you for\n investing.`}
            </Text>
            <Text style={{ color: '#00000066', fontSize: 17 }}>
              Complete the steps to proceed.
            </Text>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'flex-start',
                marginTop: 10,
                width: '95%',
                marginLeft: '2.5%',
                marginRight: '2.5%',
                justifyContent: 'center',
              }}
            >
              <View
                style={{
                  backgroundColor: '#fff',
                  height: 70,
                  borderRadius: 8,
                  width: '100%',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 19,
                }}
              >
                <View
                  style={{
                    width: '95%',
                    marginLeft: '2.5%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      gap: 5,
                    }}
                  >
                    <Text style={{ color: '#3C3C4399' }}>STEP 1</Text>
                    <Text style={{ color: '#3C3C4399' }}>
                      Create your account.
                    </Text>
                  </View>
                  <Image
                    style={{ width: 30, height: 30 }}
                    source={require('../../images/progress_mark.png')}
                  />
                </View>
              </View>
              <View
                style={{
                  backgroundColor: '#fff',
                  height: 70,
                  borderRadius: 8,
                  width: '100%',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 19,
                }}
              >
                <View
                  style={{
                    width: '95%',
                    marginLeft: '2.5%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      gap: 5,
                    }}
                  >
                    <Text style={{ color: '#3C3C4399' }}>STEP 2</Text>
                    <Text style={{ color: '#3C3C4399' }}>
                      Verify your Email id.
                    </Text>
                  </View>
                  <Image
                    style={{ width: 30, height: 30 }}
                    source={require('../../images/progress_mark.png')}
                  />
                </View>
              </View>
              <View
                style={{
                  backgroundColor: '#fff',
                  height: 70,
                  borderRadius: 8,
                  width: '100%',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 19,
                }}
              >
                <View
                  style={{
                    width: '95%',
                    marginLeft: '2.5%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      gap: 5,
                    }}
                  >
                    <Text style={{ color: '#000000' }}>STEP 3</Text>
                    <Text style={{ color: '#000000' }}>
                      Verify your Phone Number.
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: '#fff',
                  height: 70,
                  borderRadius: 8,
                  width: '100%',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 19,
                }}
              >
                <View
                  style={{
                    width: '95%',
                    marginLeft: '2.5%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      gap: 5,
                    }}
                  >
                    <Text style={{ color: '#000000' }}>STEP 4</Text>
                    <Text style={{ color: '#000000' }}>
                      Add Bank account to create a Wallet.
                    </Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('verifyEmailForResetPassword')
                }
                style={{
                  backgroundColor: '#003534',
                  height: 45,
                  width: '100%',
                  borderRadius: 6,
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 5,
                }}
              >
                <Text
                  style={{
                    color: '#ffffff',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    fontSize: 16,
                    lineHeight: 22,
                  }}
                >
                  Continue
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '70%',
                  marginLeft: '15%',
                  marginTop: 10,
                }}
              >
                <Text
                  style={{ fontSize: 14, color: '#ffffff', marginRight: 5 }}
                >
                  Do this later.
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('login')}>
                  <Text style={{ fontSize: 14, color: '#000000' }}>Skip</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AfterEmailVerificationScreen;
