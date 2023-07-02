import React from 'react';
import {StyleSheet, Dimensions, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import ListCard from '../components/ListCard';
import {SafeAreaView} from 'react-native-safe-area-context';
import BillDetails from '../components/BillDetails';
import NoItemFound from '../elements/NoItemFound';
const {width} = Dimensions.get('window');
export default function Cart({navigation}) {
  const cartItems = useSelector(state => state.cartReducer.cartItems);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.flatListContainer}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={cartItems}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => (
          <ListCard navigation={navigation} item={item} key={item.id} />
        )}
        ListEmptyComponent={<NoItemFound />}
      />
      {cartItems?.length ? <BillDetails cartItems={cartItems} /> : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },
  flatListContainer: {
    flex: 1,
    width: '100%',
  },
  todoItem: {
    justifyContent: 'space-between',
    alignContent: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    width: width - 20,
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 5,
    paddingRight: 5,
  },
  text: {
    color: '#101010',
    fontSize: 20,
    fontWeight: 'bold',
  },
  todoItemText: {
    lineHeight: 22,
    fontSize: 17,
  },
  buttonContainer: {
    backgroundColor: '#222',
    borderRadius: 5,
    padding: 10,
    margin: 20,
  },
  buttonText: {
    fontSize: 15,
    color: '#fff',
  },
});
