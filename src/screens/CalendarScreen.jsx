import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import COLORS from '../constants/color';
import {EventCard} from '../components/CalendarComponents/Event';
import {Calendar} from '../components/CalendarComponents/Calender';
import Header from '../components/ProgressComponents/Header';

// Event data array
const upcomingEvents = [
  {
    id: '1',
    title: 'Art Exhibition',
    date: 'May 15, 2025, 10:00 AM - 2:00 PM',
    location: 'School Playground',
    buttonText: 'Register',
    buttonColor: COLORS.primary,
    buttonTextColor: COLORS.white,
    tag: 'Upcoming',
    tagColor: COLORS.border,
  },
  {
    id: '2',
    title: 'Parent-Teacher Meeting',
    date: 'May 15, 2025, 10:00 AM - 2:00 PM',
    location: 'School Playground',
    buttonText: 'Add to Calendar',
    buttonColor: '#FFFFFF',
    buttonTextColor: '#4CD964',
    buttonBorderColor: '#4CD964',
  },
];

// Legend data array
const legendItems = [
  {id: '1', color: '#4CD964', text: 'Holiday'},
  {id: '2', color: '#8A56AC', text: 'School'},
  {id: '3', color: '#5AC8FA', text: 'Workshop'},
];

const CalenderScreen = () => {
  const navigation = useNavigation();
  const [selectedMonth, setSelectedMonth] = useState('May');
  const [selectedYear, setSelectedYear] = useState(2025);

  // Render each event item
  const renderEventItem = ({item}) => (
    <EventCard
      title={item.title}
      date={item.date}
      location={item.location}
      buttonText={item.buttonText}
      buttonColor={item.buttonColor}
      buttonTextColor={item.buttonTextColor}
      buttonBorderColor={item.buttonBorderColor}
      tag={item.tag}
      tagColor={item.tagColor}
    />
  );

  // Render each legend item
  const renderLegendItem = ({item}) => (
    <View style={styles.legendItem}>
      <View style={[styles.legendDot, {backgroundColor: item.color}]} />
      <Text style={styles.legendText}>{item.text}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle="dark-content" />

      {/* Header */}
      <Header title={'Calendar'} subtitle={`Track Emma's learning journey`} />

      <ScrollView style={styles.scrollView}>
        {/* Month Navigation */}
        <View style={styles.monthNavigation}>
          <TouchableOpacity style={styles.monthArrow}>
            <Icon name="chevron-left" size={24} color={COLORS.black} />
          </TouchableOpacity>
          <View style={styles.monthYearContainer}>
            <Text style={styles.monthText}>{selectedMonth}</Text>
            <Text style={styles.yearText}>{selectedYear}</Text>
          </View>
          <TouchableOpacity style={styles.monthArrow}>
            <Icon name="chevron-right" size={24} color={COLORS.black} />
          </TouchableOpacity>
        </View>

        {/* Calendar */}
        <Calendar />

        {/* Legend */}
        <View style={styles.legend}>
          <FlatList
            data={legendItems}
            renderItem={renderLegendItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{gap: 16}}
          />
        </View>

        {/* Upcoming Events */}
        <View style={styles.eventsSection}>
          <Text style={styles.eventsSectionTitle}>Upcoming Events</Text>

          <FlatList
            data={upcomingEvents}
            renderItem={renderEventItem}
            keyExtractor={item => item.id}
            scrollEnabled={false}
            ItemSeparatorComponent={() => <View style={{height: 16}} />}
          />
        </View>
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab}>
        <Icon name="plus" size={24} color="#FFFFFF" />
        <Text style={styles.fabText}>Book Classes</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    marginLeft: 8,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.black,
    fontFamily: 'Poppins-Regular',
  },
  headerSubtitle: {
    fontSize: 14,
    color: COLORS.text_gray,
    fontFamily: 'Poppins-Regular',
  },
  scrollView: {
    flex: 1,
  },
  monthNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  monthArrow: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  monthYearContainer: {
    alignItems: 'center',
  },
  monthText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.black,
    fontFamily: 'Poppins-Regular',
  },
  yearText: {
    fontSize: 16,
    color: COLORS.text_gray,
    fontFamily: 'Poppins-Regular',
  },
  legend: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  legendText: {
    fontSize: 14,
    color: COLORS.black,
    fontFamily: 'Poppins-Regular',
  },
  eventsSection: {
    paddingHorizontal: 16,
    paddingBottom: 100, // Extra padding for FAB
  },
  eventsSectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: COLORS.black,
    fontFamily: 'Poppins-Regular',
  },
  fab: {
    position: 'absolute',
    bottom: 74,
    right: 24,
    backgroundColor: COLORS.primary,
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  fabText: {
    color: COLORS.white,
    fontFamily: 'Poppins-Regular',
    marginLeft: 8,
    fontWeight: '600',
  },
});

export default CalenderScreen;
