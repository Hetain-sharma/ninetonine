import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import COLORS from '../../constants/color';

// Icons
const DownloadIcon = () => <Text style={{fontSize: 16}}>↓</Text>;

const WorksheetIcon = () => <Text style={{fontSize: 16}}>📝</Text>;

// Worksheet Item Component
const WorksheetItem = ({item}) => {
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
            <TouchableOpacity style={styles.downloadButton}>
              <DownloadIcon />
              <Text style={styles.buttonText}>Download</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.typeIcon}>
            <WorksheetIcon />
          </View>
        </View>
      </View>
    </View>
  );
};

const WorksheetsTab = ({resources}) => {
  // Filter only worksheet resources
  const worksheetResources = resources.filter(
    item => item.type === 'worksheet',
  );

  return (
    <FlatList
      data={worksheetResources}
      renderItem={({item}) => <WorksheetItem item={item} />}
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
    shadowOpacity: 0.03,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 3,
    elevation: 1,
    backgroundColor: COLORS.white,
    borderWidth: 0.5,
    borderColor: COLORS.border,
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

export default WorksheetsTab;
