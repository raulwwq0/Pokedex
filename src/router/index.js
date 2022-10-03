import Vue from "vue";
import Router from "vue-router";
// import HomeView from "../views/HomeView.vue";
import home from "../pages/homePage.vue";
import favorites from "../pages/favortiesPage.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
    {
      path: "/favorites",
      name: "favorites",
      component: favorites,
    },
  ],
});
