const getSubTotal = ({cartItems}) => {
  if (cartItems?.length) {
    let subtotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    return subtotal;
  } else {
    return 0;
  }
};

export default getSubTotal;
