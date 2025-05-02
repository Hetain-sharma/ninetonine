// screens/Reports.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../../../constants/color';

const Reports = () => {
  const reports = [
    {
      id: 1,
      month: 'April',
      title: 'April Progress Report',
      summary: 'Summary of achievements for this month',
    },
    {
      id: 2,
      month: 'March',
      title: 'March Progress Report',
      summary: 'Summary of achievements for this month',
    },
    {
      id: 3,
      month: 'February',
      title: 'FebruaryProgress Report',
      summary: 'Summary of achievements for this month',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Monthly Reports</Text>
        <Text style={styles.subtitle}>
          Detailed assessments of Emma's progress
        </Text>
      </View>

      <View style={styles.reportsList}>
        {reports.map(report => (
          <View key={report.id} style={styles.reportCard}>
            <View style={styles.reportIcon}>
              <Icon name="description" size={24} color={COLORS.primary} />
            </View>
            <View style={styles.reportInfo}>
              <Text style={styles.reportTitle}>{report.title}</Text>
              <Text style={styles.reportSummary}>{report.summary}</Text>
            </View>
            <TouchableOpacity style={styles.viewButton}>
              <Text style={styles.viewButtonText}>View</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.black,
  },
  reportsList: {
    paddingHorizontal: 16,
  },
  reportCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    marginBottom: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  reportIcon: {
    marginRight: 12,
  },
  reportInfo: {
    flex: 1,
  },
  reportTitle: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
  },
  reportSummary: {
    fontSize: 12,
    color: COLORS.black,
    fontFamily: 'Poppins-Regular',
  },
  viewButton: {
    paddingHorizontal: 12,
  },
  viewButtonText: {
    color: COLORS.primary,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
  },
});

export default Reports;
