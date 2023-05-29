import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

const myAxios = axios.create({
  baseURL: "http://localhost:3003",
  responseType: "json",
  headers: {},
  timeout: 10000,
});

myAxios.interceptors.request.use((config) => {
  const { method, baseURL, url } = config;
  const fullUrl = `${baseURL}${url}`;
  console.log(`🚀 ${method?.toUpperCase()}: ${fullUrl} Request`, config);
  return config;
});

myAxios.interceptors.response.use((response) => {
  const { method, baseURL, url } = response.config;
  const { status } = response;
  const fullUrl = `${baseURL}${url}`;
  console.log(`📬 ${method?.toUpperCase()}: ${fullUrl} Response(${status})`, response);
  return response;
});

Vue.prototype.axios = myAxios;

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
