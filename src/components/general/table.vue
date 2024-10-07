<template>
  <table>
    <thead>
      <tr>
        <th
          scope="col"
          v-for="(header, idx) in tableHeader"
          :key="`header-${idx}`"
        >
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody v-if="!props.isLoading">
      <slot v-if="$slots.body" name="body"></slot>
      <tr v-else v-for="(data, idx) in tableBody" :key="`data-${idx}`">
        <td v-for="(value, key) in data" :key="key">
          {{ value }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  isLoading: Boolean,
  tableHeader: {
    type: Array,
    default: () => [],
  },
  tableBody: {
    type: Object,
    default: () => {},
  },
});
</script>
