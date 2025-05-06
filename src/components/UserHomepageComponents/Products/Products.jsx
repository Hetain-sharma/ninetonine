import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import COLORS from '../../../constants/color';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Products = () => {
  return (
    <View style={styles.shopContainer}>
      <View style={styles.sectionHeaderRow}>
        <Text style={styles.sectionTitle}>Shop School Essentials</Text>
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.productsRow}>
        <View style={styles.productCard}>
          <View style={styles.bestSellerTag}>
            <Text style={styles.bestSellerText}>Best Sellers</Text>
          </View>
          <Image
            source={require('../../../assets/images/SchoolBook1.png')}
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
            source={require('../../../assets/images/SchoolBook2.png')}
            style={styles.productImage}
          />
          <Text style={styles.productTitle}>Montessori Slide Puzzle Game</Text>
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
            source={require('../../../assets/images/SchoolBook1.png')}
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
            source={require('../../../assets/images/SchoolBook2.png')}
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
  );
};

export default Products;

const styles = StyleSheet.create({
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});
