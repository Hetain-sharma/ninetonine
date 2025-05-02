import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  StatusBar,
} from 'react-native';

// Correct imports for icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../../constants/color';
import Header from '../../components/HomepageComponents/Header';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');

const AuthenticatedHomePage = () => {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle="dark-content" />
      <View style={styles.container}>
        <Header />
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Banner Section */}
          <View style={styles.bannerContainer}>
            <Image
              source={require('../../assets/images/banner.jpg')}
              style={styles.bannerImage}
            />
            <View style={styles.bannerContent}>
              <Text style={styles.bannerTitle}>
                Join the Drawing Competition This Sunday
              </Text>
              <TouchableOpacity style={styles.joinButton}>
                <Text style={styles.joinButtonText}>Join Us</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* My Children Section */}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>My Children</Text>

            <View style={styles.childCard}>
              <View style={styles.childCardHeader}>
                <Image
                  source={require('../../assets/images/Profile.jpg')}
                  style={styles.childAvatar}
                />
                <View style={styles.childInfo}>
                  <View style={styles.nameContainer}>
                    <Text style={styles.childName}>Welcome, EMMA</Text>
                  </View>
                  <Text style={styles.childActivity}>
                    Emma has completed 3 activities today
                  </Text>

                  <View style={styles.tagsContainer}>
                    <View style={styles.tag}>
                      <Text style={styles.tagText}>Age: 3 years</Text>
                    </View>
                    <View style={styles.tag}>
                      <Text style={styles.tagText}>Phase: Early Learner</Text>
                    </View>
                  </View>
                </View>
              </View>

              <TouchableOpacity
                style={styles.addButton}
                onPress={() => console.log('Add child pressed')}>
                <AntDesign name="plus" size={16} color="#6a3093" />
                <Text style={styles.addButtonText}>Add Child</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.viewDetailsButton}
                onPress={() => navigation.navigate('ViewDetails')}>
                <Text style={styles.viewDetailsText}>View Details</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Feature Cards Section */}
          <View style={styles.featureCardsContainer}>
            <View style={styles.featureRow}>
              <TouchableOpacity
                style={styles.featureCard}
                onPress={() => navigation.navigate('Progress')}>
                <View style={styles.iconContainer}>
                  <Image
                    source={require('../../assets/images/ProgressTracking.png')}
                    style={styles.featureIcon}
                  />
                </View>
                <Text style={styles.featureText}>Progress Tracking</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.featureCard}>
                <View style={styles.iconContainer}>
                  <Image
                    source={require('../../assets/images/SwitchTime.png')}
                    style={styles.featureIcon}
                  />
                </View>
                <Text style={styles.featureText}>Switch Time</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.featureRow}>
              <TouchableOpacity style={styles.featureCard}>
                <View style={styles.iconContainer}>
                  <Image
                    source={require('../../assets/images/SwitchTeacher.png')}
                    style={styles.featureIcon}
                  />
                </View>
                <Text style={styles.featureText}>Switch Teacher</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.featureCard}>
                <View style={styles.iconContainer}>
                  <Image
                    source={require('../../assets/images/Payment.png')}
                    style={styles.featureIcon}
                  />
                </View>
                <Text style={styles.featureText}>Payment</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Recent Updates Section */}
          <View style={styles.updatesContainer}>
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionTitle}>Recent Updates</Text>
              <TouchableOpacity style={styles.viewAllButton}>
                <Text style={styles.viewAllText}>View All</Text>
                <AntDesign name="right" size={16} color="#6a3093" />
              </TouchableOpacity>
            </View>

            {/* Update Items */}
            <View style={styles.updateItem}>
              <View style={[styles.updateIconContainer]}>
                <FontAwesome name="star" size={20} color="#000" />
              </View>
              <View style={styles.updateContent}>
                <View style={styles.updateTitleRow}>
                  <Text style={styles.updateTitle}>New Achievement! 🎉</Text>
                  <Text style={styles.updateTime}>Today, 10:00AM</Text>
                </View>
                <Text style={styles.updateDescription}>
                  Emma completed her weekly reading goal
                </Text>
              </View>
            </View>

            <View style={styles.updateItem}>
              <View style={[styles.updateIconContainer]}>
                <Feather name="check" size={20} color="#4CAF50" />
              </View>
              <View style={styles.updateContent}>
                <View style={styles.updateTitleRow}>
                  <Text style={styles.updateTitle}>Progress Update</Text>
                  <Text style={styles.updateTime}>Today, 10:00AM</Text>
                </View>
                <Text style={styles.updateDescription}>
                  Emma has completed her math module with a score of 92%.
                </Text>
              </View>
            </View>

            <View style={styles.updateItem}>
              <View style={[styles.updateIconContainer]}>
                <MaterialIcons name="notifications" size={20} color="#F44336" />
              </View>
              <View style={styles.updateContent}>
                <View style={styles.updateTitleRow}>
                  <Text style={styles.updateTitle}>Payment Reminder</Text>
                  <Text style={styles.updateTime}>Today, 10:00AM</Text>
                </View>
                <Text style={styles.updateDescription}>
                  June fees are due in 3 days. Please make payment to avoid late
                  fees.
                </Text>
              </View>
            </View>
          </View>

          {/* Shop School Essentials Section */}
          <View style={styles.shopContainer}>
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionTitle}>Shop School Essentials</Text>
              <TouchableOpacity style={styles.viewAllButton}>
                <Text style={styles.viewAllText}>See All</Text>
              </TouchableOpacity>
            </View>

            {/* Products Row 1 */}
            <View style={styles.productsRow}>
              <View style={styles.productCard}>
                <View style={styles.bestSellerTag}>
                  <Text style={styles.bestSellerText}>Best Sellers</Text>
                </View>
                <Image
                  source={require('../../assets/images/SchoolBook1.png')}
                  style={styles.productImage}
                />
                <Text style={styles.productTitle}>
                  Skillmatics Scratch Art Book for Kids
                </Text>
                <View style={styles.ratingContainer}>
                  <AntDesign name="star" size={14} color="#FFD700" />
                  <Text style={styles.ratingText}>5.0</Text>
                </View>
                <Text style={styles.productPrice}>₹599</Text>
                <TouchableOpacity style={styles.addToCartButton}>
                  <Text style={styles.addToCartText}>ADD TO CART</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.productCard}>
                <View style={styles.bestSellerTag}>
                  <Text style={styles.bestSellerText}>Best Sellers</Text>
                </View>
                <Image
                  source={require('../../assets/images/SchoolBook2.png')}
                  style={styles.productImage}
                />
                <Text style={styles.productTitle}>
                  Montessori Slide Puzzle Game
                </Text>
                <View style={styles.ratingContainer}>
                  <AntDesign name="star" size={14} color="#FFD700" />
                  <Text style={styles.ratingText}>5.0</Text>
                </View>
                <Text style={styles.productPrice}>₹489</Text>
                <TouchableOpacity style={styles.addToCartButton}>
                  <Text style={styles.addToCartText}>ADD TO CART</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Products Row 2 */}
            <View style={styles.productsRow}>
              <View style={styles.productCard}>
                <View style={styles.bestSellerTag}>
                  <Text style={styles.bestSellerText}>Best Sellers</Text>
                </View>
                <Image
                  source={require('../../assets/images/SchoolBook1.png')}
                  style={styles.productImage}
                />
                <Text style={styles.productTitle}>
                  Skillmatics Scratch Art Book for Kids
                </Text>
                <View style={styles.ratingContainer}>
                  <AntDesign name="star" size={14} color="#FFD700" />
                  <Text style={styles.ratingText}>5.0</Text>
                </View>
                <Text style={styles.productPrice}>₹599</Text>
                <TouchableOpacity style={styles.addToCartButton}>
                  <Text style={styles.addToCartText}>ADD TO CART</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.productCard}>
                <View style={styles.bestSellerTag}>
                  <Text style={styles.bestSellerText}>Best Sellers</Text>
                </View>
                <Image
                  source={require('../../assets/images/SchoolBook2.png')}
                  style={styles.productImage}
                />
                <View>
                  <Text style={styles.productTitle}>
                    Montessori Slide Puzzle Game
                  </Text>
                  <View style={styles.ratingContainer}>
                    <AntDesign name="star" size={14} color="#FFD700" />
                    <Text style={styles.ratingText}>5.0</Text>
                  </View>
                  <Text style={styles.productPrice}>₹489</Text>
                </View>
                <TouchableOpacity style={styles.addToCartButton}>
                  <Text style={styles.addToCartText}>ADD TO CART</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Chat Button */}
          <TouchableOpacity style={styles.chatButton}>
            <MaterialIcons name="chat" size={24} color="white" />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 0,
  },
  innerContainer: {
    backgroundColor: COLORS.white,
  },
  scrollView: {
    padding: 10,
  },
  bannerContainer: {
    height: 175,
    marginHorizontal: 20,
    marginVertical: 15,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  bannerContent: {
    padding: 20,
    height: '100%',
    justifyContent: 'center',
  },
  bannerTitle: {
    color: '#000',
    fontSize: 16,
    fontWeight: 600,
    maxWidth: '70%',
    marginBottom: 10,
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: 'Poppins-Bold',
  },
  joinButton: {
    backgroundColor: '#2c6e49',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignSelf: 'center',
  },
  joinButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  sectionContainer: {
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  childCard: {
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    overflow: 'hidden',
    paddingBottom: 10,
    paddingTop: 10,
    marginBottom: 20,
  },
  childCardHeader: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },
  childAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    // borderWidth: 2,
    // borderColor: 'white',
  },
  childInfo: {
    flex: 1,
    marginLeft: 15,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },

  childName: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 500,
    fontFamily: 'Poppins-Regular',
    marginRight: 5,
  },

  childActivity: {
    color: COLORS.white,
    fontSize: 10,
    marginTop: 1,
    fontFamily: 'Poppins-Regular',
  },
  tagsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  tag: {
    backgroundColor: COLORS.white,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginRight: 10,
  },
  tagText: {
    color: COLORS.black,
    fontSize: 10,
    fontWeight: 500,
    fontFamily: 'Poppins-Regular',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 20,
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },

  addButtonText: {
    color: COLORS.primary,
    fontSize: 10,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
    marginLeft: 5,
  },
  viewDetailsButton: {
    backgroundColor: COLORS.white,
    alignItems: 'center',
    paddingVertical: 8,
    marginTop: 10,
    borderRadius: 30,
    marginHorizontal: 15,
  },

  viewDetailsText: {
    color: COLORS.primary,
    fontFamily: 'Poppins-Regular',
    fontWeight: 'bold',
  },
  featureCardsContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  featureRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  featureCard: {
    width: '48%',
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E9EBF3',
  },
  iconContainer: {
    width: 70,
    height: 70,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  featureIcon: {
    width: 65,
    height: 65,
  },
  featureText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
  updatesContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewAllText: {
    color: '#6a3093',
    marginRight: 5,
    fontSize: 14,
  },
  updateItem: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  updateIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  updateContent: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    paddingBottom: 15,
  },
  updateTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  updateTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: COLORS.black,
  },
  updateTime: {
    color: COLORS.gray,
    fontSize: 12,
  },
  updateDescription: {
    color: COLORS.gray,
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
  shopContainer: {
    paddingHorizontal: 20,
    marginBottom: 80,
  },
  productsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  productCard: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 3,
    elevation: 1,
    backgroundColor: COLORS.white,
    borderWidth: 0.5,
    borderColor: COLORS.border,
  },
  bestSellerTag: {
    backgroundColor: '#E2C8FF',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 5,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  bestSellerText: {
    color: COLORS.black,
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
  },
  productImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  productTitle: {
    fontSize: 12,
    fontWeight: 400,
    marginBottom: 5,
    fontFamily: 'Poppins-Regular',
    color: COLORS.black,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  ratingText: {
    fontSize: 10,
    marginLeft: 5,
    color: COLORS.black,
    fontFamily: 'Poppins-Regular',
  },
  productPrice: {
    fontSize: 12,
    marginBottom: 8,
    fontFamily: 'Poppins-Regular',
  },
  addToCartButton: {
    backgroundColor: '#E2C8FF',
    paddingVertical: 8,
    borderRadius: 20,
    alignItems: 'center',
  },
  addToCartText: {
    color: COLORS.black,
    fontSize: 12,
    fontWeight: 'bold',
  },
  chatButton: {
    position: 'absolute',
    bottom: 80,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#6a3093',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});

export default AuthenticatedHomePage;
