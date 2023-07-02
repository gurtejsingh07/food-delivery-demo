import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import {moderateScale} from '../helpers/ResponsiveFonts';
import constants from '../constants';
import FoodType from '../elements/FoodType';
const Filters = ({selected, type, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.filterWrapper,
        {borderColor: selected ? constants.Colors.Red : constants.Colors.Black},
      ]}>
      <View style={styles.wrapperFoodType}>
        <Text style={{paddingHorizontal: moderateScale(5)}}>{type}</Text>
        <FoodType type={type} />
      </View>

      {selected ? <Text style={styles.text}>✕</Text> : null}
    </Pressable>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
  wrapperFoodType: {flexDirection: 'row'},
  filterWrapper: {
    flexDirection: 'row',
    height: moderateScale(30),
    borderColor: constants.Colors.Black,
    borderWidth: moderateScale(1),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(5),
    marginHorizontal: moderateScale(10),
    borderRadius: moderateScale(5),
  },
  text: {
    paddingLeft: moderateScale(10),
    fontSize: moderateScale(12),
    right: 0,
  },
});
export default Filters;
