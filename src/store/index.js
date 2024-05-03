import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate';

import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

const store = createStore({
  state,
  getters,
  mutations,
  actions,
  plugins: [
    createPersistedState({
      key: 'cart-list',
      paths: ['cartList'],
    }),
  ],
});

export default store;
