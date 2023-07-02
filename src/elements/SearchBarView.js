import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale} from '../helpers/ResponsiveFonts';
import constants from '../constants';
const SearchBarView = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
      <Pressable
        style={styles.textInput}
        onPress={() => navigation.navigate('SearchBar')}>
        <Text style={styles.text}> Search food</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    width: '95%',
    flexDirection: 'row',
    borderRadius: moderateScale(5),
    borderColor: constants.Colors.Black,
    borderWidth: moderateScale(1),
    height: moderateScale(50),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(10),
  },
  text: {
    paddingLeft: moderateScale(10),
    fontSize: moderateScale(18),
  },
});

export default SearchBarView;
