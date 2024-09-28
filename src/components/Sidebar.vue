<template>
  <aside v-if="props.showSideBar" class="sidebar">
    <router-link to="/dashboard" class="sidebar-link">
      <div class="sidebar-link-container">
        <img
          src="../assets/images/logo.png"
          class="sidebar-link-container__img"
          alt="Flowbite Logo"
        />
        <span class="sidebar-link-container__text">Dashboard</span>
      </div>
    </router-link>
    <nav class="sidebar-nav">
      <div class="sidebar-nav-list">
        <router-link
          :to="route.path"
          v-for="(route, idx) in routerName"
          :key="`router-link-${idx}`"
          exact-active-class="active"
          active-class="active"
          class="sidebar-nav-list-link"
        >
          <component
            :is="route.svg"
            :class="['sidebar-nav-svg', isActiveRoute(route.path).icon]"
          />
          <span :class="['sidebar-nav-text', isActiveRoute(route.path).text]">{{
            route.name
          }}</span>
        </router-link>
      </div>
    </nav>
  </aside>
</template>
<script setup lang="ts">
import DashboardSvg from "@/components/svg/dashboard.vue";
import TableSvg from "@/components/svg/table.vue";
import { useRoute } from "vue-router";

const route = useRoute();

const props = defineProps({
  showSideBar: {
    type: Boolean,
    default: false,
  },
});

const routerName = [
  {
    name: "Dashboard",
    path: "/dashboard",
    svg: DashboardSvg,
  },
  { name: "Table", path: "/table", svg: TableSvg },
];

const isActiveRoute = (path: string) => {
  return route.path === path
    ? {
        icon: "text-white dark:text-white",
        text: "text-white dark:text-gray",
      }
    : { icon: "text-blue-700 dark:text-white" };
};
</script>
