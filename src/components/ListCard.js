import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import constants from '../constants';
import {moderateScale} from '../helpers/ResponsiveFonts';
import CartButton from '../elements/cartButton';
import AddCartButton from '../elements/AddCartButton';
import FoodType from '../elements/FoodType';
import {useSelector} from 'react-redux';
import CheckCountValue from '../helpers/checkCountValue';
const ListCard = ({navigation, item, viewItem}) => {
  const cartItems = useSelector(state => state.cartReducer.cartItems);
  const count = CheckCountValue({item, cartItems});
  let Thumbnail = item.image
    ? {uri: item.image}
    : constants.Images.Common.noImage;
  return (
    <View style={styles.wrapper}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={Thumbnail} />
      </View>
      <View style={styles.leftViewWrapper}>
        <View style={styles.textWrapper}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.subtitle}>{item.category}</Text>
          <Text style={styles.subtitle}>${item.price}</Text>
          <Text style={styles.description}>{item.description}</Text>
          {count ? (
            <CartButton item={item} count={count} navigation={navigation} />
          ) : (
            <AddCartButton item={item} />
          )}
        </View>
        <FoodType type={item.item_type} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: moderateScale(15),
    borderColor: 'black',
    borderWidth: moderateScale(1),
    padding: moderateScale(10),
    margin: moderateScale(10),
  },
  imageWrapper: {
    justifyContent: 'flex-start',
    flex: 0.2,
  },
  textWrapper: {
    flex: 0.8,
    justifyContent: 'flex-start',
  },
  image: {
    width: moderateScale(50),
    height: moderateScale(50),
  },
  title: {
    fontSize: moderateScale(15),
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: moderateScale(16),
    color: '#303540',
  },
  description: {
    fontSize: moderateScale(11),
  },
  leftViewWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 0.8,
  },
});

export default ListCard;
