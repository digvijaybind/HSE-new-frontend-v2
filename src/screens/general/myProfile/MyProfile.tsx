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
  StatusBar,
  Pressable,
  Image,
  FlatList,
  KeyboardAvoidingView,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import CheckBox from 'expo-checkbox';
import { Picker } from '@react-native-picker/picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import AppColors from '../../../constants/colors/AppColors';
import SpecialCustomInputScreen from '../../../constants/reusable/SpecialCustomInput';

const UserProfileScreen = ({ navigation }: { navigation: any }) => {
  const flatItem = ['Personal Info', 'Address Info', 'KYC Verification'];

  const [SelectedIndex, setSelectedIndex] = useState(0);
  const [slide, setSlide] = useState(0);
  const handlePress = (item: any, index: number) => {
    setSelectedIndex(index);
  };

  return (
    <View
      style={{
        backgroundColor: '#ffffff',
        width: '100%',
        height: '100%',
        position: 'relative',
      }}
    >
      <View
        style={{
          width: '100%',
          height: 200,
          backgroundColor: AppColors.primaryColor,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          display: 'flex',
          position: 'relative',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
      >
        <View
          style={{
            width: '90%',
            marginLeft: '5%',
            marginRight: '5%',
            flexDirection: 'row',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 5,
            paddingBottom: 80,
          }}
        >
          <TouchableOpacity
            style={{ maxHeight: 30, maxWidth: 30 }}
            onPress={() => {
              navigation.dispatch(DrawerActions.openDrawer);
            }}
          >
            <Image
              style={{ maxHeight: '100%', maxWidth: '100%' }}
              source={require('../../../images/hamburgerButton.png')}
              resizeMode="cover"
            />
          </TouchableOpacity>

          <Text
            style={{
              fontFamily: 'Lato_700Bold',
              fontSize: 32,
              color: AppColors.white,
              lineHeight: 34,
            }}
          >
            My profile
          </Text>
          <View
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexDirection: 'row',
              gap: 10,
            }}
          >
            <TouchableOpacity
              style={{ maxHeight: 23, maxWidth: 23 }}
              onPress={() => {
                navigation.navigate('notification');
              }}
            >
              <Image
                style={{ maxHeight: '100%', maxWidth: '100%' }}
                source={require('../../../images/notification.png')}
                resizeMode="cover"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: '90%',
            marginLeft: '5%',
            marginRight: '5%',
            position: 'absolute',
            display: 'flex',
            justifyContent: 'flex-start',
            flexDirection: 'row',
            top: 160,
            height: 150,
          }}
        >
          <View
            style={{
              width: 150,

              height: '100%',
              backgroundColor: AppColors.primaryColor,
              borderWidth: 8,
              borderColor: AppColors.white,
              borderRadius: 100,
            }}
          ></View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              flexDirection: 'column',
              height: '100%',
              gap: 15,
            }}
          >
            <Text
              style={{
                fontFamily: 'Lato_700Bold',
                fontSize: 20,
                color: AppColors.black,
              }}
            >
              CHANDLER BING
            </Text>
            <View
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 20,
              }}
            >
              <Text
                style={{
                  fontFamily: 'Lato_400Regular',
                  fontSize: 14,
                  color: AppColors.primaryColor,
                }}
              >
                Click here to edit Profile picture.
              </Text>
              <TouchableOpacity style={{ maxHeight: 40, maxWidth: 40 }}>
                <Image
                  style={{ maxHeight: '100%', maxWidth: '100%' }}
                  source={require('../../../images/edit_pen.png')}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <ScrollView
        style={{ width: '100%', marginTop: 125 }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: '90%',
            marginLeft: '5%',
            marginRight: '5%',
          }}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              width: '100%',
            }}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                gap: 20,
              }}
            >
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  width: '100%',
                  gap: 10,
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
                          width: 110,
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
                              borderColor: '#979797',
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
                            : { color: '#C4C4C4' },
                        ]}
                      >
                        {item}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
              <View
                style={{
                  width: '90%',
                  marginLeft: '5%',
                  marginRight: '5%',
                  alignItems: 'center',
                  flexDirection: 'column',
                  gap: 10,
                }}
              >
                <Text
                  style={{
                    fontFamily: 'Lato_700Bold',
                    fontSize: 16,
                    color: AppColors.primaryColor,
                  }}
                >
                  Complete your Profile
                </Text>
                <Image
                  style={{ height: 4, width: '100%' }}
                  source={require('../../../images/line_progress.png')}
                  resizeMode="cover"
                />
              </View>
            </View>
            {SelectedIndex === 0 && (
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '100%',
                  marginTop: 20,
                  gap: 30,
                  marginBottom: 100,
                }}
              >
                <SpecialCustomInputScreen
                  data={{
                    label:
                      'First Name - Should be same as mentioned on your documents',
                    placeHolder: 'Chandler',
                    editable: false,
                    right_icon: require('../../../../src/images/lock.png'),
                  }}
                />
                <SpecialCustomInputScreen
                  data={{
                    label:
                      'Last Name - Should be same as mentioned on your documents',
                    placeHolder: 'Chandler',
                    editable: false,
                    right_icon: require('../../../../src/images/lock.png'),
                  }}
                />
                <SpecialCustomInputScreen
                  data={{
                    label: 'Email Id',
                    placeHolder: 'user4455@gmail.com',
                    editable: true,
                    right_icon: require('../../../../src/images/edit_pen.png'),
                  }}
                />
                <SpecialCustomInputScreen
                  data={{
                    label: 'Phone Number',
                    placeHolder: '+91******8799',
                    editable: true,
                    right_icon: require('../../../../src/images/edit_pen.png'),
                  }}
                />
                <SpecialCustomInputScreen
                  data={{
                    label: 'Date - DD/MM/YYYY',
                    placeHolder: '31/10/1985',
                    editable: true,
                    right_icon: require('../../../../src/images/edit_pen.png'),
                  }}
                />
                <SpecialCustomInputScreen
                  data={{
                    label: 'Investment Preferences',
                    placeHolder: 'Input',
                    editable: true,
                    right_icon: require('../../../../src/images/edit_pen.png'),
                  }}
                />
              </View>
            )}
            {SelectedIndex === 1 && (
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '100%',
                  marginTop: 20,
                  gap: 30,
                  marginBottom: 100,
                }}
              >
                <SpecialCustomInputScreen
                  data={{
                    label: 'Address Line 1',
                    placeHolder: '12, Neel Siddhi Apt.',
                    editable: true,
                    right_icon: require('../../../../src/images/edit_pen.png'),
                  }}
                />
                <SpecialCustomInputScreen
                  data={{
                    label: 'Address Line 2',
                    placeHolder: 'Sector 16A, Plot 25',
                    editable: true,
                    right_icon: require('../../../../src/images/edit_pen.png'),
                  }}
                />
                <SpecialCustomInputScreen
                  data={{
                    label: 'Address Line 3',
                    placeHolder: 'Near New Horizon School',
                    editable: true,
                    right_icon: require('../../../../src/images/edit_pen.png'),
                  }}
                />
                <SpecialCustomInputScreen
                  data={{
                    label: 'Pincode',
                    placeHolder: '410210',
                    editable: true,
                    right_icon: require('../../../../src/images/edit_pen.png'),
                  }}
                />
                <SpecialCustomInputScreen
                  data={{
                    label: 'State',
                    placeHolder: 'Maharashtra',
                    editable: true,
                    right_icon: require('../../../../src/images/edit_pen.png'),
                  }}
                />
                <SpecialCustomInputScreen
                  data={{
                    label: 'City',
                    placeHolder: 'Kharghar',
                    editable: true,
                    right_icon: require('../../../../src/images/edit_pen.png'),
                  }}
                />
              </View>
            )}
            {SelectedIndex === 2 && (
              <TouchableOpacity
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  width: '100%',
                  height: 70,
                  borderColor: AppColors.primaryColor,
                  borderWidth: 1,
                  marginTop: 50,
                  borderRadius: 20,
                }}
              >
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '98%',

                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}
                >
                  <Text
                    style={{
                      fontFamily: 'Lato_700Bold',
                      fontSize: 16,
                      marginTop: '1%',
                      color: AppColors.primaryColor,
                    }}
                  >
                    You are almost there !
                  </Text>
                  <View
                    style={{
                      width: '90%',
                      marginLeft: '5%',
                      marginRight: '5%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'row',
                      gap: 6,
                    }}
                  >
                    <Image
                      style={{ maxHeight: 4, maxWidth: '80%' }}
                      source={require('../../../images/line_progress.png')}
                      resizeMode="cover"
                    />
                    <Text
                      style={{
                        color: '#5A5A5A',
                        fontFamily: 'Lato_400Regular',
                        fontSize: 12,
                      }}
                    >
                      3/10
                    </Text>
                  </View>
                  <Text
                    style={{
                      marginBottom: '1%',
                      fontFamily: 'Lato_700Bold',
                      fontSize: 16,
                      color: AppColors.grayBlack,
                    }}
                  >
                    Tap to complete registration
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default UserProfileScreen;
