import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path:"/",
    redirect:"/main"
  },
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/signin",
    name: "signin",
    component: () => import("../views/Signin.vue")
  },
  {
    path: "/main",
    component: Home,
    children: [
      {
        path: "",
        name: "main",
        component: () => import("../components/Main/Main.vue")
      }
    ]
  },
  {
    path: "/details",
    component: Home,
    children: [
      {
        path: "",
        name: "details",
        component: () => import("../views/Details.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
