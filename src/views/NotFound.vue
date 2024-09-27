<template>
  <Teleport to="body">
    <div
      class="fixed flex flex-col items-center justify-center w-full h-full top-0 left-0 mx-0 px-6 py-8 font-medium bg-slate-900"
    >
      <div class="text-3xl text-white">Error Page</div>
      <router-link to="/dashboard" class="m-4 bg-blue-200 p-4 rounded-xl">
        <button>Back to Dashboard</button>
      </router-link>
    </div>
  </Teleport>
</template>

<script setup lang="ts"></script>
