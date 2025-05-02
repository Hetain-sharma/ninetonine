import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Benifits from './Benifits';
import Heading from '../../CommonComponents/Heading';
import COLORS from '../../../constants/color';

const course = [
  {
    icon: 'brain',
    title: 'Colors & Shapes',
    subtitle: 'Recognizing basic colors and geometric shapes',
    ageGroup: '2-3 Years',
    duration: '3 Months',
    fee: '₹2500/month',
  },
  {
    icon: 'heart',
    title: 'Alphabet Explorer',
    subtitle: 'Learning English alphabets with fun activities',
    ageGroup: '3-4 Years',
    duration: '4 Months',
    fee: '₹2800/month',
  },
  {
    icon: 'mobile-alt',
    title: 'Numbers & Counting',
    subtitle: 'Understanding numbers and counting skills',
    ageGroup: '2-4 Years',
    duration: '3 Months',
    fee: '₹2600/month',
  },
  {
    icon: 'gamepad',
    title: 'Creative Arts',
    subtitle: 'Exploring drawing, painting, and coloring',
    ageGroup: '4-5 Years',
    duration: '5 Months',
    fee: '₹3000/month',
  },
];

const YourChild = () => {
  const [selectedAge, setSelectedAge] = useState('2-3');

  // Filter courses that include the selected age
  const filteredCourses = course.filter(c => c.ageGroup.includes(selectedAge));

  return (
    <View style={{marginTop: 20}}>
      <Heading message="Your Child's Learning Journey" />

      <View style={{marginTop: 10}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          {['2-3', '3-4', '4-5'].map(age => (
            <TouchableOpacity
              key={age}
              style={[
                styles.button,
                selectedAge === age && styles.selectedButton,
              ]}
              onPress={() => setSelectedAge(age)}>
              <Text
                style={[
                  styles.buttonText,
                  selectedAge === age && styles.selectedButtonText,
                ]}>
                {age}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Display Benefits Based on Age Selection */}
        <View style={{marginTop: 10}}>
          {filteredCourses.map((item, index) => (
            <Benifits
              // key={index}
              title={item.title}
              subtitle={item.subtitle}
              duration={item.duration}
              icon={item.icon}
              ageGroup={item.ageGroup}
              fee={item.fee}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default YourChild;

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 110,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedButton: {
    backgroundColor: COLORS.primary,
  },
  buttonText: {
    color: COLORS.black,
    fontSize: 14,
  },
  selectedButtonText: {
    color: COLORS.white,
  },
});
