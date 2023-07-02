import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {moderateScale} from '../helpers/ResponsiveFonts';
const NoItemFound = ({text}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{text ? text : 'No item found'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: moderateScale(20),
  },
});

export default NoItemFound;
