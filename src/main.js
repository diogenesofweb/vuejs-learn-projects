import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// export const bus = new Vue();

// Vue.filter("uppercase", function(val) {
//   return val.toUpperCase();
// });
Vue.filter("snippet", function(val) {
  return val.slice(0, 100) + " ...";
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
