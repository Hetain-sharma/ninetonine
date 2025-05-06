import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import COLORS from '../../../constants/color';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
const MyChildren = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>My Children</Text>

      <View style={styles.childCard}>
        <View style={styles.childCardHeader}>
          <Image
            source={require('../../../assets/images/Profile.jpg')}
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
  );
};

export default MyChildren;

const styles = StyleSheet.create({
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
});
