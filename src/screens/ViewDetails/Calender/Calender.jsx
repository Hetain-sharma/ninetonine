// components/Calendar.js
import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import COLORS from '../../../constants/color';

export const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(23);

  // Calendar data for May 2025
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  // This is a simplified representation of the calendar data
  // In a real app, you would calculate this based on the actual month/year
  const calendarData = [
    [31, 30, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24, 25, 26],
    [27, 28, 29, 30, 31, 1, 2],
  ];

  // Events data (simplified)
  // In a real app, this would come from an API or database
  const events = {
    3: {type: 'holiday'},
    15: {type: 'school'},
    18: {type: 'holiday'},
    23: {type: 'school'},
    25: {type: 'holiday'},
    27: {type: 'workshop'},
    29: {type: 'school'},
    31: {type: 'workshop'},
  };

  const getEventDot = day => {
    if (!events[day]) return null;

    let backgroundColor;
    switch (events[day].type) {
      case 'holiday':
        backgroundColor = '#4CD964';
        break;
      case 'school':
        backgroundColor = '#8A56AC';
        break;
      case 'workshop':
        backgroundColor = '#5AC8FA';
        break;
      default:
        return null;
    }

    return <View style={[styles.eventDot, {backgroundColor}]} />;
  };

  const isCurrentMonth = (day, weekIndex) => {
    // First row has days from previous month
    if (weekIndex === 0 && day > 20) return false;
    // Last row has days from next month
    if (weekIndex === 4 && day < 10) return false;
    return true;
  };

  return (
    <View style={styles.container}>
      {/* Days of week header */}
      <View style={styles.daysHeader}>
        {daysOfWeek.map((day, index) => (
          <View key={index} style={styles.dayHeaderCell}>
            <Text style={styles.dayHeaderText}>{day}</Text>
          </View>
        ))}
      </View>

      {/* Calendar grid */}
      <View style={styles.calendarGrid}>
        {calendarData.map((week, weekIndex) => (
          <View key={weekIndex} style={styles.weekRow}>
            {week.map((day, dayIndex) => {
              const isSelected =
                day === selectedDate && isCurrentMonth(day, weekIndex);
              const isCurrentMonthDay = isCurrentMonth(day, weekIndex);

              return (
                <TouchableOpacity
                  key={dayIndex}
                  style={styles.dayCell}
                  onPress={() => isCurrentMonthDay && setSelectedDate(day)}>
                  <View
                    style={[
                      styles.dayCellInner,
                      isSelected && styles.selectedDay,
                    ]}>
                    <Text
                      style={[
                        styles.dayText,
                        !isCurrentMonthDay && styles.otherMonthDay,
                        isSelected && styles.selectedDayText,
                      ]}>
                      {day}
                    </Text>
                  </View>
                  {isCurrentMonthDay && getEventDot(day)}
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  daysHeader: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  dayHeaderCell: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  dayHeaderText: {
    fontSize: 14,
    color: COLORS.text_gray,
    fontFamily: 'Poppins-Regular',
  },
  calendarGrid: {
    marginBottom: 16,
  },
  weekRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  dayCell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 1,
  },
  dayCellInner: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayText: {
    fontSize: 16,
    color: COLORS.black,
    fontFamily: 'Poppins-Regular',
  },
  otherMonthDay: {
    color: COLORS.gray,
  },
  selectedDay: {
    backgroundColor: COLORS.primary,
  },
  selectedDayText: {
    color: COLORS.white,
    fontFamily: 'Poppins-Regular',
    fontWeight: 'bold',
  },
  eventDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginTop: 4,
  },
});
