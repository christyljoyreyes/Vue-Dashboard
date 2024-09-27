import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "./views/Dashboard.vue";
import Table from "./views/Table.vue";
import NotFound from "./views/NotFound.vue";

const RouteName = {
  Dashboard: "Dashboard",
  Table: "Table",
  NotFound: "NotFound",
};

const routes = [
  {
    path: "/",
    redirect: { name: RouteName.Dashboard },
    children: [
      {
        path: "table",
        name: RouteName.Table,
        component: Table,
      },
      {
        path: "dashboard",
        name: RouteName.Dashboard,
        component: Dashboard,
      },
      {
        path: "404",
        name: RouteName.NotFound,
        component: NotFound,
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: { name: RouteName.NotFound },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
