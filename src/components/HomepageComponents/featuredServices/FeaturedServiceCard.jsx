import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const FeaturedServiceCard = ({heading, para, image}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        height: 220,
        width: 160,
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: 10,
      }}>
      <ImageBackground style={{height: '100%', width: '100%'}} source={image}>
        <View
          style={{
            height: '100%',
            width: '100%',
            justifyContent: 'flex-end',
          }}>
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,.5)', 'rgba(0,0,0,0.8)']}
            style={{
              height: '60%',
              paddingTop: 30,
              padding: 5,
              justifyContent: 'space-around',
            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '600',
                color: '#fff',
                textAlign: 'center',
              }}>
              {heading}
            </Text>
            <Text
              style={{
                fontSize: 10,
                fontWeight: '500',
                color: 'white',
                textAlign: 'center',
              }}>
              {para}
            </Text>
            <TouchableOpacity
              style={{
                height: 28,
                fontSize: 12,
                backgroundColor: '#571D99',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                paddingHorizontal: 15,
                borderRadius: 5,
              }}
              title="Book a now"
              onPress={() => navigation.navigate('ReDirect')}>
              <Text style={{fontSize: 10, fontWeight: '600', color: '#fff'}}>
                Book a now
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </ImageBackground>
    </View>
  );
};
