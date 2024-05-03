export default {
  IS_AUTHENTICATED(state) {
    return !!state.token;
  },
  CART_ITEMS(state) {
    return state.cartList;
  },
};
