import axios from "axios";

export default {
  async GET_CATEGORY_LIST({ commit }) {
    try {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/categories"
      );
      commit("SET_CATEGORY_LIST", response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  },
};
