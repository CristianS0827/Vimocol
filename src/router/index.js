import { createRouter, createWebHistory } from "vue-router";

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
      ],
    },
  ],
});

export default router;
