import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  scrollBehavior() {
    return { top: 0 };
  },
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
