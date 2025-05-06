import React, {useState, useRef} from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../constants/color';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');
const CAROUSEL_HEIGHT = 220;

const School = () => {
  const [activeTab, setActiveTab] = useState('About');
  const [activeFeeTab, setActiveFeeTab] = useState('Monthly');
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);
  const navigation = useNavigation();

  const carouselRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const carouselImages = [
    {id: '1', source: require('../assets/images/school.jpeg')},
    {id: '2', source: require('../assets/images/school1.jpeg')},
    {id: '3', source: require('../assets/images/school.jpeg')},
    {id: '4', source: require('../assets/images/school1.jpeg')},
    {id: '5', source: require('../assets/images/school.jpeg')},
    {id: '6', source: require('../assets/images/school1.jpeg')},
  ];

  const galleryImages = [
    {id: '1', source: require('../assets/images/school.jpeg')},
    {id: '2', source: require('../assets/images/school1.jpeg')},
    {id: '3', source: require('../assets/images/school.jpeg')},
    {id: '4', source: require('../assets/images/school1.jpeg')},
    {id: '5', source: require('../assets/images/school.jpeg')},
  ];
  const facilities = [
    {id: '1', name: 'Playground', icon: 'swing'},
    {id: '2', name: 'Art Studio', icon: 'palette'},
    {id: '3', name: 'Library', icon: 'book-open-variant'},
    {id: '4', name: 'Meals', icon: 'food-variant'},
    {id: '5', name: 'Transport', icon: 'bus-school'},
    {id: '6', name: 'Music Room', icon: 'music-note'},
  ];

  const handlePrevious = () => {
    if (activeCarouselIndex > 0) {
      carouselRef.current.scrollToIndex({
        index: activeCarouselIndex - 1,
        animated: true,
      });
    }
  };

  const handleNext = () => {
    if (activeCarouselIndex < carouselImages.length - 1) {
      carouselRef.current.scrollToIndex({
        index: activeCarouselIndex + 1,
        animated: true,
      });
    }
  };

  const renderCarouselItem = ({item}) => (
    <View style={styles.carouselItem}>
      <Image source={item.source} style={styles.carouselImage} />
    </View>
  );

  const renderGalleryItem = ({item}) => (
    <TouchableOpacity style={styles.galleryItemContainer}>
      <Image source={item.source} style={styles.galleryImage} />
    </TouchableOpacity>
  );

  const onCarouselScroll = Animated.event(
    [{nativeEvent: {contentOffset: {x: scrollX}}}],
    {
      useNativeDriver: false,
      listener: event => {
        const slideIndex = Math.round(
          event.nativeEvent.contentOffset.x / width,
        );
        if (slideIndex !== activeCarouselIndex) {
          setActiveCarouselIndex(slideIndex);
        }
      },
    },
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Carousel */}
        <View style={styles.carouselContainer}>
          <FlatList
            ref={carouselRef}
            data={carouselImages}
            renderItem={renderCarouselItem}
            keyExtractor={item => item.id}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={onCarouselScroll}
            scrollEventThrottle={16}
          />

          {/* Status Bar */}
          <TouchableOpacity
            style={styles.statusBar}
            onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={20} color={COLORS.white} />
          </TouchableOpacity>

          {/* Carousel Navigation */}
          <View style={styles.carouselNavigation}>
            <TouchableOpacity
              style={styles.navButton}
              onPress={handlePrevious}
              disabled={activeCarouselIndex === 0}>
              <Icon name="chevron-left" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.navButton}
              onPress={handleNext}
              disabled={activeCarouselIndex === carouselImages.length - 1}>
              <Icon name="chevron-right" size={24} color="white" />
            </TouchableOpacity>
          </View>

          {/* Pagination Dots */}
          <View style={styles.paginationContainer}>
            {carouselImages.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.paginationDot,
                  index === activeCarouselIndex && styles.paginationDotActive,
                ]}
              />
            ))}
          </View>
        </View>

        {/* Content Card */}
        <View style={styles.contentCard}>
          {/* Rating */}
          <View style={styles.ratingContainer}>
            <Icon name="star" size={18} color="#FFC107" />
            <Text style={styles.ratingText}>4.8</Text>
            <Text style={styles.reviewsText}>(107 reviews)</Text>
          </View>

          {/* School Name and Location */}
          <View style={styles.schoolInfoContainer}>
            <Text style={styles.schoolName}>Sunshine Preschool</Text>
            <View style={styles.locationContainer}>
              <TouchableOpacity style={styles.iconButton}>
                <Icon name="phone" size={22} color="#673AB7" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Icon name="map-marker" size={22} color="#673AB7" />
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.locationText}>New Delhi</Text>

          {/* Home School Tag */}
          <View style={styles.tagContainer}>
            <Icon name="home-variant" size={16} color="green" />
            <Text style={styles.tagText}>Home School</Text>
          </View>

          {/* Fees Section */}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Fees</Text>

            {/* Fee Tabs */}
            <View style={styles.tabsContainer}>
              {['Monthly', 'Quarterly', 'Annual'].map(tab => (
                <TouchableOpacity
                  key={tab}
                  style={[
                    styles.feeTab,
                    activeFeeTab === tab && styles.activeTab,
                  ]}
                  onPress={() => setActiveFeeTab(tab)}>
                  <Text
                    style={[
                      styles.tabText,
                      activeFeeTab === tab && styles.activeTabText,
                    ]}>
                    {tab}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Fee Details */}
            <View style={styles.feeDetailsContainer}>
              <View style={styles.feeRow}>
                <Text style={styles.feeLabel}>Monthly Fee</Text>
                <Text style={styles.feeAmount}>₹6000.00</Text>
              </View>
              <View style={styles.feeRow}>
                <Text style={styles.feeLabel}>Per Day Fee</Text>
                <Text style={styles.feeAmount}>₹1200.00</Text>
              </View>
            </View>
          </View>

          {/* Navigation Tabs */}
          <View style={styles.navigationTabsContainer}>
            {['About', 'Schedule', 'Teachers', 'Review'].map(tab => (
              <TouchableOpacity
                key={tab}
                style={[
                  styles.navigationTab,
                  activeTab === tab && styles.activeNavigationTab,
                ]}
                onPress={() => setActiveTab(tab)}>
                <Text
                  style={[
                    styles.navigationTabText,
                    activeTab === tab && styles.activeNavigationTabText,
                  ]}>
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* About School Section */}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>About School</Text>
            <Text style={styles.aboutText}>
              Lorem ipsum is a placeholder text commonly used to demonstrate the
              visual form of a document or a typeface without relying on
              meaningful content. to demonstrate the visual form of a document
              or a typeface without relying on meaningful content.
            </Text>
          </View>

          {/* Facilities Section */}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Facilities</Text>
            <View style={styles.facilitiesContainer}>
              {facilities.map((facility, index) => (
                <TouchableOpacity
                  key={facility.id}
                  style={[
                    styles.facilityItem,
                    {backgroundColor: getFacilityColor(index)},
                  ]}>
                  <Icon
                    name={facility.icon}
                    size={24}
                    color={getFacilityIconColor(index)}
                  />
                  <Text style={styles.facilityText}>{facility.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Gallery Section */}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Gallery</Text>
            <View style={styles.galleryContainer}>
              <FlatList
                data={galleryImages}
                renderItem={renderGalleryItem}
                keyExtractor={item => item.id}
                numColumns={3}
                scrollEnabled={false}
              />
            </View>
          </View>

          {/* Action Buttons */}
          <View style={styles.actionButtonsContainer}>
            <TouchableOpacity style={styles.bookButton}>
              <Text style={styles.bookButtonText}>Book Class</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.changeButton}>
              <Text style={styles.changeButtonText}>Change School</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const getFacilityColor = index => {
  const colors = [
    '#F9E4E8',
    '#E4F9E6',
    '#E4E6F9',
    '#F9F6E4',
    '#E4F1F9',
    '#F9E4F7',
  ];
  return colors[index % colors.length];
};

const getFacilityIconColor = index => {
  const colors = [
    '#D81B60',
    '#43A047',
    '#3949AB',
    '#FFA000',
    '#00ACC1',
    '#8E24AA',
  ];
  return colors[index % colors.length];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  carouselContainer: {
    height: CAROUSEL_HEIGHT,
    position: 'relative',
  },
  carouselItem: {
    width,
    height: CAROUSEL_HEIGHT,
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  statusBar: {
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    zIndex: 10,
  },
  timeText: {
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
  statusIcons: {
    flexDirection: 'row',
    gap: 8,
  },
  carouselNavigation: {
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    transform: [{translateY: -15}],
    zIndex: 10,
  },
  navButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    // backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    // elevation: 3,
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 15,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginHorizontal: 4,
    marginBottom: 10,
  },
  paginationDotActive: {
    backgroundColor: 'white',
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  contentCard: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 30,
    elevation: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  ratingText: {
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 16,
  },
  reviewsText: {
    color: 'gray',
    marginLeft: 5,
  },
  schoolInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  schoolName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#212121',
  },
  locationContainer: {
    flexDirection: 'row',
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  locationText: {
    color: '#757575',
    fontSize: 16,
    marginBottom: 10,
  },
  tagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F5E9',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#4CAF50',
  },
  tagText: {
    color: '#2E7D32',
    marginLeft: 6,
    fontSize: 14,
    fontWeight: '500',
  },
  sectionContainer: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#212121',
  },
  tabsContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  feeTab: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginRight: 10,
    backgroundColor: '#F5F5F5',
  },
  activeTab: {
    backgroundColor: '#673AB7',
  },
  tabText: {
    color: '#757575',
    fontWeight: '500',
  },
  activeTabText: {
    color: 'white',
    fontWeight: 'bold',
  },
  feeDetailsContainer: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    padding: 16,
    backgroundColor: '#FAFAFA',
  },
  feeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  feeLabel: {
    fontWeight: '500',
    fontSize: 16,
    color: '#424242',
  },
  feeAmount: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#212121',
  },
  navigationTabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  navigationTab: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    flex: 1,
    alignItems: 'center',
  },
  activeNavigationTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#673AB7',
  },
  navigationTabText: {
    color: '#757575',
    fontWeight: '500',
  },
  activeNavigationTabText: {
    color: '#673AB7',
    fontWeight: 'bold',
  },
  aboutText: {
    color: '#616161',
    lineHeight: 22,
    fontSize: 15,
  },
  facilitiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  facilityItem: {
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 1,
  },
  facilityText: {
    marginLeft: 12,
    fontWeight: '500',
    fontSize: 15,
  },
  galleryContainer: {
    marginTop: 12,
  },
  galleryItemContainer: {
    flex: 1 / 3,
    aspectRatio: 1,
    padding: 3,
  },
  galleryImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 50,
  },
  bookButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#673AB7',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookButtonText: {
    color: '#673AB7',
    fontWeight: 'bold',
    fontSize: 16,
  },
  changeButton: {
    flex: 2,
    paddingVertical: 14,
    borderRadius: 10,
    backgroundColor: '#673AB7',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  changeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default School;
