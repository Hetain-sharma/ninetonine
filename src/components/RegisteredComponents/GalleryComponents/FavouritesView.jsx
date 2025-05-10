import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const FavoritesView = ({photos}) => {
  const renderPhotoItem = ({item}) => (
    <View style={styles.photoItem}>
      <Image source={item.uri} style={styles.photo} resizeMode="cover" />
      <TouchableOpacity style={styles.downloadButton}>
        <Icon name="download" size={20} color="#000" />
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={photos}
      renderItem={renderPhotoItem}
      keyExtractor={item => item.id}
      numColumns={3}
      contentContainerStyle={styles.photoList}
    />
  );
};

const styles = StyleSheet.create({
  photoList: {
    padding: 8,
  },
  photoItem: {
    flex: 1 / 3,
    aspectRatio: 1,
    margin: 4,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
  },
  photo: {
    width: '100%',
    height: '100%',
  },
  downloadButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FavoritesView;
