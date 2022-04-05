import { createApp, VueElement, withDirectives } from "vue";
import App from "./App.vue";
import "./assets/body.css";
import router from "./router";

createApp(App).use(router).mount("#app");
