import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AssetsStock from '../../../../constants/ImagesContants';
import COLORS from '../../../../constants/color';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');

const banners = [
  {
    id: '1',
    title: 'Personalized Learning for Your Child!',
    subtitle: 'Choose Their Age Group to Begin',
    image: AssetsStock.baby,
  },
  {
    id: '2',
    title: 'Fun Learning Experience!',
    subtitle: 'Engaging activities for kids',
    image: AssetsStock.baby,
  },
  {
    id: '3',
    title: 'Start Their Journey Today!',
    subtitle: 'Interactive and enjoyable lessons',
    image: AssetsStock.baby,
  },
];

const BannerItem = ({item, handleEnrollPress}) => (
  <View style={styles.banner}>
    <View style={{width: '55%', justifyContent: 'center'}}>
      <Text style={styles.title}>{item.title}</Text>
      {/* <Text style={styles.subtitle}>{item.subtitle}</Text> */}
      <TouchableOpacity style={styles.enrollButton} onPress={handleEnrollPress}>
        <Text style={styles.enrollText}>Enroll Now</Text>
      </TouchableOpacity>
    </View>

    <View
      style={{width: '45%', alignItems: 'flex-end', justifyContent: 'center'}}>
      <Image style={styles.image} source={AssetsStock.baby} />
    </View>
  </View>
);

const BannerCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const flatListRef = useRef(null);
  const navigation = useNavigation();

  const handleEnrollPress = () => {
    navigation.navigate('EnrollScreen'); // replace 'TargetScreen' with your actual screen name
  };

  const handleScroll = event => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(slideIndex);
  };

  return (
    <View style={{alignItems: 'center'}}>
      <FlatList
        ref={flatListRef}
        data={banners}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <BannerItem item={item} handleEnrollPress={handleEnrollPress} />
        )}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />
      <View style={styles.pagination}>
        {banners.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              {
                backgroundColor: index === activeIndex ? '#2D73F5' : '#E0E0E0',
                width: index === activeIndex ? 20 : 20,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default BannerCarousel;

const styles = StyleSheet.create({
  enrollButton: {
    backgroundColor: COLORS.white,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    elevation: 2, // for subtle shadow on Android
    shadowColor: COLORS.primary,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    alignSelf: 'flex-start', // or 'center' based on layout
    marginTop: 10,
  },

  enrollText: {
    color: '#2D73F5',
    fontWeight: '600',
    fontSize: 14,
  },

  banner: {
    backgroundColor: '#58BF68',
    height: 145,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    borderRadius: 5,
    padding: 10,
    overflow: 'hidden',
    width: width * 0.9,
    marginHorizontal: 8,
    marginBottom: 10,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#fff',
    fontSize: 14,
    marginTop: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  paginationDot: {
    height: 6,
    borderRadius: 4,
    marginHorizontal: 2,
  },
});
