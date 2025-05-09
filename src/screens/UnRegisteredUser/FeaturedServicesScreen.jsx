import {View, FlatList, StyleSheet, Dimensions, StatusBar} from 'react-native';
import Heading from '../../components/CommonComponents/Heading';
import AssetsStock from '../../constants/ImagesContants';
import {FeaturedServiceCard} from '../../components/UnRegisteredComponents/FeaturedServices/FeaturedServiceCard';
import COLORS from '../../constants/color';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/HomepageComponents/Header';
import {Text} from 'react-native';

const {width} = Dimensions.get('window');

const data = [
  {
    id: 1,
    heading: 'Storytelling Sessions',
    para: 'Explore fun and interactive stories to boost imagination and listening skills',
    image: AssetsStock.teacher,
    duration: '30 Mins',
    ageRange: 'Age 3-6',
    type: 'Interactive',
  },
  {
    id: 2,
    heading: 'The Right Teacher for Your Child',
    para: "Find the perfect instructor to match your child's learning style and needs",
    image: AssetsStock.child,
    duration: '45 Mins',
    ageRange: 'Age 4-8',
    type: 'Personalized',
  },
  {
    id: 3,
    heading: 'No Extra Charges, Pay as You Go!',
    para: 'Flexible payment options with no hidden fees or long-term commitments',
    image: AssetsStock.teacher,
    duration: '60 Mins',
    ageRange: 'All Ages',
    type: 'Flexible',
  },
];

export const FeaturedServicesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle="dark-content" />
      <Header />
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Upcoming Events</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <FeaturedServiceCard
            heading={item.heading}
            para={item.para}
            image={item.image}
            duration={item.duration}
            ageRange={item.ageRange}
            type={item.type}
          />
        )}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 0,
  },
  headerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
    color: '#000',
  },
  listContainer: {
    paddingHorizontal: width * 0.075, // Center the cards with proper margins
    paddingBottom: 20,
    alignItems: 'center',
    paddingVertical: 12,
  },
});
