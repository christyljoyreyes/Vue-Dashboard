import { createRouter, createWebHistory } from "vue-router";

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
        component: () => import("@/views/Table.vue"),
      },
      {
        path: "dashboard",
        name: RouteName.Dashboard,
        component: () => import("@/views/Dashboard.vue"),
      },
      {
        path: "404",
        name: RouteName.NotFound,
        component: () => import("@/views/NotFound.vue"),
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
