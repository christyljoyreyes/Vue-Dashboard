<template>
  <header>
    <nav>
      <button @click="$emit('showSideBar')" class="menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div class="tab">
        <div class="flex items-center space-x-6 rtl:space-x-reverse">
          <button @click="$emit('toggleDarkMode')" class="mode">
            <span v-if="!props.isDarkMode">🌙</span>
            <span v-else>☀️</span>
          </button>
          <div class="avatar">
            <img src="../assets/images/avatar.jpg" alt="User Avatar" />
            <span class="avatar-active"></span>
            <div class="info">
              <div class="info__name">Christyl Joy Reyes</div>
              <div class="info__date">Joined in September 25, 2024</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script setup lang="ts">
const props = defineProps({
  isDarkMode: {
    type: Boolean,
    default: false,
  },
});
</script>
