import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import COLORS from '../../../../constants/color';

const ProgressBadgesCard = ({BADGES_DATA}) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.cardTitleContainer}>
          <Text style={{color: '#6A3EA1'}}>🏆</Text>
          <Text style={styles.cardTitle}>Progress Badges</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.badgesContainer}>
        {BADGES_DATA.map((badge, index) => (
          <View key={index} style={styles.badgeItem}>
            <View style={styles.badgeIconContainer}>
              <Text style={styles.badgeIcon}>{badge.icon}</Text>
            </View>
            <Text style={styles.badgeText}>{badge.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ProgressBadgesCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginTop: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 3,
    elevation: 1,
    backgroundColor: COLORS.white,
    borderWidth: 0.5,
    borderColor: COLORS.border,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  viewAllText: {
    color: '#000',
    fontSize: 13,
  },
  badgesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  badgeItem: {
    alignItems: 'center',
  },
  badgeIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFF0E6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  badgeIcon: {
    fontSize: 24,
  },
  badgeText: {
    fontSize: 12,
    textAlign: 'center',
  },
});
