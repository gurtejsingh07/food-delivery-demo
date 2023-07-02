import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {moderateScale} from '../helpers/ResponsiveFonts';
import constants from '../constants';
class BorderedTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let {
      placeholder,
      keyboardType,
      textValue,
      isEditable,
      fieldTitle,
      onChangeText,
    } = this.props;

    const backgroundColor = constants.Colors.White;

    return (
      <View style={styles.parentView} key={fieldTitle}>
        <TextInput
          keyboardType={keyboardType}
          backgroundColor={backgroundColor}
          editable={isEditable}
          placeholder={placeholder}
          onChangeText={text => onChangeText(text)}
          autoCapitalize="none"
          style={styles.textInput}
          value={textValue}
          placeholderTextColor={constants.Colors.Black}
        />
      </View>
    );
  }
}

export default BorderedTextInput;
const styles = StyleSheet.create({
  parentView: {
    marginVertical: moderateScale(15),
    width: '95%',
  },
  textInput: {
    fontSize: moderateScale(13),
    color: constants.Colors.Black,
    height: moderateScale(45),
    borderColor: constants.Colors.Black,
    borderWidth: 2,
    paddingLeft: moderateScale(15),
    borderRadius: 8,
  },
  fieldName: {
    color: constants.Colors.Black,
    marginBottom: moderateScale(8),
    fontSize: moderateScale(14),
  },
});
