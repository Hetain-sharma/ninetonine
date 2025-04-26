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
import ProgramCard from './ProgramCard';
import {useDispatch} from 'react-redux';
import {setFeePlan} from '../../../redux/Enroll/enrollSlice';

// Array of packages
const packages = [
  {
    id: '1',
    packageName: 'Full - Time Program',
    subtitle: 'Perfect for families seeking comprehensive weekday care',
    price: '5000',
    features: [
      {text: 'All meals included', color: '#FFD700'},
      {text: 'Nap time supervision', color: '#8A7CFF'},
      {text: 'Weekly progress reports', color: '#FF7CFF'},
      {text: 'Comprehensive curriculum', color: '#7CFF7C'},
    ],
  },
  {
    id: '2',
    packageName: 'Part - Time Program',
    subtitle: 'Ideal for parents needing flexible hours',
    price: '3000',
    features: [
      {text: 'Nutritious snacks', color: '#FFD700'},
      {text: 'Interactive learning', color: '#8A7CFF'},
      {text: 'Daily updates', color: '#FF7CFF'},
    ],
  },
];

const FeeStructureScreen = ({prevStep, nextStep}) => {
  const dispatch = useDispatch();
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleSelectPackage = pkg => {
    setSelectedPackage(pkg);
  };

  const handleNext = () => {
    if (!selectedPackage) {
      Alert.alert(
        'Selection Required',
        'Please select a program package to continue.',
        [{text: 'OK'}],
      );
      return;
    }

    // Save fee plan to Redux store
    dispatch(
      setFeePlan({
        id: selectedPackage.id,
        packageName: selectedPackage.packageName,
        price: selectedPackage.price,
      }),
    );

    // Move to next step
    nextStep();
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Fee Structure</Text>
            <Text style={styles.subtitle}>
              Select a program that best suits your child's needs
            </Text>
          </View>

          {packages.map((pkg, idx) => (
            <ProgramCard
              key={idx}
              packageName={pkg.packageName}
              subtitle={pkg.subtitle}
              price={pkg.price}
              features={pkg.features}
              isSelected={selectedPackage?.id === pkg.id}
              onSelect={() => handleSelectPackage(pkg)}
            />
          ))}

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
  content: {
    padding: 20,
    width: '100%',
    maxWidth: 500,
    alignSelf: 'center',
  },
  headerContainer: {
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
    marginBottom: 2,
    color: COLORS.black,
    fontFamily: 'Poppins-Bold',
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '400',
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

export default FeeStructureScreen;
