const CheckCountValue = ({item, cartItems}) => {
  if (cartItems?.length) {
    const CartItemsWithId = cartItems.filter(
      cartItem => cartItem?.id == item?.id,
    );
    if (CartItemsWithId.length) {
      return CartItemsWithId[0].quantity;
    } else {
      return 0;
    }
  }
  return 0;
};

export default CheckCountValue;
