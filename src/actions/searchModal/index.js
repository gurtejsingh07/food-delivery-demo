import {UPDATED_FILTERED_ITEMS} from './searchActions';

export const updateFilteredItems =
  ({text, items}) =>
  dispatch => {
    if (text && text !== '') {
      const filteredItems = items?.filter(
        item =>
          item?.category?.toLowerCase().includes(text?.toLowerCase()) ||
          item?.name?.toLowerCase().includes(text?.toLowerCase()),
      );
      dispatch({type: UPDATED_FILTERED_ITEMS, payload: filteredItems});
    } else {
      dispatch({type: UPDATED_FILTERED_ITEMS, payload: items});
    }
  };
