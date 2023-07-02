import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {moderateScale} from '../helpers/ResponsiveFonts';
import getCartCount from '../helpers/cartCount';
import {useSelector} from 'react-redux';
import constants from '../constants';
const ViewCart = ({navigation}) => {
  const cartItems = useSelector(state => state.cartReducer.cartItems);
  return (
    <View style={styles.wrapper}>
      <Text>{getCartCount({cartItems})} Items</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Cart')}>
        <Text style={styles.text}>View Cart </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: moderateScale(50),
    flexDirection: 'row',
    marginTop: moderateScale(10),
    bottom: 0,
    alignItems: 'center',
    borderColor: 'black',
    borderTopWidth: moderateScale(1),
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20),
  },
  button: {
    backgroundColor: 'black',
    width: moderateScale(100),
    height: moderateScale(30),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(10),
    margin: moderateScale(0.1),
  },
  text: {color: constants.Colors.White, fontWeight: 'bold'},
});

export default ViewCart;
