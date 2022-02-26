import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import CountryDetail from "../views/CountryDetail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/countrydetail/:id",
    name: "CountryDetail",
    component: CountryDetail,
    props: true,
  },
  {
    path: "/:catchall(.*)",
    name: Home,
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
