import React from 'react';
import {useDispatch} from 'react-redux';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {moderateScale} from '../helpers/ResponsiveFonts';
import {AddToCart} from '../actions/cart';
import constants from '../constants';
const AddCartButton = ({item}) => {
  let dispatch = useDispatch();
  return (
    <View style={styles.wrapper}>
      <Pressable
        style={styles.button}
        onPress={() => dispatch(AddToCart(item))}>
        <Text style={styles.text}>Add</Text>
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
  button: {
    backgroundColor: constants.Colors.Black,
    width: moderateScale(60),
    height: moderateScale(30),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(10),
    margin: moderateScale(0.1),
  },
  text: {color: constants.Colors.White, fontWeight: 'bold'},
});

export default AddCartButton;
