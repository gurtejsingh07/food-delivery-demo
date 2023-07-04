import React from 'react';
import {useDispatch} from 'react-redux';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {AddQuantity, RemoveFromCart, SubtractQuantity} from '../actions/cart';
import {moderateScale} from '../helpers/ResponsiveFonts';
import constants from '../constants';
const CartButton = ({item, count, navigation}) => {
  let dispatch = useDispatch();
  return (
    <View style={styles.wrapper}>
      <Pressable
        style={styles.buttonLeft}
        onPress={() => {
          if (count > 1) {
            dispatch(SubtractQuantity(item));
          } else {
            dispatch(RemoveFromCart({item, navigation}));
          }
        }}>
        <Text style={styles.text}>-</Text>
      </Pressable>
      <View style={styles.cartValue}>
        <Text style={styles.text}>{count}</Text>
      </View>

      <Pressable
        style={styles.buttonRight}
        onPress={() => {
          dispatch(AddQuantity(item));
        }}>
        <Text style={styles.text}>+</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    marginTop: moderateScale(10),
  },
  buttonRight: {
    backgroundColor: 'black',
    width: moderateScale(30),
    height: moderateScale(30),
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: moderateScale(20),
    borderBottomRightRadius: moderateScale(20),
    margin: moderateScale(0.5),
  },
  cartValue: {
    backgroundColor: constants.Colors.Black,
    width: moderateScale(30),
    height: moderateScale(30),
    alignItems: 'center',
    justifyContent: 'center',
    margin: moderateScale(0.5),
  },
  buttonLeft: {
    backgroundColor: constants.Colors.Black,
    width: moderateScale(30),
    height: moderateScale(30),
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: moderateScale(20),
    borderBottomLeftRadius: moderateScale(20),
    margin: moderateScale(0.5),
  },
  text: {color: constants.Colors.White, fontWeight: 'bold'},
});

export default CartButton;
