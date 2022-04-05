import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Resume from "../views/ResumePage.vue";
import PageNotFound from "../views/PageNotFound.vue";
import FormSubmitted from "../views/FormSubmitted.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },

  {
    path: "/form-submitted",
    name: "submitted",
    component: FormSubmitted,
  },

  {
    path: "/resume",
    name: "resume",
    component: Resume,
  },

  {
    path: "/:catchAll(.*)",
    name: "PageNotFound",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
