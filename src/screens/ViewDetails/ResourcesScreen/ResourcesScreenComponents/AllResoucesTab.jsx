import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';

// Icons
const ViewIcon = () => <Text style={{fontSize: 16}}>👁️</Text>;

const PlayIcon = () => <Text style={{fontSize: 16}}>▶️</Text>;

const DownloadIcon = () => <Text style={{fontSize: 16}}>↓</Text>;

const BookIcon = () => <Text style={{fontSize: 16}}>📘</Text>;

const VideoIcon = () => <Text style={{fontSize: 16}}>🎬</Text>;

const WorksheetIcon = () => <Text style={{fontSize: 16}}>📝</Text>;

// Resource Item Component
const ResourceItem = ({item}) => {
  return (
    <View style={styles.resourceItem}>
      <Image source={item.image} style={styles.resourceImage} />
      <View style={styles.resourceContent}>
        <Text style={styles.resourceTitle}>{item.title}</Text>
        <View style={styles.resourceMeta}>
          <View style={styles.ageTag}>
            <Text style={styles.ageTagText}>Age: 4-6</Text>
          </View>
          <View style={styles.actionButton}>
            {item.type === 'book' && (
              <TouchableOpacity style={styles.viewButton}>
                <ViewIcon />
                <Text style={styles.buttonText}>View</Text>
              </TouchableOpacity>
            )}
            {item.type === 'video' && (
              <TouchableOpacity style={styles.playButton}>
                <PlayIcon />
                <Text style={styles.buttonText}>Play</Text>
              </TouchableOpacity>
            )}
            {item.type === 'worksheet' && (
              <TouchableOpacity style={styles.downloadButton}>
                <DownloadIcon />
                <Text style={styles.buttonText}>Download</Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.typeIcon}>
            {item.type === 'book' && <BookIcon />}
            {item.type === 'video' && <VideoIcon />}
            {item.type === 'worksheet' && <WorksheetIcon />}
          </View>
        </View>
      </View>
    </View>
  );
};

const AllResourcesTab = ({resources}) => {
  return (
    <FlatList
      data={resources}
      renderItem={({item}) => <ResourceItem item={item} />}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.resourceList}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  resourceList: {
    padding: 16,
  },
  resourceItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  resourceImage: {
    width: 80,
    height: 80,
    borderRadius: 4,
    marginRight: 12,
  },
  resourceContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  resourceTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
    fontFamily: 'Poppins-Regular',
  },
  resourceMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ageTag: {
    backgroundColor: '#e8f5e9',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
  },
  ageTagText: {
    color: '#2e7d32',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
  actionButton: {
    marginLeft: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  playButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  downloadButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    marginLeft: 4,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  typeIcon: {
    marginLeft: 8,
  },
});

export default AllResourcesTab;
