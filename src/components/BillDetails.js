import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {moderateScale} from '../helpers/ResponsiveFonts';
import getSubTotal from '../helpers/subtotal';
import {useSelector} from 'react-redux';

const BillDetails = ({cartItems}) => {
  const tax_applicable = useSelector(state => state.cartReducer.tax_applicable);
  const subtotal = getSubTotal({cartItems});
  const tax = (subtotal * tax_applicable?.value) / 100;

  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading}>Bill Details</Text>
      <View style={styles.textWrapper}>
        <Text style={styles.item}>Items subtotal:</Text>
        <Text style={styles.item}>${subtotal}</Text>
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.item}>Tax:</Text>
        <Text style={styles.item}>${tax}</Text>
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.grandTotal}>Grand Total:</Text>
        <Text style={styles.grandTotal}>${subtotal + tax}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    marginBottom: moderateScale(15),
    borderColor: 'black',
    borderWidth: moderateScale(1),
    padding: moderateScale(10),
    margin: moderateScale(10),
    width: '95%',
  },
  heading: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
  },
  item: {
    fontSize: moderateScale(15),
  },
  textWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  grandTotal: {
    fontSize: moderateScale(17),
    fontWeight: 'bold',
  },
});
export default BillDetails;
