import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  Dimensions,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {RadioButton} from 'react-native-paper';
import COLORS from '../../constants/color';
import {useDispatch} from 'react-redux';
import {setUserDetails} from '../../redux/Enroll/enrollSlice';

const RegistrationForm = ({prevStep, nextStep}) => {
  const dispatch = useDispatch();

  const [childName, setChildName] = useState('');
  const [age, setAge] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [programType, setProgramType] = useState('');
  const [showPicker, setShowPicker] = useState(false);

  // Form validation errors
  const [errors, setErrors] = useState({
    childName: '',
    age: '',
    fatherName: '',
    phoneNumber: '',
    programType: '',
  });

  // Generate age options from 1 to 18
  const ageOptions = Array.from({length: 18}, (_, i) => (i + 1).toString());

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      childName: '',
      age: '',
      fatherName: '',
      phoneNumber: '',
      programType: '',
    };

    // Validate child name
    if (!childName.trim()) {
      newErrors.childName = 'Child name is required';
      isValid = false;
    }

    // Validate age
    if (!age) {
      newErrors.age = 'Age is required';
      isValid = false;
    }

    // Validate father name
    if (!fatherName.trim()) {
      newErrors.fatherName = 'Father name is required';
      isValid = false;
    }

    // Validate phone number
    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
      isValid = false;
    } else if (!/^[6-9]\d{9}$/.test(phoneNumber.trim())) {
      newErrors.phoneNumber = 'Please enter a valid Indian mobile number';
      isValid = false;
    }

    // Validate program type
    if (!programType) {
      newErrors.programType = 'Please select a program type';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validateForm()) {
      // Save user details to Redux store
      dispatch(
        setUserDetails({
          childName,
          age,
          fatherName,
          phoneNumber,
          programType,
        }),
      );

      // Move to next step
      nextStep();
    } else {
      // Show alert for validation errors
      Alert.alert(
        'Validation Error',
        'Please fill in all required fields correctly.',
        [{text: 'OK'}],
      );
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.formContainer}>
          {/* Child's Information Section */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>Child's Information</Text>
          </View>

          <Text style={styles.label}>Child's Name</Text>
          <TextInput
            style={[styles.input, errors.childName ? styles.inputError : null]}
            placeholder="Enter Child's Name"
            value={childName}
            onChangeText={text => {
              setChildName(text);
              if (errors.childName) {
                setErrors({...errors, childName: ''});
              }
            }}
          />
          {errors.childName ? (
            <Text style={styles.errorText}>{errors.childName}</Text>
          ) : null}

          <Text style={styles.label}>Age</Text>
          {!showPicker && (
            <TouchableOpacity
              style={[styles.input, errors.age ? styles.inputError : null]}
              onPress={() => setShowPicker(true)}>
              <Text style={age ? styles.pickerText : styles.placeholderText}>
                {age || 'Age'}
              </Text>
              <Text style={styles.dropdownIcon}>▼</Text>
            </TouchableOpacity>
          )}
          {errors.age ? (
            <Text style={styles.errorText}>{errors.age}</Text>
          ) : null}

          {showPicker && (
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={age}
                onValueChange={(itemValue, itemIndex) => {
                  setAge(itemValue);
                  setShowPicker(false);
                  if (errors.age) {
                    setErrors({...errors, age: ''});
                  }
                }}
                style={styles.picker}>
                <Picker.Item label="Select Age" value="" />
                {ageOptions.map((option, index) => (
                  <Picker.Item key={index} label={option} value={option} />
                ))}
              </Picker>
            </View>
          )}

          {/* Parent/Guardian Information Section */}
          <View style={styles.sectionHeader2}>
            <Text style={styles.sectionHeaderText}>
              Parent/Guardian Information
            </Text>
          </View>

          <Text style={styles.label}>Father's Name</Text>
          <TextInput
            style={[styles.input, errors.fatherName ? styles.inputError : null]}
            placeholder="Enter Father Name"
            value={fatherName}
            onChangeText={text => {
              setFatherName(text);
              if (errors.fatherName) {
                setErrors({...errors, fatherName: ''});
              }
            }}
          />
          {errors.fatherName ? (
            <Text style={styles.errorText}>{errors.fatherName}</Text>
          ) : null}

          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={[
              styles.input,
              errors.phoneNumber ? styles.inputError : null,
            ]}
            placeholder="Enter Phone Number"
            value={phoneNumber}
            onChangeText={text => {
              setPhoneNumber(text);
              if (errors.phoneNumber) {
                setErrors({...errors, phoneNumber: ''});
              }
            }}
            keyboardType="phone-pad"
            maxLength={10}
          />
          {errors.phoneNumber ? (
            <Text style={styles.errorText}>{errors.phoneNumber}</Text>
          ) : null}

          <Text style={styles.label}>Program Type</Text>
          <RadioButton.Group
            onValueChange={value => {
              setProgramType(value);
              if (errors.programType) {
                setErrors({...errors, programType: ''});
              }
            }}
            value={programType}>
            <View style={styles.radioOption}>
              <RadioButton value="preschool" color="#C4C4D6" />
              <Text style={styles.radioText}>Preschool</Text>
            </View>
            <View style={styles.radioOption}>
              <RadioButton value="daycare" color="#C4C4D6" />
              <Text style={styles.radioText}>Daycare</Text>
            </View>
            <View style={styles.radioOption}>
              <RadioButton value="both" color="#C4C4D6" />
              <Text style={styles.radioText}>Both</Text>
            </View>
          </RadioButton.Group>
          {errors.programType ? (
            <Text style={styles.errorText}>{errors.programType}</Text>
          ) : null}

          {/* Navigation Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.previousButton} onPress={prevStep}>
              <Text style={styles.previousButtonText}>Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
              <Text style={styles.nextButtonText}>Next</Text>
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
  formContainer: {
    paddingHorizontal: 20,
    width: '100%',
    maxWidth: 500,
    alignSelf: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  sectionHeader: {
    backgroundColor: '#C9E3F7',
    padding: 15,
    marginBottom: 15,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  sectionHeader2: {
    backgroundColor: '#D6F2E4',
    padding: 15,
    marginBottom: 15,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  sectionHeaderText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.black,
    fontFamily: 'Poppins-Bold',
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
    color: '#431D04',
    fontFamily: 'Poppins-Regular',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#E2C8FF',
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: COLORS.white,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputError: {
    borderColor: 'red',
    marginBottom: 5,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
    marginTop: -5,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#E2C8FF',
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: COLORS.white,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  pickerText: {
    color: COLORS.gray,
  },
  placeholderText: {
    color: COLORS.gray,
  },
  dropdownIcon: {
    color: COLORS.gray,
    fontSize: 12,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  radioText: {
    fontSize: 14,
    color: COLORS.gray,
    fontFamily: 'Poppins-Regular',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
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
  nextButton: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 5,
    backgroundColor: COLORS.primary,
    width: isSmallDevice ? '45%' : 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButtonText: {
    color: COLORS.white,
    fontFamily: 'Poppins-Regular',
    fontWeight: '500',
  },
});

export default RegistrationForm;
