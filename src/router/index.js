import { createRouter, createWebHistory } from "vue-router";
import Cookies from "js-cookie";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "authLayout",
      path: "/auth",
      redirect: "/auth/login",
      component: () => import("../modules/auth/module.vue"),
      children: [
        {
          name: "Login",
          path: "login",
          component: () => import("../modules/auth/views/Login.vue"),
        },
        {
          name: "Register",
          path: "register",
          component: () => import("../modules/auth/views/Register.vue"),
        },
      ],
    },
    {
      name: "appLayout",
      path: "/",
      component: () => import("../modules/home/module.vue"),
      children: [
        {
          name: "Home",
          path: "",
          component: () => import("../modules/home/views/HomeView.vue"),
        },
        {
          name: "ProductList",
          path: ":category/products",
          component: () =>
            import("../modules/home/views/products/ProductList.vue"),
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  const publicPages = ["/auth/login", "/auth/register"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = Cookies.get("AuthData");

  if (authRequired && !loggedIn) {
    return next("/auth/login");
  }
  next();
});

export default router;
