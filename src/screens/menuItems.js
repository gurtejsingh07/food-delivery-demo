import React, {useEffect} from 'react';
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  getMenuItems,
  toggleNonVegFilter,
  toggleVegFilter,
} from '../actions/menu';
import ListCard from '../components/ListCard';
import ViewCart from '../elements/ViewCart';
import {updateTaxDetails} from '../actions/cart';
import SearchBarView from '../elements/SearchBarView';
import NoItemFound from '../elements/NoItemFound';
import {Items} from '../constants/APIs';
import Filters from '../components/filters';
import {moderateScale} from '../helpers/ResponsiveFonts';

export default function Menu({navigation}) {
  let dispatch = useDispatch();
  let menuReducer = useSelector(state => state?.menuReducer);
  let {menuList, vegFilterSelected, nonVegFilterSelected, filteredMenuList} =
    menuReducer;
  const cartItems = useSelector(state => state.cartReducer.cartItems);
  useEffect(() => {
    fetch(Items)
      .then(res => res.json())
      .then(formatedRes => {
        let items = formatedRes?.items;
        dispatch(getMenuItems({items}));
        dispatch(updateTaxDetails(formatedRes?.tax_applicable));
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <SearchBarView navigation={navigation} />
      <View style={styles.filterWrapper}>
        <Filters
          selected={vegFilterSelected}
          type={'veg'}
          onPress={() => {
            dispatch(
              toggleVegFilter({
                vegFilterSelected,
              }),
            );
          }}
        />
        <Filters
          selected={nonVegFilterSelected}
          type={'non-veg'}
          onPress={() => {
            dispatch(
              toggleNonVegFilter({
                nonVegFilterSelected,
              }),
            );
          }}
        />
      </View>
      <FlatList
        style={styles.flatListWrapper}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={filteredMenuList}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => (
          <ListCard navigation={navigation} item={item} key={item.id} />
        )}
        ListEmptyComponent={<NoItemFound />}
      />
      {cartItems?.length ? <ViewCart navigation={navigation} /> : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },
  flatListWrapper: {flex: 1, width: '100%'},
  text: {
    paddingLeft: moderateScale(10),
    fontSize: moderateScale(12),
    right: 0,
  },
  filterWrapper: {flexDirection: 'row', marginTop: moderateScale(10)},
});
