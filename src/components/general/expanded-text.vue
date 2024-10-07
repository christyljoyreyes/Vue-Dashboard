<template>
  <div v-if="!expandedPosts.includes(props.id)">
    <span>{{ props.tableData.slice(0, 100) }}...</span
    ><button @click="toggleReadMore(props.id)">Read more</button>
  </div>
  <div v-else>
    <span> {{ props.tableData }}</span>
    <button @click="toggleReadMore(props.id)">Show less</button>
  </div>
</template>
<script setup lang="ts">
import { defineProps, ref } from 'vue';

const expandedPosts = ref<number[]>([]);
const props = defineProps({
  id: {
    type: Number,
    default: -1,
  },
  tableData: {
    type: String,
    default: '',
  },
});

const toggleReadMore = (idx: number) => {
  if (expandedPosts.value.includes(idx)) {
    expandedPosts.value = expandedPosts.value.filter((id) => id !== idx);
  } else {
    expandedPosts.value.push(idx);
  }
};
</script>
