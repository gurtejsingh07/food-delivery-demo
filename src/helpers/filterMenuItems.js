import {store} from '../store';

const filterItems = () => {
  let {vegFilterSelected, nonVegFilterSelected, menuList} =
    store.getState().menuReducer;
  let filters = [];
  if (vegFilterSelected) {
    filters.push('veg');
  }
  if (nonVegFilterSelected) {
    filters.push('non-veg');
  }
  console.log('filers', filters);
  if (filters.length) {
    let filteredItems = menuList.filter(item =>
      filters.includes(item?.item_type),
    );
    return filteredItems;
  } else {
    return menuList;
  }
};
export default filterItems;
