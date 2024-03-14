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
import { Picker } from '@react-native-picker/picker';
import CheckBox from 'expo-checkbox';
import AppColors from '../../../constants/colors/AppColors';

export const GetStartedScreen = ({ navigation }: { navigation: any }) => {
  const [selectedValue, setSelectedValue] = useState('placeholder');
  const items = [
    { label: 'Location', value: 'placeholder' },
    { label: 'Item 2', value: 'item2' },
    { label: 'Item 3', value: 'item3' },
  ];
  const [switchToggle, setSwitchToggle] = useState(false);
  const [switchToggleTwo, setSwitchToggleTwo] = useState(false);
  const [isChecked, setChecked] = useState(false);
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        flex: 1,
        position: 'relative',
        backgroundColor: AppColors.white,
      }}
    >
      <View
        style={{
          width: '90%',
          marginLeft: '5%',
          marginRight: '5%',
          position: 'absolute',
          top: 20,
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Picker
          selectedValue={selectedValue}
          itemStyle={{
            fontFamily: 'Lato_400Regular',
            color: '#5A5A5A',
            fontSize: 30,
          }}
          onValueChange={(itemValue) => {
            if (itemValue !== 'placeholder') {
              setSelectedValue(itemValue);
              console.log('This is selectedvalue', selectedValue);
            }
          }}
          style={{
            height: 50,
            width: 145,
          }}
          dropdownIconColor={AppColors.black}
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
            backgroundColor: '#E5E5E5',
            borderWidth: 1,
            borderColor: '#646464',
            width: 50,
            height: 30,
            borderRadius: 16,
            position: 'relative',
          }}
        >
          {!switchToggleTwo && (
            <TouchableOpacity
              onPress={() => {
                setSwitchToggleTwo(true);
              }}
              style={{
                width: 30,
                height: '100%',
                borderRadius: 100,
                backgroundColor: AppColors.white,
                position: 'absolute',
                left: 0,
                top: 0,
              }}
            ></TouchableOpacity>
          )}
          {switchToggleTwo && (
            <TouchableOpacity
              onPress={() => {
                setSwitchToggleTwo(false);
              }}
              style={{
                width: 30,
                height: 30,
                borderRadius: 100,
                backgroundColor: '#efefef',
                position: 'absolute',
                right: 0,
                top: 0,
              }}
            ></TouchableOpacity>
          )}
        </View>
      </View>
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
            marginBottom: 5,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
              flexDirection: 'row',
              width: '100%',
            }}
          >
            <Image
              style={{ maxHeight: 250, maxWidth: 300 }}
              source={require('../../../images/money_icon.png')}
              resizeMode="cover"
            />
          </View>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              width: '100%',
              gap: 10,
            }}
          >
            <Text
              style={{
                fontFamily: 'Lato_700Bold',
                fontSize: 32,
                color: AppColors.black,
              }}
            >
              Hey
            </Text>
            <Text
              style={{
                fontFamily: 'Lato_700Bold',
                fontSize: 24,
                color: '#5A5A5A',
                textAlign: 'center',
              }}
            >
              Welcome rational investor : Explore, Invest, & Earn.
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              width: '100%',
              marginTop: 40,
              gap: 20,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: AppColors.primaryColor,
                height: 45,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                borderRadius: 10,
              }}
              onPress={() => {
                navigation.navigate('login');
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'Lato_700Bold',
                  color: AppColors.white,
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: AppColors.white,
                height: 45,
                display: 'flex',
                borderColor: AppColors.primaryColor,
                borderWidth: 2,
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
                  color: AppColors.primaryColor,
                }}
              >
                Signup
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginTop: 15,
              gap: 10,
            }}
          >
            <CheckBox
              value={isChecked}
              onValueChange={setChecked}
              color={AppColors.primaryColor}
              style={{
                height: 18,
                width: 18,
                borderWidth: 1,
                borderRadius: 100,
              }}
            />
            <Text
              style={{
                fontSize: 12,
                fontFamily: 'Lato_400Regular',
                maxWidth: 310,
                color: '#979797',
              }}
            >
              I agree to the{' '}
              <Text
                style={{ color: AppColors.black, fontFamily: 'Lato_700Bold' }}
              >
                Terms of Use
              </Text>{' '}
              & acknowledge I have read the{' '}
              <Text
                style={{ color: AppColors.black, fontFamily: 'Lato_700Bold' }}
              >
                Privacy Policy
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
