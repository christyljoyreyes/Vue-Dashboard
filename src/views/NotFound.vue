<template>
  <Teleport to="body">
    <div class="error-page">
      <div class="error-page-title">Error Page!</div>
      <router-link to="/dashboard" class="error-page-link">
        <svg
          class="h-6 w-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
          />
        </svg>
        <button class="error-page-btn">Back to Dashboard</button>
      </router-link>
    </div>
  </Teleport>
</template>

<script setup lang="ts"></script>
