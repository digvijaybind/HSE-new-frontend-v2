import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { loginContext } from '../context/LoginProvider';
import ConfirmEmailScreen from '../screens/auth/ConfirmEmailId';
import AfterEmailVerificationScreen from '../screens/auth/AfterEmailVerification';
import KycVerificationScreen from '../screens/auth/KycVerificationMenue';
import PhoneNumberVerificationScreen from '../screens/auth/PhoneNumberVerification';
import SelfieUploadingScreen from '../screens/auth/SelfieUploading';
import SetPasswordScreen from '../screens/auth/SetPassword';
import { RootNavigation } from './Tab';
import { OnboardingScreenOne } from '../screens/auth/onBoarding/OnBoardingOne';
import { OnboardingScreenTwo } from '../screens/auth/onBoarding/OnBoardingTwo';
import { OnboardingScreenThree } from '../screens/auth/onBoarding/OnBoardingThree';
import { GetStartedScreen } from '../screens/auth/onBoarding/GetStarted';
import { LoginScreen } from '../screens/auth/LoginScreen';
import ResetPasswordScreen from '../screens/auth/resetPassword/ResetPassword';

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="onBoardingOne">
      <Stack.Screen
        name="onBoardingOne"
        component={OnboardingScreenOne}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="onBoardingTwo"
        component={OnboardingScreenTwo}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="onBoardingThree"
        component={OnboardingScreenThree}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="getStarted"
        component={GetStartedScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="passwordSetup"
        component={SetPasswordScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="confirmEmail"
        component={ConfirmEmailScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="afterConfirmEmail"
        component={AfterEmailVerificationScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="verifyPhoneNumber"
        component={PhoneNumberVerificationScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="kycVerify"
        component={KycVerificationScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="resetPassword"
        component={ResetPasswordScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="selfieUpload"
        component={SelfieUploadingScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
