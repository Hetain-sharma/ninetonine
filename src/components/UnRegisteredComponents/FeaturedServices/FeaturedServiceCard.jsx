import {useNavigation} from '@react-navigation/native';
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';

const {width} = Dimensions.get('window');
const cardWidth = width * 0.85; // Card takes most of the screen width

export const FeaturedServiceCard = ({
  heading,
  para,
  image,
  duration,
  ageRange,
  type,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <ImageBackground
        style={styles.imageBackground}
        source={image}
        resizeMode="cover">
        <View style={styles.overlay} />
      </ImageBackground>

      <View style={styles.contentContainer}>
        <Text style={styles.heading}>{heading}</Text>
        <Text style={styles.description}>{para}</Text>

        <View style={styles.detailsContainer}>
          {duration && (
            <View style={styles.detailItem}>
              <Text style={styles.detailText}>{duration}</Text>
            </View>
          )}

          {ageRange && (
            <View style={styles.detailItem}>
              <Text style={styles.detailText}>{ageRange}</Text>
            </View>
          )}

          {type && (
            <View style={styles.detailItem}>
              <Text style={styles.detailText}>{type}</Text>
            </View>
          )}
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ReDirect')}>
          <Text style={styles.buttonText}>Book a Session</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: cardWidth,
    borderRadius: 12,
    backgroundColor: 'white',
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imageBackground: {
    height: 180,
    width: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  contentContainer: {
    padding: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
    lineHeight: 20,
  },
  detailsContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  detailText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
  button: {
    backgroundColor: '#571D99',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
});
