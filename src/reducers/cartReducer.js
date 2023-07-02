import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_QUANTITY,
  SUBTRACT_QUANTITY,
  EMPTY_CART,
  UPDATE_TAX_DETAILS,
} from '../actions/cart/cartActions';

const initialState = {
  cartItems: [],
  tax_applicable: {},
};
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem?.id !== action?.payload,
        ),
      };
    case ADD_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map(cartItem =>
          cartItem?.id === action?.payload
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem,
        ),
      };
    case SUBTRACT_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map(cartItem =>
          cartItem?.id === action?.payload
            ? {
                ...cartItem,
                quantity: cartItem.quantity !== 1 ? cartItem.quantity - 1 : 1,
              }
            : cartItem,
        ),
      };
    case EMPTY_CART:
      return {
        ...state,
        cartItems: [],
      };
    case UPDATE_TAX_DETAILS:
      return {
        ...state,
        tax_applicable: action.payload,
      };
    default:
      return state;
  }
}
