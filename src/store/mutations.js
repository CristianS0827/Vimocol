export default {
  SET_CATEGORY_LIST(state, payload) {
    state.categoryList = payload;
  },
  SET_PRODUCT_LIST(state, payload) {
    state.productList = payload;
  },
  SET_USER(state, payload) {
    state.userData = payload;
  },
  SET_TOKEN(state, payload) {
    state.token = payload;
  },
  SET_CART_LIST(state, payload) {
    state.cartList = payload;
  },
  SET_LOGED_IN(state, payload) {
    state.isLogedIn = payload;
  }
};
