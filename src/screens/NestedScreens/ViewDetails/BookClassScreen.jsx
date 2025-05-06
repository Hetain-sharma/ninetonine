import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  Platform,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import COLORS from '../../../constants/color';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {width} = Dimensions.get('window');

const BookClassScreen = () => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [time, setTime] = useState('');
  const [teacher, setTeacher] = useState('');
  const [classType, setClassType] = useState('');
  const [showTimeDropdown, setShowTimeDropdown] = useState(false);
  const [showTeacherDropdown, setShowTeacherDropdown] = useState(false);
  const [showClassTypeDropdown, setShowClassTypeDropdown] = useState(false);
  const navigation = useNavigation();

  const timeOptions = ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM'];

  const classTypeOptions = [
    'Group Class',
    'Individual Class',
    'Workshop',
    'Special Event',
  ];

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const formatDate = date => {
    if (!date) return 'Choose Date';
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleCreateGoal = () => {
    const formData = {
      date: date.toISOString().split('T')[0],
      time,
      classType,
    };
    console.log('Form Data:', formData);
  };

  const renderDropdown = (options, value, setValue, setShow) => {
    return (
      <Modal transparent visible={true} animationType="fade">
        <TouchableWithoutFeedback onPress={() => setShow(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.dropdown}>
              {options.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.dropdownItem}
                  onPress={() => {
                    setValue(option);
                    setShow(false);
                  }}>
                  <Text style={styles.dropdownItemText}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={20} color={COLORS.black} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Book Classes</Text>
      </View>

      <View style={styles.categoriesContainer}>
        <View style={styles.categoryItem}>
          <View style={[styles.categoryIcon, {backgroundColor: '#FFECD0'}]}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/1165/1165602.png',
              }}
              style={styles.iconImage}
            />
          </View>
          <Text style={styles.categoryText}>Art Explorer</Text>
        </View>

        <View style={styles.categoryItem}>
          <View style={[styles.categoryIcon, {backgroundColor: '#E8F8E8'}]}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/1165/1165602.png',
              }}
              style={styles.iconImage}
            />
          </View>
          <Text style={styles.categoryText}>Art Explorer</Text>
        </View>

        <View style={styles.categoryItem}>
          <View style={[styles.categoryIcon, {backgroundColor: '#D1EFFF'}]}>
            <Text style={styles.numberIcon}>12</Text>
          </View>
          <Text style={styles.categoryText}>Numbers</Text>
        </View>

        <View style={styles.categoryItem}>
          <View style={[styles.categoryIcon, {backgroundColor: '#E6E6FF'}]}>
            <Text style={styles.abcIcon}>ABC</Text>
          </View>
          <Text style={styles.categoryText}>Alphabets</Text>
        </View>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.sectionTitle}>Select Date</Text>
        <TouchableOpacity
          style={styles.datePickerButton}
          onPress={() => setShowDatePicker(true)}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/747/747310.png',
            }}
            style={styles.calendarIcon}
          />
          <Text style={styles.dateText}>{formatDate(date)}</Text>
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}

        <View style={styles.rowContainer}>
          <View style={styles.halfColumn}>
            <Text style={styles.sectionTitle}>Time</Text>
            <TouchableOpacity
              style={styles.dropdownButton}
              onPress={() => setShowTimeDropdown(true)}>
              <Text style={styles.dropdownButtonText}>
                {time || 'Select District'}
              </Text>
              <Text style={styles.dropdownArrow}>▼</Text>
            </TouchableOpacity>
            {showTimeDropdown &&
              renderDropdown(timeOptions, time, setTime, setShowTimeDropdown)}
          </View>

          <View style={styles.halfColumn}>
            <Text style={styles.sectionTitle}>Select Class Type</Text>
            <TouchableOpacity
              style={styles.dropdownButton}
              onPress={() => setShowClassTypeDropdown(true)}>
              <Text style={styles.dropdownButtonText}>
                {classType || 'Select'}
              </Text>
              <Text style={styles.dropdownArrow}>▼</Text>
            </TouchableOpacity>
            {showClassTypeDropdown &&
              renderDropdown(
                classTypeOptions,
                classType,
                setClassType,
                setShowClassTypeDropdown,
              )}
          </View>
        </View>

        <TouchableOpacity
          style={styles.createButton}
          onPress={handleCreateGoal}>
          <Text style={styles.createButtonText}>Create Goal</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  backButton: {
    padding: 5,
  },
  backArrow: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
    flexWrap: 'wrap',
  },
  categoryItem: {
    alignItems: 'center',
    width: (width - 60) / 4,
    marginBottom: 15,
  },
  categoryIcon: {
    width: (width - 60) / 4 - 10,
    height: (width - 60) / 4 - 10,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  iconImage: {
    width: 30,
    height: 30,
  },
  numberIcon: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0066CC',
  },
  abcIcon: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5555FF',
  },
  categoryText: {
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    color: COLORS.black,
  },
  formContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'Poppins-Regular',
  },
  datePickerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
  },
  calendarIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  dateText: {
    color: COLORS.text_gray,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  halfColumn: {
    width: '48%',
  },
  dropdownButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    padding: 12,
  },
  dropdownButtonText: {
    color: COLORS.text_gray,
    fontFamily: 'Poppins-Regular',
  },
  dropdownArrow: {
    fontSize: 12,
  },
  fullWidthDropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    padding: 12,
    marginBottom: 30,
  },
  createButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginBottom: 30,
  },
  createButtonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdown: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    width: '80%',
    maxHeight: 300,
  },
  dropdownItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  dropdownItemText: {
    fontSize: 16,
  },
});

export default BookClassScreen;
