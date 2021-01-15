import Vue from "vue";
import "./plugins/fontawesome";
import "./plugins/baberrage"
import App from "./App.vue";
import router from "./router";
import "./assets/SmartisanCompactRegular/Smartisan_Compact-Regular.css";
import "./assets/NerdFont/nerd-fonts-generated.css"
import 'animate.css'

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
