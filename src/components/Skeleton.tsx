// import { Animated, Dimensions, Easing, StyleSheet, View } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import {
//   responsiveHeight,
//   responsiveWidth,
// } from 'react-native-responsive-dimensions';
// import { useEffect } from 'react';
// const AnimatedLG = Animated.createAnimatedComponent(LinearGradient);
// const { width } = Dimensions.get('window');

// export default function () {
//   const animatedValue = new Animated.Value(0);

//   useEffect(() => {
//     Animated.loop(
//       Animated.timing(animatedValue, {
//         toValue: 1,
//         duration: 1000,
//         easing: Easing.linear,
//         useNativeDriver: true,
//       })
//     ).start();
//   });

//   const translateX = animatedValue.interpolate({
//     inputRange: [0, 1],
//     outputRange: [-width, width],
//   });

//   return (
//     // <View style={{ width: responsiveWidth(80), height: responsiveHeight(17), backgroundColor: '#f5f6fa', borderRadius: 12, padding: 15,mb- justifyContent: 'center' }}>
//     <AnimatedLG
//       colors={['#f3f6f4', '#f3f6f4', '#f3f6f4', '#efefefef']}
//       start={{ x: 0, y: 0 }}
//       end={{ x: 1, y: 0 }}
//       style={{ transform: [{ translateX: translateX }] }}
//     />
//     // </View>
//   );
// }
