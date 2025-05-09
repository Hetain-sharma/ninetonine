import {useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import Event from '../../components/UnRegisteredComponents/EventsComponents/Event';
import AssetsStock from '../../constants/ImagesContants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from 'react-native';
import COLORS from '../../constants/color';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/HomepageComponents/Header';

const eventData = [
  {
    id: 1,
    title: 'Storytelling Sessions',
    description:
      'Explore fun and interactive stories to boost imagination and listening skills',
    image: AssetsStock.event1,
    ageRange: '3-6',
  },
  {
    id: 2,
    title: 'Storytelling Sessions',
    description:
      'Explore fun and interactive stories to boost imagination and listening skills',
    image: AssetsStock.event1,
    ageRange: '3-6',
  },
  {
    id: 3,
    title: 'Storytelling Sessions',
    description:
      'Explore fun and interactive stories to boost imagination and listening skills',
    image: AssetsStock.event1,
    ageRange: '3-6',
  },
  {
    id: 4,
    title: 'Art Workshop',
    description:
      'Creative art activities to develop fine motor skills and artistic expression',
    image: AssetsStock.event2,
    ageRange: '1-2',
  },
  {
    id: 5,
    title: 'Science Exploration',
    description:
      'Fun experiments and activities to introduce basic scientific concepts',
    image: AssetsStock.event1,
    ageRange: '2-5',
  },
  {
    id: 6,
    title: 'Music & Movement',
    description: 'Interactive music sessions with dancing and instrument play',
    image: AssetsStock.event2,
    ageRange: '5-10',
  },
];

const ageFilters = [
  {id: 1, label: 'Ages All', range: 'all'},
  {id: 2, label: 'Ages 1-2', range: '1-2'},
  {id: 3, label: 'Ages 2-5', range: '2-5'},
  {id: 4, label: 'Ages 5-10', range: '5-10'},
];

const EventsScreen = () => {
  const navigation = useNavigation();
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Filter events based on selected age range
  const filteredEvents =
    selectedFilter === 'all'
      ? eventData
      : eventData.filter(event => event.ageRange === selectedFilter);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle="dark-content" />
      <Header />
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Upcoming Events</Text>
      </View>

      <View style={styles.filtersWrapper}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filtersScrollContent}>
          {ageFilters.map(filter => (
            <TouchableOpacity
              key={filter.id}
              style={[
                styles.filterButton,
                selectedFilter === filter.range && styles.activeFilterButton,
              ]}
              onPress={() => setSelectedFilter(filter.range)}>
              <Text
                style={[
                  styles.filterText,
                  selectedFilter === filter.range && styles.activeFilterText,
                ]}>
                {filter.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <FlatList
        data={filteredEvents}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <Event
            title={item.title}
            description={item.description}
            image={item.image}
            ageRange={item.ageRange}
          />
        )}
        contentContainerStyle={styles.eventsList}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              No events found for this age range
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default EventsScreen;

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
  filtersWrapper: {
    paddingVertical: 12,
  },
  filtersScrollContent: {
    paddingHorizontal: 16,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: '#F5F5F5',
    minWidth: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeFilterButton: {
    backgroundColor: '#571D99',
  },
  filterText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  activeFilterText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  eventsList: {
    padding: 16,
  },
  emptyContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});
