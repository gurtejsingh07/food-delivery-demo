import {
  GET_ITEMS,
  TOGGLE_VEG_FILTER,
  TOGGLE_NON_VEG_FILTER,
  FILTER_ITEMS,
} from './menuActions';
import filterItems from '../../helpers/filterMenuItems';
export const getMenuItems =
  ({items}) =>
  dispatch => {
    dispatch({type: GET_ITEMS, payload: items});
    let Items = filterItems();
    dispatch(filterMenuItems({Items}));
  };
export const toggleVegFilter =
  ({vegFilterSelected}) =>
  dispatch => {
    dispatch({type: TOGGLE_VEG_FILTER, payload: !vegFilterSelected});
    let Items = filterItems();
    dispatch(filterMenuItems({Items}));
  };
export const toggleNonVegFilter =
  ({nonVegFilterSelected}) =>
  dispatch => {
    dispatch({type: TOGGLE_NON_VEG_FILTER, payload: !nonVegFilterSelected});
    let Items = filterItems();
    dispatch(filterMenuItems({Items}));
  };
export const filterMenuItems =
  ({Items}) =>
  dispatch => {
    dispatch({type: FILTER_ITEMS, payload: Items});
  };
