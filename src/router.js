import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "./views/Dashboard.vue";
import Table from "./views/Table.vue";
import NotFound from "./views/NotFound.vue";

const routes = [
  { path: "/dashboard", component: Dashboard },
  { path: "/table", component: Table },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
