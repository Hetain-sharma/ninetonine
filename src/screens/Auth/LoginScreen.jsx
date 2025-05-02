import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import OtpScreen from './OtpScreen';
import COLORS from '../../constants/color';
import AssetsStock from '../../constants/ImagesContants';
import {SafeAreaView} from 'react-native-safe-area-context';

const LoginScreen = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirm, setConfirm] = useState(null);

  useEffect(() => {
    console.log('useEffect confirm updated:', confirm);
  }, [confirm]);

  async function signInWithPhoneNumber() {
    if (!phoneNumber || phoneNumber.length !== 10) {
      console.error('Invalid phone number');
      return;
    }

    const formattedNumber = `+91${phoneNumber}`;
    console.log('Attempting to sign in with:', formattedNumber);

    try {
      const confirmation = await auth().signInWithPhoneNumber(formattedNumber);
      console.log('confirmation from Firebase:', confirmation);
      setConfirm(confirmation);

      // If using navigation and OtpScreen is a separate screen
      if (navigation) {
        navigation.navigate('OtpScreen', {confirmation});
      }
    } catch (error) {
      console.error('❌ Firebase Error:', error);
    }
  }

  return (
    <KeyboardAvoidingView
      style={{flex: 1, backgroundColor: COLORS.white}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 25}>
      <ScrollView style={styles.container}>
        <StatusBar />

        {confirm && !navigation ? (
          <OtpScreen confirm={confirm} />
        ) : (
          <>
            <SafeAreaView>
              <View>
                {/* <TouchableOpacity
                  onPress={() => navigation.navigate('UserHomePage')}
                  style={styles.skip}>
                  <Text style={styles.skipText}>Already Logged In</Text>
                </TouchableOpacity> */}
                <TouchableOpacity
                  onPress={() => navigation.navigate('Main')}
                  style={styles.skip}>
                  <Text style={styles.skipText}>Skip</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.imageContainer}>
                <Image
                  source={AssetsStock.login}
                  resizeMode="contain"
                  style={styles.image}
                />
              </View>

              <View style={styles.contentContainer}>
                <Text style={styles.title}>
                  Sign in with your{'\n'} mobile number
                </Text>
                <Text style={styles.subtitle}>
                  We will send you a Confirmation code
                </Text>
                <Text style={styles.testingNoText}>
                  [ Test Mobile No. : 9310009651 ]
                </Text>

                <View style={styles.phoneInputContainer}>
                  <Image source={AssetsStock.india} style={styles.flagIcon} />
                  <View style={styles.divider} />
                  <Text style={styles.countryCode}>+91 -</Text>
                  <TextInput
                    style={styles.phoneInput}
                    placeholder="1234567890"
                    keyboardType="numeric"
                    maxLength={10}
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                  />
                </View>

                <TouchableOpacity
                  style={styles.otpButton}
                  onPress={signInWithPhoneNumber}>
                  <Text style={styles.otpButtonText}>Send OTP</Text>
                </TouchableOpacity>
              </View>
            </SafeAreaView>
          </>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white || '#FFFFFF',
  },
  imageContainer: {
    width: '100%',
    height: 350, // Adjust as needed
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  image: {
    resizeMode: 'contain',
  },
  divider: {
    width: 1,
    height: 25,
    backgroundColor: '#D5B9F9',
    marginHorizontal: 8,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
    color: COLORS.secondary || '#secondary',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    color: COLORS.gray || '#7D7D7D',
    marginBottom: 30,
    textAlign: 'center',
    width: 900,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 30,
    width: '80%',
    borderWidth: 1,
    borderColor: '#D5B9F9',
    borderRadius: 5,
  },
  flagIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
    borderRadius: 12,
  },
  countryCode: {
    fontSize: 16,
    color: COLORS.black || '#000000',
    marginRight: 5,
  },
  phoneInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 2,
    color: COLORS.black || '#000000',
  },
  otpButton: {
    fontFamily: 'Poppins-Bold',
    backgroundColor: COLORS.primary || '#571D99',
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 5,
    width: '80%',
    height: 45,
    alignItems: 'center',
  },
  otpButtonText: {
    fontFamily: 'Poppins-Regular',
    color: COLORS.white || '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  testingNoText: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
    marginBottom: 30,
    fontFamily: 'Poppins-Regular',
  },
  skip: {
    alignSelf: 'flex-end',
    paddingHorizontal: 20,
  },
  skipText: {
    color: COLORS.primary,
  },
});

// import {
//   Image,
//   StatusBar,
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   TouchableOpacity,
//   Platform,
//   KeyboardAvoidingView,
//   Dimensions,
// } from 'react-native';
// import React, {useState, useEffect} from 'react';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import {ScrollView} from 'react-native-gesture-handler';
// import auth from '@react-native-firebase/auth';
// import OtpScreen from './OtpScreen';
// import COLORS from '../constants/color';
// import AssetsStock from '../constants/ImagesContants';

// const {height: SCREEN_HEIGHT} = Dimensions.get('window');

// const LoginScreen = ({navigation}) => {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [confirm, setConfirm] = useState(null);

//   useEffect(() => {
//     console.log('useEffect confirm updated:', confirm);
//   }, [confirm]);

//   async function signInWithPhoneNumber() {
//     if (!phoneNumber || phoneNumber.length !== 10) {
//       console.error('Invalid phone number');
//       return;
//     }

//     const formattedNumber = `+91${phoneNumber}`;
//     console.log('Attempting to sign in with:', formattedNumber);

//     try {
//       const confirmation = await auth().signInWithPhoneNumber(formattedNumber);
//       console.log('confirmation from Firebase:', confirmation);
//       setConfirm(confirmation);

//       // If using navigation and OtpScreen is a separate screen
//       if (navigation) {
//         navigation.navigate('OtpScreen', {confirmation});
//       }
//     } catch (error) {
//       console.error('❌ Firebase Error:', error);
//     }
//   }

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <KeyboardAvoidingView
//         style={styles.keyboardAvoidingView}
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 25}>
//         <ScrollView
//           style={styles.container}
//           contentContainerStyle={styles.scrollContent}
//           keyboardShouldPersistTaps="handled">
//           <StatusBar />

//           {confirm && !navigation ? (
//             <OtpScreen confirm={confirm} />
//           ) : (
//             <>
//               <View style={styles.imageContainer}>
//                 <Image
//                   source={AssetsStock.login}
//                   resizeMode="contain"
//                   style={styles.image}
//                 />
//               </View>

//               <View style={styles.contentContainer}>
//                 <Text style={styles.title}>
//                   Sign in with your{'\n'} mobile number
//                 </Text>
//                 <Text style={styles.subtitle}>
//                   We will send you a Confirmation code
//                 </Text>
//                 <Text style={styles.testingNoText}>
//                   [ Test Mobile No. : 9310009651 ]
//                 </Text>

//                 <View style={styles.phoneInputContainer}>
//                   <Image source={AssetsStock.india} style={styles.flagIcon} />
//                   <View style={styles.divider} />
//                   <Text style={styles.countryCode}>+91 -</Text>
//                   <TextInput
//                     style={styles.phoneInput}
//                     placeholder="1234567890"
//                     keyboardType="numeric"
//                     maxLength={10}
//                     value={phoneNumber}
//                     onChangeText={setPhoneNumber}
//                   />
//                 </View>

//                 <TouchableOpacity
//                   style={styles.otpButton}
//                   onPress={signInWithPhoneNumber}>
//                   <Text style={styles.otpButtonText}>Send OTP</Text>
//                 </TouchableOpacity>
//               </View>
//             </>
//           )}
//         </ScrollView>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// };

// export default LoginScreen;

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: COLORS.white || '#FFFFFF',
//   },
//   keyboardAvoidingView: {
//     flex: 1,
//     backgroundColor: COLORS.white || '#FFFFFF',
//   },
//   container: {
//     flex: 1,
//     backgroundColor: COLORS.white || '#FFFFFF',
//   },
//   scrollContent: {
//     flexGrow: 1,
//     minHeight: SCREEN_HEIGHT,
//     justifyContent: 'space-between',
//   },
//   imageContainer: {
//     width: '100%',
//     height: SCREEN_HEIGHT * 0.35, // Responsive height
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: 20,
//   },
//   image: {
//     width: '80%',
//     height: '80%',
//     resizeMode: 'contain',
//   },
//   divider: {
//     width: 1,
//     height: 25,
//     backgroundColor: '#D5B9F9',
//     marginHorizontal: 8,
//   },
//   contentContainer: {
//     flex: 1,
//     paddingHorizontal: 16,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingBottom: 20,
//   },
//   title: {
//     fontFamily: 'Poppins-Bold',
//     fontSize: 24,
//     fontWeight: '600',
//     marginBottom: 10,
//     color: COLORS.secondary || '#secondary',
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 16,
//     color: COLORS.gray || '#7D7D7D',
//     marginBottom: 10,
//     textAlign: 'center',
//     width: '100%',
//   },
//   phoneInputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     marginVertical: 20,
//     width: '90%',
//     borderWidth: 1,
//     borderColor: '#D5B9F9',
//     borderRadius: 5,
//   },
//   flagIcon: {
//     width: 24,
//     height: 24,
//     marginRight: 8,
//     borderRadius: 12,
//   },
//   countryCode: {
//     fontSize: 16,
//     color: COLORS.black || '#000000',
//     marginRight: 5,
//   },
//   phoneInput: {
//     flex: 1,
//     fontSize: 16,
//     paddingVertical: 2,
//     color: COLORS.black || '#000000',
//   },
//   otpButton: {
//     fontFamily: 'Poppins-Bold',
//     backgroundColor: COLORS.primary || '#571D99',
//     paddingHorizontal: 40,
//     paddingVertical: 12,
//     borderRadius: 5,
//     width: '90%',
//     height: 45,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   otpButtonText: {
//     fontFamily: 'Poppins-Regular',
//     color: COLORS.white || '#FFFFFF',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   testingNoText: {
//     fontSize: 14,
//     color: '#555',
//     marginTop: 5,
//     fontFamily: 'Poppins-Regular',
//   },
// });
