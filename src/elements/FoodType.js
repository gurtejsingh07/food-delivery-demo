import React from 'react';
import {View, StyleSheet} from 'react-native';
const FoodType = ({type}) => {
  const color = type === 'veg' ? 'green' : 'red';
  return (
    <View style={[styles.wrapper, {borderColor: color}]}>
      <View style={[styles.innerCircle, {backgroundColor: color}]} />
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    width: 15,
    height: 15,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    width: 10,
    height: 10,
    borderRadius: 10,
  },
});
export default FoodType;
