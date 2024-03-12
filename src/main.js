import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import main from "./components/main.vue";

const routes = [
  {
    path: "/main",
    name: "main",
    component: main,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
