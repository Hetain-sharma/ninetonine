import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import COLORS from '../constants/color';
import {EventCard} from '../components/CalendarComponents/Event';
import {Calendar} from '../components/CalendarComponents/Calender';

const CalenderScreen = () => {
  const navigation = useNavigation();
  const [selectedMonth, setSelectedMonth] = useState('May');
  const [selectedYear, setSelectedYear] = useState(2025);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={24} color="#000" />
          </TouchableOpacity>
          <View style={styles.headerTitle}>
            <Text style={styles.headerText}>Calendar</Text>
            <Text style={styles.headerSubtitle}>
              Track Emma's learning journey
            </Text>
          </View>
        </View>
      </View>

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
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, {backgroundColor: '#4CD964'}]} />
            <Text style={styles.legendText}>Holiday</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, {backgroundColor: '#8A56AC'}]} />
            <Text style={styles.legendText}>School</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, {backgroundColor: '#5AC8FA'}]} />
            <Text style={styles.legendText}>Workshop</Text>
          </View>
        </View>

        {/* Upcoming Events */}
        <View style={styles.eventsSection}>
          <Text style={styles.eventsSectionTitle}>Upcoming Events</Text>

          <EventCard
            title="Art Exhibition"
            date="May 15, 2025, 10:00 AM - 2:00 PM"
            location="School Playground"
            buttonText="Register"
            buttonColor={COLORS.primary}
            buttonTextColor={COLORS.white}
            tag="Upcoming"
            tagColor={COLORS.border}
          />

          <EventCard
            title="Parent-Teacher Meeting"
            date="May 15, 2025, 10:00 AM - 2:00 PM"
            location="School Playground"
            buttonText="Add to Calendar"
            buttonColor="#FFFFFF"
            buttonTextColor="#4CD964"
            buttonBorderColor="#4CD964"
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
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    gap: 16,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
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
