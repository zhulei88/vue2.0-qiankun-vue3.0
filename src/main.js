import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import { registerMicroApps, start } from "qiankun";
registerMicroApps([
  {
    name: "vue3",
    entry: "//localhost:7001", // 运行微应用的地址
    container: "#container", // 展示的DOM容器 id
    activeRule: "/app-vue3", // 跳转路径
  },
]);
// 启动 qiankun
start();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
