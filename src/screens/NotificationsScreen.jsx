import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';

// Import vector icons
import Icon from 'react-native-vector-icons/MaterialIcons';
import EnvelopeIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import COLORS from '../constants/color';

const NotificationScreen = () => {
  const [activeTab, setActiveTab] = useState('Recent activity');
  const navigation = useNavigation();

  const renderNotificationItem = (title, description, time, iconColor) => {
    return (
      <View style={styles.notificationItem}>
        <View style={[styles.iconContainer, {backgroundColor: iconColor}]}>
          <EnvelopeIcon name="email-outline" size={20} color="#000" />
        </View>
        <View style={styles.notificationContent}>
          <Text style={styles.notificationTitle}>{title}</Text>
          <Text style={styles.notificationDescription}>{description}</Text>
          <Text style={styles.notificationTime}>{time}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'Recent activity' && styles.activeTab,
          ]}
          onPress={() => setActiveTab('Recent activity')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'Recent activity' && styles.activeTabText,
            ]}>
            Recent activity
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === 'Unread' && styles.activeTab]}
          onPress={() => setActiveTab('Unread')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'Unread' && styles.activeTabText,
            ]}>
            Unread
          </Text>
        </TouchableOpacity>
      </View>

      {/* Notification List */}
      <ScrollView style={styles.notificationList}>
        {/* Today Section */}
        <Text style={styles.sectionTitle}>Today'</Text>

        {renderNotificationItem(
          'Progress Report Available',
          'Term 2 progress report is now available for download',
          '11:00 AM',
          '#E6EEFF',
        )}

        {renderNotificationItem(
          'Progress Report Available',
          'Term 2 progress report is now available for download',
          '11:00 AM',
          '#E6EEFF',
        )}

        {renderNotificationItem(
          'School Holiday',
          "School will remain closed on May 15th for Teacher's Day",
          '11:00 AM',
          '#FFFDE6',
        )}

        {/* Yesterday Section */}
        <Text style={styles.sectionTitle}>Yesterday</Text>

        {renderNotificationItem(
          'Progress Report Available',
          'Term 2 progress report is now available for download',
          '11:00 AM',
          '#E6EEFF',
        )}

        {renderNotificationItem(
          'School Holiday',
          "School will remain closed on May 15th for Teacher's Day",
          '11:00 AM',
          '#FFFDE6',
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
    fontFamily: 'Poppins-Regular',
  },
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 8,
  },
  activeTab: {
    backgroundColor: '#E6E0FF',
  },
  tabText: {
    fontSize: 14,
    color: COLORS.text_gray,
    fontFamily: 'Poppins-Regular',
  },
  activeTabText: {
    color: '#5E35B1',
    fontWeight: '500',
  },
  notificationList: {
    flex: 1,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 12,
    fontFamily: 'Poppins-Regular',
  },
  notificationItem: {
    flexDirection: 'row',
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    fontFamily: 'Poppins-Regular',
  },
  notificationDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
    lineHeight: 20,
    fontFamily: 'Poppins-Regular',
  },
  notificationTime: {
    fontSize: 12,
    color: '#999',
    fontFamily: 'Poppins-Regular',
  },
});

export default NotificationScreen;
