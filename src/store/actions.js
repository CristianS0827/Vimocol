import axios from "axios";
import Cookies from "js-cookie";
import { Toaster, toast } from "vue-sonner";

export default {
  async GET_CATEGORY_LIST({ commit }) {
    try {
      const response = await axios.get("http://127.0.0.1:8000/categories/all/");
      commit("SET_CATEGORY_LIST", response.data);
    } catch (error) {
      console.error(error);
    }
  },
  async GET_PRODUCT_LIST({ commit }, { categorySlug }) {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/products/${categorySlug}/`
      );
      commit("SET_PRODUCT_LIST", response.data);
    } catch (error) {
      console.error(error);
    }
  },
  async LOGIN_AUTH({ commit }, { payload }) {
    try {
      const response = await axios({
        method: "POST",
        url: "http://127.0.0.1:8000/accounts/login/",
        data: {
          email: payload.email,
          password: payload.password,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        commit("SET_USER_MAIL", response.data.user.email);
        commit("SET_TOKEN", response.data.token);
        commit("SET_LOGED_IN", true);
        Cookies.set("AuthData", response.data.token, { expires: 1 });
        commit("SET_USER", response.data);
        return { success: true, data: response.data };
      }
    } catch (error) {
      toast.error("Credenciales incorrectas");
      throw error;
    }
  },
  async REGISTER_AUTH({ commit }, { payload }) {
    try {
      const response = await axios({
        method: "POST",
        url: "http://127.0.0.1:8000/accounts/%20register/",
        data: {
          first_name: payload.first_name,
          last_name: payload.last_name,
          email: payload.email,
          password: payload.password,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.data.token) {
        commit("SET_TOKEN", response.data.token);
        Cookies.set("AuthData", response.data.token, { expires: 1 });
        commit("SET_USER", response.data);
        commit("SET_LOGED_IN", true);
        toast.success("Usuario registrado correctamente");
        return { success: true, data: response.data };
      }
    } catch (error) {
      toast.error("Error al registrar el usuario");
      throw error;
    }
  },

  async ADD_TO_CART({ commit }, productInfo) {
    const product = productInfo.data;
    try {
      let cart = JSON.parse(localStorage.getItem("cart"));
      if (!Array.isArray(cart)) {
        cart = [];
      }
      const existingProductIndex = cart.findIndex(
        (item) => item.id === product.id
      );

      if (existingProductIndex >= 0) {
        cart[existingProductIndex].quantity += 1;
      } else {
        const newProduct = { ...product, quantity: 1 };
        cart.push(newProduct);
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      commit("SET_CART_LIST", cart);
      toast.success("Producto agregado al carrito");
    } catch (error) {
      toast.error("Error al agregar el producto");
      console.error("Error al agregar el producto", error);
    }
  },

  async REMOVE_FROM_CART({ commit }, product) {
    const productId = product.data;
    try {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      const productIndex = cart.findIndex((item) => item.id === productId);
      if (productIndex >= 0) {
        if (cart[productIndex].quantity > 1) {
          cart[productIndex].quantity -= 1;
        } else {
          cart = cart.filter((item) => item.id !== productId);
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        commit("SET_CART_LIST", cart);
      } else {
        toast.error("Producto no encontrado en el carrito");
      }
    } catch (error) {
      toast.error("Error al remover el producto del carrito");
      console.error("Error al remover el producto del carrito", error);
    }
  },
  async LOGOUT_AUTH({ commit }) {
    commit("SET_TOKEN", null);
    Cookies.remove("AuthData");
    commit("SET_LOGED_IN", false);
    Cookies.remove("userMail");
    commit("SET_USER", {});
  },
  async MAKE_QUOTATION({ commit, state }) {
    const productsString = localStorage.getItem("cart");
    const userEmail = state.userMail;
    if (productsString && userEmail) {
      const products = JSON.parse(productsString);
      const productIds = products.map((product) => product.id);

      try {
        const response = await axios({
          method: "POST",
          url: "http://127.0.0.1:8000/cart/quotation/",
          data: {
            product_ids: productIds,
            user_email: userEmail,
          },
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${state.token}`,
          },
        });
        toast.info(
          "Cotización realizada correctamente, revisa tu correo electrónico"
        );
        localStorage.removeItem("cart");
        localStorage.removeItem("cartList");
        commit("SET_CART_LIST", []);
      } catch (error) {
        console.error("Error while making quotation:", error);
      }
    } else {
      toast.error(
        "No hay productos en el carrito o correo electrónico de usuario para enviar la cotización"
      );
      console.log("No products in cart or user email to send for quotation");
    }
  },
  async addProductToCart() {
    try {
      const response = await axios({
        method: "POST",
        url: "http://127.0.0.1:8000/cart/quotation/",
        data: {
          product_id: 1,
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  },
};
