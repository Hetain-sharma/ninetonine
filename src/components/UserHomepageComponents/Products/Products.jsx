import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import React from 'react';
import COLORS from '../../../constants/color';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Heading from '../../CommonComponents/Heading';

const productData = [
  {
    id: '1',
    title: 'Skillmatics Scratch Art Book for Kids',
    price: '₹599',
    image: require('../../../assets/images/SchoolBook1.png'),
  },
  {
    id: '2',
    title: 'Montessori Slide Puzzle Game',
    price: '₹489',
    image: require('../../../assets/images/SchoolBook2.png'),
  },
  {
    id: '3',
    title: 'Skillmatics Scratch Art Book for Kids',
    price: '₹599',
    image: require('../../../assets/images/SchoolBook1.png'),
  },
  {
    id: '4',
    title: 'Montessori Slide Puzzle Game',
    price: '₹489',
    image: require('../../../assets/images/SchoolBook2.png'),
  },
];

const Products = () => {
  const renderItem = ({item}) => (
    <View style={styles.productCard}>
      <View style={styles.bestSellerTag}>
        <Text style={styles.bestSellerText}>Best Sellers</Text>
      </View>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productTitle}>{item.title}</Text>
      <View style={styles.ratingContainer}>
        <AntDesign name="star" size={14} color="#FFD700" />
        <Text style={styles.ratingText}>5.0</Text>
      </View>
      <Text style={styles.productPrice}>{item.price}</Text>
      <TouchableOpacity style={styles.addToCartButton}>
        <Text style={styles.addToCartText}>ADD TO CART</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.shopContainer}>
      <Heading message={'Shop School Essentials'} />

      <FlatList
        data={productData}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={styles.productsRow}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
      />
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
