import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  Dimensions,
} from 'react-native';
import COLORS from '../../../constants/color';
import {useSelector, useDispatch} from 'react-redux';
import {setPaymentInfo, setStatus} from '../../../redux/Enroll/enrollSlice'; // Make sure this path is correct

const PaymentOptions = ({prevStep, nextStep}) => {
  const dispatch = useDispatch();
  const enrollmentData = useSelector(state => state.enroll);
  const [selectedMethod, setSelectedMethod] = useState(null);

  const paymentMethods = [
    {
      id: 'card',
      title: 'Credit/Debit Card',
      description: 'Pay securely with your card',
    },
    {
      id: 'upi',
      title: 'UPI Payment',
      description: 'Pay using any UPI app',
    },
    {
      id: 'netbanking',
      title: 'Net Banking',
      description: 'Pay through your bank account',
    },
  ];

  const handleSelectMethod = methodId => {
    setSelectedMethod(methodId);
  };

  const handlePayment = () => {
    if (!selectedMethod) {
      Alert.alert(
        'Selection Required',
        'Please select a payment method to continue.',
        [{text: 'OK'}],
      );
      return;
    }

    // Update payment method in Redux store
    const updatedPaymentInfo = {
      ...(enrollmentData.paymentInfo || {}),
      paymentMethod: selectedMethod,
    };

    // Dispatch the updated payment info
    dispatch(setPaymentInfo(updatedPaymentInfo));

    // Log the complete enrollment data
    console.log('ENROLLMENT DATA:', {
      branch: enrollmentData.branch || {},
      userDetails: enrollmentData.userDetails || {},
      feePlan: enrollmentData.feePlan || {},
      paymentInfo: updatedPaymentInfo,
    });

    // Set status to complete
    dispatch(setStatus('complete'));

    // Move to success screen
    nextStep();
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          <Text style={styles.title}>Payment Options</Text>
          <Text style={styles.subtitle}>
            Choose your preferred payment method
          </Text>

          {/* Payment Summary */}
          <View style={styles.summaryCard}>
            <Text style={styles.summaryTitle}>Payment Summary</Text>

            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Selected Plan:</Text>
              <Text style={styles.summaryValue}>
                {enrollmentData?.feePlan?.packageName || 'Full-Time Program'}
              </Text>
            </View>

            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Amount:</Text>
              <Text style={styles.summaryValue}>
                ₹{enrollmentData?.paymentInfo?.amount || '5000'}
              </Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.summaryRow}>
              <Text style={styles.totalLabel}>Total:</Text>
              <Text style={styles.totalValue}>
                ₹{enrollmentData?.paymentInfo?.amount || '5000'}
              </Text>
            </View>
          </View>

          {/* Payment Methods */}
          <Text style={styles.sectionTitle}>Select Payment Method</Text>

          {paymentMethods.map(method => (
            <TouchableOpacity
              key={method.id}
              style={[
                styles.methodCard,
                selectedMethod === method.id && styles.selectedMethodCard,
              ]}
              onPress={() => handleSelectMethod(method.id)}>
              <View style={styles.methodContent}>
                <View>
                  <Text style={styles.methodTitle}>{method.title}</Text>
                  <Text style={styles.methodDescription}>
                    {method.description}
                  </Text>
                </View>
                <View
                  style={[
                    styles.radioButton,
                    selectedMethod === method.id && styles.radioButtonSelected,
                  ]}>
                  {selectedMethod === method.id && (
                    <View style={styles.radioButtonInner} />
                  )}
                </View>
              </View>
            </TouchableOpacity>
          ))}

          {/* Pay Button */}
          <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
            <Text style={styles.payButtonText}>
              Pay ₹{enrollmentData?.paymentInfo?.amount || '5000'}
            </Text>
          </TouchableOpacity>

          {/* Navigation Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.previousButton} onPress={prevStep}>
              <Text style={styles.previousButtonText}>Previous</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const {width} = Dimensions.get('window');
const isSmallDevice = width < 375;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  content: {
    padding: 20,
    width: '100%',
    maxWidth: 500,
    alignSelf: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    color: COLORS.black,
    fontFamily: 'Poppins-Bold',
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '400',
    color: COLORS.gray,
    marginBottom: 20,
    fontFamily: 'Poppins-Regular',
  },
  summaryCard: {
    backgroundColor: '#F8F9FA',
    borderRadius: 10,
    padding: 16,
    marginBottom: 24,
  },
  summaryTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.black,
    marginBottom: 16,
    fontFamily: 'Poppins-Bold',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  summaryLabel: {
    fontSize: 14,
    color: COLORS.gray,
    fontFamily: 'Poppins-Regular',
  },
  summaryValue: {
    fontSize: 14,
    color: COLORS.black,
    fontFamily: 'Poppins-Regular',
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 12,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.black,
    fontFamily: 'Poppins-Bold',
  },
  totalValue: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.black,
    fontFamily: 'Poppins-Bold',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.black,
    marginBottom: 16,
    fontFamily: 'Poppins-Bold',
  },
  methodCard: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
  },
  selectedMethodCard: {
    borderColor: COLORS.primary,
    borderWidth: 2,
  },
  methodContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  methodTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.black,
    marginBottom: 4,
    fontFamily: 'Poppins-Bold',
  },
  methodDescription: {
    fontSize: 12,
    color: COLORS.gray,
    fontFamily: 'Poppins-Regular',
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonSelected: {
    borderColor: COLORS.primary,
  },
  radioButtonInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.primary,
  },
  payButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 16,
  },
  payButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Poppins-Bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  previousButton: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: COLORS.black,
    borderRadius: 5,
    backgroundColor: COLORS.white,
    width: isSmallDevice ? '45%' : 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  previousButtonText: {
    color: COLORS.black,
    fontFamily: 'Poppins-Regular',
    fontWeight: '500',
  },
});

export default PaymentOptions;
