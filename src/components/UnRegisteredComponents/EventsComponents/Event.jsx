import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../../../constants/color';
import {useNavigation} from '@react-navigation/native';

const Event = ({title, description, image, ageRange}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>

        <View style={styles.detailsRow}>
          <View style={styles.detail}>
            <Icon name="time-outline" size={16} color="#666" />
            <Text style={styles.detailText}>30 Mins</Text>
          </View>
          <View style={styles.detail}>
            <Icon name="person-outline" size={16} color="#666" />
            <Text style={styles.detailText}>Age {ageRange}</Text>
          </View>
          <View style={styles.detail}>
            <Icon name="chatbubble-ellipses-outline" size={16} color="#666" />
            <Text style={styles.detailText}>Interactive</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ReDirect')}>
          <Text style={styles.buttonText}>Book a Section</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Event;

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#333',
    marginBottom: 16,
    lineHeight: 20,
  },
  detailsRow: {
    flexDirection: 'row',
    marginBottom: 16,
    justifyContent: 'space-evenly',
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  detailText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
  button: {
    backgroundColor: '#571D99',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});
