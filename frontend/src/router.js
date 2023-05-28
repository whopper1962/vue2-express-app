import Vue from "vue";
import Router from "vue-router";
import HomeViewVue from "./views/HomeView.vue";

Vue.use(Router);

const routes = [
  {
    path: "/home",
    name: "HomeView",
    component: HomeViewVue,
  },
];

export default new Router({
  mode: "history",
  routes,
});
