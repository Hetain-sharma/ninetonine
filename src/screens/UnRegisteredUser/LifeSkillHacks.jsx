import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  StatusBar,
} from 'react-native';
import LifeSkillCard from '../../components/UnRegisteredComponents/LifeSkillComponents/LifeSkillCard';
import AssetsStock from '../../constants/ImagesContants';
import COLORS from '../../constants/color';
import Header from '../../components/HomepageComponents/Header';
import {SafeAreaView} from 'react-native-safe-area-context';

const {width} = Dimensions.get('window');

const packingTips = [
  {
    id: '1',
    title: 'Packing School Bag',
    subtitle: 'Learn how to pack essentials & stay organized for school',
    image: AssetsStock.Lifehack1,
    tag: 'Organization',
  },
  {
    id: '2',
    title: 'Organize by Subject',
    subtitle: 'Keep your bag clutter-free by grouping items by subject',
    image: AssetsStock.Lifehack2,
    tag: 'Planning',
  },
  {
    id: '3',
    title: 'Daily Essentials Checklist',
    subtitle: 'Never forget a thing with a handy morning checklist',
    image: AssetsStock.Lifehack2,
    tag: 'Routine',
  },
  {
    id: '4',
    title: 'Smart Use of Compartments',
    subtitle: 'Discover how to use every pocket to your advantage',
    image: AssetsStock.Lifehack1,
    tag: 'Organization',
  },
];

const LifeSkillHacks = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle="dark-content" />
      <Header />
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Upcoming Events</Text>
      </View>

      <FlatList
        data={packingTips}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <LifeSkillCard
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            tag={item.tag}
          />
        )}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default LifeSkillHacks;

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
