import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import COLORS from '../../constants/color';
import {FlatList} from 'react-native-gesture-handler';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SafeAreaView} from 'react-native-safe-area-context';
import AssetsStock from '../../constants/ImagesContants';

// Get screen dimensions for responsiveness
const {width} = Dimensions.get('window');
const isSmallScreen = width < 375;

const BranchSelector = ({nextStep}) => {
  const handleForm = () => {
    step + 1;
  };
  // Sample data for the branches
  const branches = [
    {
      id: '1',
      name: 'Tiny Tots Sunshine Valley',
      address: '123 Sunshine ave, Happy Town',
      phone: '1234567890',
      rating: 5.0,
      // For actual implementation, use require('./assets/image1.jpg') or a URL
      imageUrl: AssetsStock.branch1,
    },
    {
      id: '2',
      name: 'Tiny Tots Sunshine Valley',
      address: '123 Sunshine ave, Happy Town',
      phone: '1234567890',
      rating: 5,
      imageUrl: AssetsStock.branch2,
    },
    {
      id: '3',
      name: 'Tiny Tots Sunshine Valley',
      address: '123 Sunshine ave, Happy Town',
      phone: '1234567890',
      rating: 5.0,
      imageUrl: AssetsStock.branch1,
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Select a Branch</Text>
        <Text style={styles.subtitle}>
          Choose the campus that's most convenient for you
        </Text>
      </View>
      {/* Branch cards */}
      <FlatList
        data={branches}
        showsVerticalScrollIndicator={false}
        // pagingEnabled
        keyExtractor={branch => branch.id}
        renderItem={({item: branch}) => (
          <View key={branch.id} style={styles.branchCard}>
            <Image
              source={branch.imageUrl}
              style={styles.branchImage}
              resizeMode="cover"
            />

            <View style={styles.branchDetails}>
              <Text style={styles.branchName}>{branch.name}</Text>

              <View style={styles.infoRow}>
                <MaterialIcons name="location-on" size={16} color="#555" />
                <Text style={styles.infoText}>{branch.address}</Text>
              </View>

              <View style={styles.infoRow}>
                <Ionicons name="call-outline" size={16} color="#555" />
                <Text style={styles.infoText}>{branch.phone}</Text>
              </View>
            </View>

            <View style={styles.ratingContainer}>
              <FontAwesome name="star" size={16} color="#FFD700" />
              <Text style={styles.ratingText}>{branch.rating}</Text>
            </View>

            <TouchableOpacity style={styles.selectButton} onPress={nextStep}>
              <Text style={styles.selectButtonText}>Select This Branch</Text>
            </TouchableOpacity>
          </View>
        )}
        // scrollEventThrottle={16}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
    marginBottom: 2,
    color: COLORS.black,
    fontFamily: 'Poppins-Bold',
  },
  subtitle: {
    fontSize: 12,
    fontWeight: 400,
    color: COLORS.gray,
    fontFamily: 'Poppins-Regular',
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  branchCard: {
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 3,
    elevation: 1,
    backgroundColor: COLORS.white,
    borderWidth: 0.5,
    borderColor: COLORS.border,
  },
  branchImage: {
    width: '95%',
    height: 150,
    margin: 10,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  branchDetails: {
    paddingHorizontal: 16,
  },
  branchName: {
    fontSize: 12,
    fontWeight: 600,
    color: COLORS.black,
    marginBottom: 8,
    fontFamily: 'Poppins-Bold',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  infoText: {
    fontSize: 10,
    fontWeight: 500,
    color: COLORS.black,
    marginLeft: 8,
    fontFamily: 'Poppins-Regular',
  },
  ratingContainer: {
    position: 'absolute',
    top: 165,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 12,
    padding: 4,
    paddingHorizontal: 8,
  },
  ratingText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.black,
    marginLeft: 4,
    fontFamily: 'Poppins-Bold',
  },
  selectButton: {
    marginHorizontal: 16,
    marginVertical: 16,
    paddingVertical: 8,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: COLORS.primary,
    alignItems: 'center',
    width: 300,
    alignSelf: 'center',
  },
  selectButtonText: {
    color: Colors.primary,
    fontSize: 10,
    fontWeight: 500,
    fontFamily: 'Poppins-Bold',
  },
});

export default BranchSelector;
