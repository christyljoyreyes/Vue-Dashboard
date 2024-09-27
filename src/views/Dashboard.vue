<template>
  <div class="dashboard">
    <div class="dashboard-top">
      <div
        v-for="content in DASHBOARD_CONTENT"
        :key="`dashboard-${content.id}`"
        class="dashboard-container"
      >
        <div class="dasboard-container-list">
          <div :class="['dashboard-container-list-item', content.class]">
            <img :src="getImageSrc(content.icon)" class="w-10" />
          </div>
          <div class="flex flex-col">
            <div class="dashboard-container-list-item__count">
              {{ content.count }}
            </div>
            <p class="dashboard-container-list-item__label">
              {{ content.title }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-6">
      <UserTable />
    </div>
  </div>
</template>

<script setup lang="ts">
import UserTable from "@/components/UserTable.vue";
import { DASHBOARD_CONTENT } from "@/utils/constant/dashboard";

const getImageSrc = (icon: string) => {
  return new URL(`../assets/images/${icon}`, import.meta.url).href;
};
</script>
