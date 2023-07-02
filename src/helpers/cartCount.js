const getCartCount = ({cartItems}) => {
  console.log(cartItems);
  if (cartItems?.length) {
    let count = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    return count;
  } else {
    return 0;
  }
};

export default getCartCount;
