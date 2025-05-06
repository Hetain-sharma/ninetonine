import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../constants/color';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import BooksTab from '../components/ResourcesScreenComponents/BooksTab';
import VideosTab from '../components/ResourcesScreenComponents/VideosTab';
import WorksheetsTab from '../components/ResourcesScreenComponents/WorkSheetsTab';
import AllResourcesTab from '../components/ResourcesScreenComponents/AllResoucesTab';

const Header = ({navigation}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={20} color={COLORS.black} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Learning Resources</Text>
    </View>
  );
};

// Tab Component
const TabBar = ({activeTab, setActiveTab}) => {
  return (
    <View style={styles.tabBar}>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'all' && styles.activeTab]}
        onPress={() => setActiveTab('all')}>
        <Text
          style={[styles.tabText, activeTab === 'all' && styles.activeTabText]}>
          All Resources
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'books' && styles.activeTab]}
        onPress={() => setActiveTab('books')}>
        <Text
          style={[
            styles.tabText,
            activeTab === 'books' && styles.activeTabText,
          ]}>
          Books
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'videos' && styles.activeTab]}
        onPress={() => setActiveTab('videos')}>
        <Text
          style={[
            styles.tabText,
            activeTab === 'videos' && styles.activeTabText,
          ]}>
          Videos
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'worksheets' && styles.activeTab]}
        onPress={() => setActiveTab('worksheets')}>
        <Text
          style={[
            styles.tabText,
            activeTab === 'worksheets' && styles.activeTabText,
          ]}>
          Worksheets
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// Main Component
const ResourcesScreen = () => {
  const [activeTab, setActiveTab] = useState('all');
  const navigation = useNavigation();
  // Sample data
  const resources = [
    {
      id: '1',
      title: 'Alphabet Learning Book',
      type: 'book',
      image: require('../assets/images/Math.png'), // Replace with your actual image path
    },
    {
      id: '2',
      title: 'Colors and Shapes',
      type: 'video',
      image: require('../assets/images/Math.png'), // Replace with your actual image path
    },
    {
      id: '3',
      title: 'Numbers Worksheet',
      type: 'worksheet',
      image: require('../assets/images/Math.png'), // Replace with your actual image path
    },
    {
      id: '4',
      title: 'Alphabet Learning Book',
      type: 'book',
      image: require('../assets/images/Math.png'), // Replace with your actual image path
    },
    {
      id: '5',
      title: 'Colors and Shapes',
      type: 'video',
      image: require('../assets/images/Math.png'), // Replace with your actual image path
    },
    {
      id: '6',
      title: 'Numbers Worksheet',
      type: 'worksheet',
      image: require('../assets/images/Math.png'), // Replace with your actual image path
    },
    {
      id: '7',
      title: 'Numbers Worksheet',
      type: 'worksheet',
      image: require('../assets/images/Math.png'), // Replace with your actual image path
    },
    {
      id: '8',
      title: 'Numbers Worksheet',
      type: 'worksheet',
      image: require('../assets/images/Math.png'), // Replace with your actual image path
    },
  ];

  // Render the appropriate tab component based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'books':
        return <BooksTab resources={resources} />;
      case 'videos':
        return <VideosTab resources={resources} />;
      case 'worksheets':
        return <WorksheetsTab resources={resources} />;
      default:
        return <AllResourcesTab resources={resources} />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle="dark-content" />
      <Header navigation={navigation} />
      <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
      {renderTabContent()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginBottom: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  tab: {
    paddingVertical: 12,
    marginRight: 16,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: COLORS.primary,
  },
  tabText: {
    color: COLORS.text_gray,
    fontFamily: 'Poppins-Regular',
  },
  activeTabText: {
    color: COLORS.primary,
    fontFamily: 'Poppins-Regular',
    fontWeight: '500',
  },
});

export default ResourcesScreen;
