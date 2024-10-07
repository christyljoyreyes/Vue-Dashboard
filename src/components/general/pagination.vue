<template>
  <div class="table-footer">
    <span class="table-footer-label">
      Showing {{ (current - 1) * per_item + 1 }} to
      {{ Math.min(current * per_item, total_item) }} of {{ total_item }} entries
    </span>
    <div class="pagination">
      <button
        @click="prevPage"
        :disabled="current === 1"
        class="pagination-prev"
      >
        Previous
      </button>
      <button
        @click="nextPage"
        :disabled="current >= total"
        class="pagination-next"
      >
        Next
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch, defineProps } from 'vue';

const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  itemsPerPage: {
    type: Number,
    required: true,
  },
  totalItems: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
});

const current = ref(props.currentPage);
const per_item = ref(props.itemsPerPage);
const total_item = ref(props.totalItems);
const total = ref(props.totalPages);

const nextPage = () => {
  if (current.value < total.value) {
    current.value++;
  }
};

const prevPage = () => {
  if (current.value > 1) {
    current.value--;
  }
};
watch(
  () => [
    props.currentPage,
    props.itemsPerPage,
    props.totalItems,
    props.totalPages,
  ],
  ([newVal, newItemPerPage, newTotalItems, newTotalPage]) => {
    current.value = newVal;
    per_item.value = newItemPerPage;
    total_item.value = newTotalItems;
    total.value = newTotalPage;
  }
);
</script>
