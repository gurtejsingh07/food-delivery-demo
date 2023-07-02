import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {moderateScale} from '../helpers/ResponsiveFonts';
class ShadowCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let {style, children} = this.props;
    return <View style={[styles.containerStyle, style]}>{children}</View>;
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    borderRadius: moderateScale(10),
    borderColor: 'transparent',
    shadowColor: 'black',
    shadowOffset: {width: moderateScale(4), height: moderateScale(4)},
    shadowOpacity: moderateScale(0.13),
    shadowRadius: moderateScale(1),
    elevation: moderateScale(3),
    marginHorizontal: moderateScale(10),
    marginVertical: moderateScale(10),
    backgroundColor: 'white',
    paddingHorizontal: moderateScale(13.5),
  },
});

export default ShadowCard;
