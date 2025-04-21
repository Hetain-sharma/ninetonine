import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';

import React from 'react';
import LifeSkillCard from './LifeSkillCard';
import {ScrollView} from 'react-native-gesture-handler';
import Heading from '../SmallComponents/Heading';
import AssetsStock from '../../../constants/ImagesContants';

const packingTips = [
  {
    id: '1',
    title: 'Packing School Bag',
    subtitle: 'Learn how to pack essentials & stay organized for school',
    image: AssetsStock.Lifehack1,
  },
  {
    id: '2',
    title: 'Organize by Subject',
    subtitle: 'Keep your bag clutter-free by grouping items by subject',
    image: AssetsStock.Lifehack2,
  },
  {
    id: '3',
    title: 'Daily Essentials Checklist',
    subtitle: 'Never forget a thing with a handy morning checklist',
    image: AssetsStock.Lifehack2,
  },
  {
    id: '4',
    title: 'Smart Use of Compartments',
    subtitle: 'Discover how to use every pocket to your advantage',
    image: AssetsStock.Lifehack1,
  },
];

const SkillPage = () => {
  return (
    <View style={{marginTop: 20}}>
      <Heading message="Life Skills Hacks" />

      <FlatList
        data={packingTips}
        keyExtractor={item => item.id}
        horizontal
        contentContainerStyle={{paddingHorizontal: 10}}
        ItemSeparatorComponent={() => <View style={{width: 10}} />}
        renderItem={({item}) => (
          <LifeSkillCard
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
          />
        )}
      />
    </View>
  );
};

export default SkillPage;

const styles = StyleSheet.create({});
