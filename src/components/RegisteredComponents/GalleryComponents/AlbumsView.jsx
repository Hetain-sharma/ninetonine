import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

const AlbumsView = ({albums, onAlbumPress}) => {
  const renderAlbumItem = ({item}) => (
    <TouchableOpacity
      style={styles.albumItem}
      onPress={() => onAlbumPress(item)}>
      <Image
        source={item.coverImage}
        style={styles.albumCover}
        resizeMode="cover"
      />
      <View style={styles.albumInfo}>
        <Text style={styles.albumTitle}>{item.title}</Text>
        <Text style={styles.albumCount}>{item.photoCount} photos</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={albums}
      renderItem={renderAlbumItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.albumList}
      numColumns={2}
      columnWrapperStyle={styles.columnWrapper}
    />
  );
};

const styles = StyleSheet.create({
  albumList: {
    padding: 16,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  albumItem: {
    width: '48%',
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#f9f9f9',
  },
  albumCover: {
    width: '100%',
    height: 100,
  },
  albumInfo: {
    padding: 12,
  },
  albumTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  albumCount: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});

export default AlbumsView;
