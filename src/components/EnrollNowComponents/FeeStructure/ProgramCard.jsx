import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import COLORS from '../../../constants/color';

const ProgramCard = ({
  packageName,
  subtitle,
  price,
  features,
  isSelected,
  onSelect,
}) => {
  return (
    <TouchableOpacity
      style={[styles.card, isSelected && styles.selectedCard]}
      onPress={onSelect}>
      <View style={styles.cardHeader}>
        <Text style={styles.packageName}>{packageName}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      <View style={styles.priceContainer}>
        <Text style={styles.currencySymbol}>₹</Text>
        <Text style={styles.price}>{price}</Text>
        <Text style={styles.perMonth}>/per month</Text>
      </View>

      <View style={styles.featuresContainer}>
        {features.map((feature, index) => (
          <View key={index} style={styles.featureRow}>
            <View
              style={[styles.featureIcon, {backgroundColor: feature.color}]}>
              <Text style={styles.checkmark}>✓</Text>
            </View>
            <Text style={styles.featureText}>{feature.text}</Text>
          </View>
        ))}
      </View>

      {isSelected && (
        <View style={styles.selectedIndicator}>
          <Text style={styles.selectedText}>Selected</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    backgroundColor: COLORS.white,
  },
  selectedCard: {
    borderColor: COLORS.primary,
    borderWidth: 2,
  },
  cardHeader: {
    marginBottom: 12,
  },
  packageName: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.black,
    marginBottom: 4,
    fontFamily: 'Poppins-Bold',
  },
  subtitle: {
    fontSize: 12,
    color: COLORS.gray,
    fontFamily: 'Poppins-Regular',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 16,
  },
  currencySymbol: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.black,
    fontFamily: 'Poppins-Bold',
  },
  price: {
    fontSize: 24,
    fontWeight: '600',
    color: COLORS.black,
    marginRight: 4,
    fontFamily: 'Poppins-Bold',
  },
  perMonth: {
    fontSize: 12,
    color: COLORS.gray,
    fontFamily: 'Poppins-Regular',
  },
  featuresContainer: {
    marginBottom: 8,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  featureIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  checkmark: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  featureText: {
    fontSize: 12,
    color: COLORS.black,
    fontFamily: 'Poppins-Regular',
  },
  selectedIndicator: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  selectedText: {
    color: COLORS.white,
    fontSize: 10,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
  },
});

export default ProgramCard;
