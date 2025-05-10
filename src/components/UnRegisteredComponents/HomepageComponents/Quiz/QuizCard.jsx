import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import COLORS from '../../../../constants/color';

const {width} = Dimensions.get('window');

const QuizCard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://s3-alpha-sig.figma.com/img/94f3/a036/bc2534c2fb30cddb2af3d68564d420a7?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pnVhTYrjL5XuOEEILkFdtjO~Y-2G3ZeWZgEbvjdIBM352gd~yb8OAQEbdOFoT0TKbnXQl7KND8L8zXqnJAFRVdFApINjEgHyVXinij0KVjcak1am6S8WANApwjeygmgYNFiiA-3-WnWm5gEtm3QiG87iJXATxmrb5AiaAdwQa60G0EGAI1HXshdxs-Fa61nQZ6Y2dfBq10zEP6nc0QHtRG7QxXCV3tVCj~0XB2iXUa596oP4NAe8Kk9gtezEJjOYh8jNSfYDkMMpvTZviiXMgKI-zsqgsO3caaFezo7v42KwJzzCBNyy~2W53eK-UmDho3RFDZZT4AqZmkf59vZ9Vw__',
          }}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.subheading}>Fun for Parents</Text>
          <Text style={styles.heading}>
            “Unlock Two Days of Free Learning!”
          </Text>
          <Text style={styles.description}>
            Take our interactive quiz to understand how our teaching approach
            aligns with your parenting values. Get personalized insights in just
            5 minutes!
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('QuizScreen')}>
            <Text style={styles.buttonText}>Start Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FEF5EF',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 160,
    resizeMode: 'contain',
    marginRight: 8,
  },
  textContainer: {
    flex: 1,
  },
  subheading: {
    color: '#0AC0DF',
    fontWeight: '500',
    marginBottom: 2,
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
  },
  heading: {
    fontSize: 16,
    fontWeight: '800',
    color: COLORS.black,
    marginBottom: 6,
    fontFamily: 'Poppins-Regular',
  },
  description: {
    fontSize: 10,
    color: '#313C45',
    marginBottom: 10,
    fontFamily: 'Poppins-Regular',
  },
  button: {
    backgroundColor: '#0AC0DF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignSelf: 'flex-start',
    fontFamily: 'Poppins-Regular',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 10,
  },
});

export default QuizCard;
