<template>
  <div class="flex h-screen bg-gray-200 font-roboto">
    <div class="flex h-full">
      <Sidebar :showSideBar="showSideBar" />
    </div>
    <div
      class="flex-1 flex flex-col overflow-hidden bg-white dark:bg-slate-700 h-full"
    >
      <Header
        @toggleDarkMode="toggleDarkMode"
        @showSideBar="toggleSideBar"
        :isDarkMode="isDarkMode"
      />
      <main
        class="flex-1 overflow-x-hidden overflow-y-auto dark:bg-slate-700 h-full"
      >
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";

const isDarkMode = ref(false);
const showSideBar = ref(true);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList[isDarkMode.value ? "add" : "remove"](
    "dark"
  );
};

const toggleSideBar = () => {
  showSideBar.value = !showSideBar.value;
};
</script>
