import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AssetsStock from '../constants/ImagesContants';
import * as Animatable from 'react-native-animatable';
import {useToast} from '../service/ToastProvider';
import {OtpInput} from 'react-native-otp-entry';
import COLORS from '../constants/color';
import {useRoute} from '@react-navigation/native';

const OtpScreen = ({navigation}) => {
  const [otp, setOtp] = useState('');
  const route = useRoute();
  const confirmation = route.params?.confirmation;
  const {showToast} = useToast();

  const confirmCode = async () => {
    try {
      if (!confirmation) {
        showToast('Confirmation object is missing', 'error');
        return;
      }

      await confirmation.confirm(otp);
      showToast('OTP Verified Successfully!', 'success');
      navigation.navigate('Homepage');
    } catch (error) {
      console.log('OTP confirmation error:', error);
      showToast('Invalid OTP. Please try again.', 'error');
    }
  };

  const handleVerify = () => {
    if (otp.length === 6) {
      confirmCode();
    } else {
      showToast('Please enter a complete 6-digit OTP', 'error');
    }
  };

  const dismissKeyboard = () => Keyboard.dismiss();

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}>
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            keyboardShouldPersistTaps="handled">
            <Animatable.View
              animation="fadeInDown"
              style={styles.imageContainer}>
              <Animatable.Image
                source={AssetsStock.Otp_screen}
                style={styles.image}
                resizeMode="contain"
                animation="fadeIn"
                duration={1000}
              />
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.textContainer}>
              <Text style={styles.title}>Enter Verification Code</Text>
              <Text style={styles.subtitle}>
                We have sent an OTP to your mobile. Please fill it in here.
              </Text>
              <Text style={styles.testingOtpText}>[ Test OTP: 123456 ]</Text>
            </Animatable.View>

            <View style={styles.otpContainer}>
              <OtpInput
                numberOfDigits={6}
                focusColor={COLORS.primary}
                autoFocus={false}
                hideStick={true}
                blurOnFilled={true}
                type="numeric"
                secureTextEntry={false}
                onTextChange={text => setOtp(text)}
                onFilled={text => {
                  setOtp(text);
                  console.log(`OTP entered: ${text}`);
                }}
                textInputProps={{
                  accessibilityLabel: 'One-Time Password',
                }}
                textProps={{
                  accessibilityRole: 'text',
                  accessibilityLabel: 'OTP digit',
                  allowFontScaling: false,
                }}
                theme={{
                  containerStyle: styles.otpInputWrapper,
                  pinCodeContainerStyle: styles.pinCodeContainer,
                  pinCodeTextStyle: styles.pinCodeText,
                  focusStickStyle: styles.focusStick,
                  focusedPinCodeContainerStyle: styles.activePinCodeContainer,
                  placeholderTextStyle: styles.placeholderText,
                  filledPinCodeContainerStyle: styles.filledPinCodeContainer,
                  disabledPinCodeContainerStyle:
                    styles.disabledPinCodeContainer,
                }}
              />
            </View>

            <View style={styles.resendContainer}>
              <Text style={styles.resendText}>Didn't Receive OTP? </Text>
              <TouchableOpacity
                onPress={() => {
                  /* resend logic */
                }}>
                <Text style={styles.resendLink}>Resend OTP</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.verifyButtonContainer}>
              <TouchableOpacity
                onPress={handleVerify}
                disabled={otp.length !== 6}
                style={[
                  styles.verifyButton,
                  {opacity: otp.length === 6 ? 1 : 0.5},
                ]}>
                <Text style={styles.verifyButtonText}>Verify</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  keyboardAvoidingView: {flex: 1},
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 30,
    justifyContent: 'space-around',
  },
  imageContainer: {alignItems: 'center', marginVertical: 20},
  image: {height: 260},
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },
  subtitle: {
    fontSize: 16,
    color: '#888888',
    textAlign: 'center',
    marginTop: 8,
    fontFamily: 'Poppins-Regular',
  },
  testingOtpText: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
    fontFamily: 'Poppins-Regular',
  },
  otpContainer: {
    marginVertical: 20,
    width: '100%',
    alignItems: 'center',
  },
  otpInputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  pinCodeContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 50,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filledPinCodeContainer: {
    backgroundColor: '#FDF8C4',
    borderColor: '#8A40DD',
  },
  activePinCodeContainer: {
    backgroundColor: '#FDF8C4',
    borderColor: COLORS.primary,
  },
  pinCodeText: {
    color: '#8A40DD',
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
  },
  resendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  resendText: {color: '#696969', fontFamily: 'Poppins-Regular'},
  resendLink: {
    color: '#8A40DD',
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
  },
  verifyButtonContainer: {
    width: '90%',
    marginTop: 10,
  },
  verifyButton: {
    backgroundColor: '#571D99',
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  verifyButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
  },
});
