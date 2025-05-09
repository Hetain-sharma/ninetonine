import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import COLORS from '../../../constants/color';

const {width} = Dimensions.get('window');
const cardWidth = width * 0.85; // Card takes most of the screen width

const LifeSkillCard = ({title, subtitle, image, tag = 'Organization'}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.cardWrapper}>
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={image} resizeMode="cover" />
          <View style={styles.tagContainer}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{subtitle}</Text>

          <TouchableOpacity
            style={styles.learnMoreButton}
            onPress={() => navigation.navigate('ReDirect')}>
            <Text style={styles.learnMoreText}>Learn more</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LifeSkillCard;

const styles = StyleSheet.create({
  cardWrapper: {
    width: cardWidth,
    alignSelf: 'center',
    marginBottom: 16,
  },
  cardContainer: {
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: COLORS.white,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 4,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    height: 160,
    width: '100%',
  },
  tagContainer: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
  },
  tagText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: '600',
  },
  contentContainer: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.black,
    marginBottom: 8,
    fontFamily: 'Poppins-Bold',
  },
  description: {
    fontSize: 14,
    color: COLORS.text_gray,
    marginBottom: 16,
    lineHeight: 20,
    fontFamily: 'Poppins-Regular',
  },
  learnMoreButton: {
    alignSelf: 'flex-start',
  },
  learnMoreText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.primary,
    fontFamily: 'Poppins-Medium',
  },
});
