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

const KycVerificationScreen = ({ navigation }: { navigation: any }) => {
  const [isChecked, setChecked] = useState(false);
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
              source={require('../../images/back_arrow.png')}
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
            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
              KYC Verification
            </Text>
            <View
              style={{
                width: '100%',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
                gap: 3,
              }}
            >
              <Text
                style={{
                  color: '#5A5A5A',
                  fontSize: 16,
                  maxWidth: 350,
                  textAlign: 'center',
                  lineHeight: 28,
                }}
              >
                Instructions: To ensure the security of your investments, we
                need to verify your identity. Click & update the Documents
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              marginTop: 5,
              width: '90%',
              marginLeft: '5%',
            }}
          >
            {Array.from({ length: 4 }).map((_, index) => (
              <View
                key={index}
                style={{
                  backgroundColor: '#fff',
                  height: 50,
                  borderRadius: 10,
                  width: '100%',
                  flexDirection: 'column',
                  alignItems: 'center',
                  borderStyle: 'solid',
                  borderWidth: 2,
                  borderColor: AppColors.primaryColor,
                  justifyContent: 'center',
                  marginBottom: 20,
                }}
              >
                <View
                  style={{
                    width: '90%',
                    marginLeft: '5%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Text
                    style={{
                      color: AppColors.primaryColor,
                      fontSize: 18,
                      fontWeight: '500',
                    }}
                  >
                    {index === 0
                      ? 'Upload Your Selfie'
                      : index === 1
                      ? 'Address Proof'
                      : index === 2
                      ? 'Employment Proof'
                      : 'Upload Document'}
                  </Text>

                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require('../../images/circular_angle.png')}
                  />
                </View>
              </View>
            ))}
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'flex-start',
                alignItems: 'center',
                height: 25,
              }}
            >
              <CheckBox
                value={isChecked}
                onValueChange={setChecked}
                color="#00936A"
                style={{
                  height: 13,
                  width: 13,
                  borderWidth: 1,
                  marginRight: 8,
                }}
              />
              <Text style={{ color: '#938F99', fontSize: 10 }}>
                I hereby give consent to access my documents for verification
                and given data is correct according to me.
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('addressUpload')}
              style={{
                backgroundColor: AppColors.primaryColor,
                height: 45,
                width: '100%',
                borderRadius: 6,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 10,
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
                Verify
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default KycVerificationScreen;
