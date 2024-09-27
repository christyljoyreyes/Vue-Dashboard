<template>
  <aside>
    <table>
      <thead>
        <tr>
          <th scope="col" class="text-left">Full Name</th>
          <th scope="col" class="text-center">Title</th>
          <th scope="col" class="text-center">Date Joined</th>
          <th scope="col" class="text-center">Status</th>
          <th scope="col" class="text-center">Role</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in USER_INFO" :key="user.id">
          <td class="text-left">{{ user.name }}</td>
          <td class="text-center">{{ user.position }}</td>
          <td class="text-center">{{ user.date }}</td>
          <td class="text-center text-green-600">{{ user.status }}</td>
          <td class="text-center">{{ user.role }}</td>
        </tr>
      </tbody>
    </table>
    <div class="table-footer dark:text-white">User Information</div>
  </aside>
</template>
<script setup lang="ts">
import { USER_INFO } from "@/utils/constant/user-table";
</script>
