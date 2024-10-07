<template>
  <aside>
    <Table :tableHeader="tableHeader" :tableBody="USER_INFO" />
    <div class="table-footer dark:text-white">User Information</div>
  </aside>
</template>
<script setup lang="ts">
import { USER_INFO } from '@/utils/constant/user-table';
import Table from '@/components/general/table.vue';
import { reactive } from 'vue';

const tableHeader = reactive([
  'ID',
  'Full Name',
  'Title',
  'Date Joined',
  'Status',
  'Role',
]);
</script>
