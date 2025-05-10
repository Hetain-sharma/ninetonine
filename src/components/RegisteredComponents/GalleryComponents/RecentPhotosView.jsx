import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const RecentPhotosView = ({photos}) => {
  // Group photos by date
  const groupedPhotos = photos.reduce((groups, photo) => {
    if (!groups[photo.date]) {
      groups[photo.date] = [];
    }
    groups[photo.date].push(photo);
    return groups;
  }, {});

  const renderPhotoItem = ({item}) => (
    <TouchableOpacity style={styles.photoItem}>
      <Image source={item.uri} style={styles.photo} resizeMode="cover" />
    </TouchableOpacity>
  );

  const renderDateSection = (date, datePhotos, index) => {
    let title = 'Art Class';
    if (index === 0) {
      title = "Today's Photos";
    }

    return (
      <View key={date} style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>{title}</Text>
          <Text style={styles.sectionDate}>{date}</Text>
        </View>

        <FlatList
          data={datePhotos}
          renderItem={renderPhotoItem}
          keyExtractor={item => item.id}
          numColumns={3}
          scrollEnabled={false}
        />
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      {Object.entries(groupedPhotos).map(([date, datePhotos], index) =>
        renderDateSection(date, datePhotos, index),
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  sectionContainer: {
    marginBottom: 24,
  },
  sectionHeader: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionDate: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  photoItem: {
    flex: 1 / 3,
    aspectRatio: 1,
    margin: 2,
    borderRadius: 12,
    overflow: 'hidden',
  },
  photo: {
    width: '100%',
    height: '100%',
  },
});

export default RecentPhotosView;
