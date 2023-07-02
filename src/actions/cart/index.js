import {
  ADD_TO_CART,
  ADD_QUANTITY,
  SUBTRACT_QUANTITY,
  REMOVE_FROM_CART,
  UPDATE_TAX_DETAILS,
} from './cartActions';
export const AddToCart = item => dispatch => {
  let itemWithQuantity = {...item, quantity: 1};
  dispatch({type: ADD_TO_CART, payload: itemWithQuantity});
};
export const AddQuantity = item => dispatch => {
  dispatch({type: ADD_QUANTITY, payload: item?.id});
};
export const SubtractQuantity = item => dispatch => {
  let {id} = item;
  dispatch({type: SUBTRACT_QUANTITY, payload: id});
};
export const RemoveFromCart =
  ({item}) =>
  dispatch => {
    let {id} = item;
    dispatch({type: REMOVE_FROM_CART, payload: id});
  };
export const updateTaxDetails = payload => dispatch => {
  dispatch({type: UPDATE_TAX_DETAILS, payload});
};
