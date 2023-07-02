import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList, SafeAreaView, StatusBar} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import ListCard from '../components/ListCard';
import ViewCart from '../elements/ViewCart';
import NoItemFound from '../elements/NoItemFound';
import BorderedTextInput from '../elements/BorderedTextInput';
import {updateFilteredItems} from '../actions/searchModal';
import {moderateScale} from '../helpers/ResponsiveFonts';
export default function SearchModal({navigation}) {
  const searchModalReducer = useSelector(state => state.searchModalReducer);
  const {filteredItems} = searchModalReducer;
  const [searchText, setText] = useState('');
  let items = useSelector(state => state?.menuReducer?.filteredMenuList);
  const cartItems = useSelector(state => state.cartReducer.cartItems);
  const dispatch = useDispatch();
  useEffect(() => {
    let text = searchText;
    dispatch(updateFilteredItems({text, items}));
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <BorderedTextInput
        placeholder={'Search Food'}
        textValue={searchText}
        isEditable
        fieldTitle={'Search Food'}
        onChangeText={text => {
          setText(text);
          dispatch(
            updateFilteredItems({
              text,
              items,
            }),
          );
        }}
      />

      <FlatList
        style={styles.flatListWrapper}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={filteredItems}
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
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  flatListWrapper: {flex: 1, width: '100%'},
  text: {
    paddingLeft: moderateScale(10),
    fontSize: moderateScale(12),
    right: 0,
  },
  filterWrapper: {flexDirection: 'row'},
});
