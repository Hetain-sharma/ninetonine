import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import COLORS from '../../../constants/color';

const features = [
  {
    name: 'Progress Tracking',
    image: require('../../../assets/images/ProgressTracking.png'),
    screen: 'Progress',
  },
  {
    name: 'Switch Time',
    image: require('../../../assets/images/SwitchTime.png'),
  },
  {
    name: 'Switch Teacher',
    image: require('../../../assets/images/SwitchTeacher.png'),
  },
  {
    name: 'Payment',
    image: require('../../../assets/images/Payment.png'),
  },
];

const FeaturesCard = () => {
  const navigation = useNavigation();

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.featureCard}
      onPress={() => item.screen && navigation.navigate(item.screen)}>
      <View style={styles.iconContainer}>
        <Image source={item.image} style={styles.featureIcon} />
      </View>
      <Text style={styles.featureText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.featureCardsContainer}>
      <FlatList
        data={features}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={styles.featureRow}
        scrollEnabled={false}
      />
    </View>
  );
};

export default FeaturesCard;

const styles = StyleSheet.create({
  featureCardsContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  featureRow: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  featureCard: {
    width: '48%',
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E9EBF3',
  },
  iconContainer: {
    width: 70,
    height: 70,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  featureIcon: {
    width: 65,
    height: 65,
  },
  featureText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
});
