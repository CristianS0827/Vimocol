import Cookies from "js-cookie";

export default {
  categoryList: [],
  productList: [],
  userData: {},
  token: Cookies.get("AuthData") || null,
  isLogedIn: false,
  cartList: [],
  userMail: Cookies.get('userMail')||'',
};
