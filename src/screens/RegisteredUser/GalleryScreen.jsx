import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import AssetsStock from '../../constants/ImagesContants';
import Header from '../../components/RegisteredComponents/GalleryComponents/Header';
import TabBar from '../../components/RegisteredComponents/GalleryComponents/TabBar';
import RecentPhotosView from '../../components/RegisteredComponents/GalleryComponents/RecentPhotosView';
import AlbumsView from '../../components/RegisteredComponents/GalleryComponents/AlbumsView';
import FavoritesView from '../../components/RegisteredComponents/GalleryComponents/FavouritesView';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const PHOTO_DATA = {
  recentPhotos: [
    {id: '1', uri: AssetsStock.Pre_School, date: '24-apr-2025'},
    {id: '2', uri: AssetsStock.Pre_School, date: '24-apr-2025'},
    {id: '3', uri: AssetsStock.Pre_School, date: '24-apr-2025'},
    {id: '4', uri: AssetsStock.Pre_School, date: '24-apr-2025'},
    {id: '5', uri: AssetsStock.Pre_School, date: '24-apr-2025'},
    {id: '6', uri: AssetsStock.Pre_School, date: '24-apr-2025'},
    {id: '7', uri: AssetsStock.Pre_School, date: '24-apr-2025'},
    {id: '8', uri: AssetsStock.Pre_School, date: '24-apr-2025'},
    {id: '9', uri: AssetsStock.Pre_School, date: '24-apr-2025'},
    {id: '10', uri: AssetsStock.Pre_School, date: '23-apr-2025'},
    {id: '11', uri: AssetsStock.Pre_School, date: '23-apr-2025'},
    {id: '12', uri: AssetsStock.Pre_School, date: '23-apr-2025'},
  ],
  albums: [
    {
      id: '1',
      title: 'Art Class',
      photoCount: 24,
      coverImage: AssetsStock.Pre_School,
      photos: Array.from({length: 24}, (_, i) => ({
        id: `art-${i + 1}`,
        uri: AssetsStock.Pre_School,
      })),
    },
    {
      id: '2',
      title: 'Field Trips',
      photoCount: 24,
      coverImage: AssetsStock.Pre_School,
      photos: Array.from({length: 24}, (_, i) => ({
        id: `trip-${i + 1}`,
        uri: AssetsStock.Pre_School,
      })),
    },
    {
      id: '3',
      title: 'Drawing Time',
      photoCount: 24,
      coverImage: AssetsStock.Pre_School,
      photos: Array.from({length: 24}, (_, i) => ({
        id: `draw-${i + 1}`,
        uri: AssetsStock.Pre_School,
      })),
    },
  ],
  favorites: Array.from({length: 9}, (_, i) => ({
    id: `fav-${i + 1}`,
    uri: AssetsStock.Pre_School,
  })),
};

const GalleryScreen = () => {
  const [activeTab, setActiveTab] = useState('Recent Photo');
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const navigation = useNavigation();
  const handleTabPress = tab => {
    setActiveTab(tab);
    setSelectedAlbum(null);
  };

  const handleAlbumPress = album => {
    setSelectedAlbum(album);
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const renderContent = () => {
    if (activeTab === 'Recent Photo') {
      return <RecentPhotosView photos={PHOTO_DATA.recentPhotos} />;
    } else if (activeTab === 'Albums') {
      if (selectedAlbum) {
        return <FavoritesView photos={selectedAlbum.photos} />;
      } else {
        return (
          <AlbumsView
            albums={PHOTO_DATA.albums}
            onAlbumPress={handleAlbumPress}
          />
        );
      }
    } else if (activeTab === 'Favorites' || activeTab === 'Favourites') {
      return <FavoritesView photos={PHOTO_DATA.favorites} />;
    }
    return null;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Gallery" onBackPress={handleBackPress} />
      <TabBar
        tabs={['Recent Photo', 'Albums', 'Favorites']}
        activeTab={activeTab}
        onTabPress={handleTabPress}
      />
      {renderContent()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default GalleryScreen;
