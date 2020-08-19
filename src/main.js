import Vue from "vue";
import vueHeadful from "vue-headful";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

Vue.component("vue-headful", vueHeadful);

Vue.filter("seconds", (seconds) => {
  const dateObj = new Date(seconds * 1000);
  const hour = dateObj
    .getHours()
    .toString()
    .padStart(2, "0");
  const mins = dateObj
    .getMinutes()
    .toString()
    .padStart(2, "0");
  const secs = dateObj
    .getSeconds()
    .toString()
    .padStart(2, "0");

  return `${hour}:${mins}:${secs}`;
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
