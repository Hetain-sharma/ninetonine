import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Platform,
} from 'react-native';
import COLORS from '../../../constants/color';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SafeAreaView} from 'react-native-safe-area-context';

const AddNewGoal = () => {
  const [formData, setFormData] = useState({
    goalTitle: '',
    description: '',
    goalType: 'Weekly',
    subjectArea: '',
    difficultyLevel: '',
  });
  const navigation = useNavigation();

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);
    // You can add additional validation or API calls here
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={20} color={COLORS.black} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Book Classes</Text>
        </View>

        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}>
          <Text style={styles.subtitle}>Create a learning objective</Text>

          {/* Goal Title */}
          <Text style={styles.label}>Goal Title</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g Reading Practice"
            placeholderTextColor="#999"
            value={formData.goalTitle}
            onChangeText={text => handleChange('goalTitle', text)}
          />

          {/* Description */}
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Describe the goal and success criteria"
            placeholderTextColor="#999"
            multiline
            numberOfLines={4}
            textAlignVertical="top"
            value={formData.description}
            onChangeText={text => handleChange('description', text)}
          />

          {/* Goal Type */}
          <Text style={styles.label}>Goal Type</Text>
          <View style={styles.radioContainer}>
            <TouchableOpacity
              style={styles.radioOption}
              onPress={() => handleChange('goalType', 'Weekly')}>
              <View style={styles.radioCircle}>
                {formData.goalType === 'Weekly' && (
                  <View style={styles.selectedRadio} />
                )}
              </View>
              <Text style={styles.radioText}>Weekly</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.radioOption}
              onPress={() => handleChange('goalType', 'Monthly')}>
              <View style={styles.radioCircle}>
                {formData.goalType === 'Monthly' && (
                  <View style={styles.selectedRadio} />
                )}
              </View>
              <Text style={styles.radioText}>Monthly</Text>
            </TouchableOpacity>
          </View>

          {/* Subject Area */}
          <Text style={styles.label}>Subject area</Text>
          <TouchableOpacity
            style={styles.selectInput}
            onPress={() => console.log('Open subject selector')}>
            <Text style={styles.selectText}>
              {formData.subjectArea || 'Select a Subject'}
            </Text>
          </TouchableOpacity>

          {/* Difficulty Level */}
          <Text style={styles.label}>Difficulty Level</Text>
          <TouchableOpacity
            style={styles.selectInput}
            onPress={() => console.log('Open difficulty selector')}>
            <Text style={styles.selectText}>
              {formData.difficultyLevel || 'Select'}
            </Text>
          </TouchableOpacity>

          {/* Create Button */}
          <TouchableOpacity style={styles.createButton} onPress={handleSubmit}>
            <Text style={styles.createButtonText}>Create Goal</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
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
  subtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    fontWeight: 500,
    color: COLORS.text_gray,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.black,
    fontFamily: 'Poppins-Regular',
    marginBottom: 8,
    marginTop: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 5,
    padding: 12,
    fontSize: 14,
    color: COLORS.text_gray,
    fontFamily: 'Poppins-Regular',
  },
  textArea: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 5,
    padding: 12,
    fontSize: 14,
    color: COLORS.text_gray,
    fontFamily: 'Poppins-Regular',
    height: 100,
  },
  radioContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  selectedRadio: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.border,
  },
  radioText: {
    fontSize: 14,
    color: '#3A2F0B',
  },
  selectInput: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 5,
    padding: 12,
    fontSize: 14,
  },
  selectText: {
    color: COLORS.text_gray,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  createButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    marginTop: 25,
  },
  createButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default AddNewGoal;
