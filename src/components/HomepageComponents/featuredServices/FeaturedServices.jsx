import React from 'react';
import {View, FlatList} from 'react-native';
import {FeaturedServiceCard} from './FeaturedServiceCard';
import Heading from '../../CommonComponents/Heading';
import AssetsStock from '../../../constants/ImagesContants';

const data = [
  {
    id: 1,
    heading: 'Choose Your Time Book a Class Anytime',
    para: 'JavaScript is a versatile programming',
    image: AssetsStock.teacher,
  },
  {
    id: 2,
    heading: 'The Right Teacher for Your Child',
    para: 'React is a JavaScript.',
    image: AssetsStock.child,
  },
  {
    id: 3,
    heading: 'No Extra Charges, Pay as You Go!',
    para: 'APIs allow different',
    image: AssetsStock.teacher,
  },
];

export const FeaturedServices = () => {
  return (
    <View style={{marginTop: 20}}>
      <Heading message="Featured Services" />
      <FlatList
        horizontal
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <FeaturedServiceCard
            heading={item.heading}
            para={item.para}
            image={item.image}
          />
        )}
        contentContainerStyle={{paddingHorizontal: 10, gap: 10}}
      />
    </View>
  );
};
