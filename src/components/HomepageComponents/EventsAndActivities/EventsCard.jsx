import React from 'react';
import {View, FlatList} from 'react-native';
import Heading from '../../CommonComponents/Heading';
import Event from './Event';
import AssetsStock from '../../../constants/ImagesContants';
import {useNavigation} from '@react-navigation/native';

const eventData = [
  {
    id: 1,
    title: 'Storytelling SessionsStorytelling Sessions',
    description: `Explore fun and interactive stories to boost imagination and listening skills. `,
    image: AssetsStock.event1,
  },
  {
    id: 2,
    title: 'Art Workshop',
    description: 'A creative workshop for art enthusiasts.',
    image: AssetsStock.event2,
  },
  {
    id: 3,
    title: 'Tech Conference',
    description: 'A gathering of tech experts and enthusiasts.',
    image: AssetsStock.event1,
  },
];

const EventsCard = () => {
  const navigation = useNavigation();
  const handleUpcomingEvents = () => {
    navigation.navigate('UpcomingEvents');
  };
  return (
    <View style={{marginTop: 20}}>
      <Heading message="Events & Activities" func={handleUpcomingEvents} />
      <FlatList
        horizontal
        data={eventData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <Event
            title={item.title}
            description={item.description}
            image={item.image}
          />
        )}
        contentContainerStyle={{paddingHorizontal: 10, gap: 10}}
      />
    </View>
  );
};

export default EventsCard;
