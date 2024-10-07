<template>
  <aside class="post-table-container">
    <input v-model="searchQuery" type="text" placeholder="Search..." />
    <Table :isLoading="isLoading" :tableHeader="tableHeader">
      <template #body>
        <tr v-for="post in paginatedData" :key="post.id">
          <td @click="selectPost(post.id)">
            {{ post.title }}
          </td>
          <td>
            <ExpandedText :id="post.id" :tableData="post.body" />
          </td>
        </tr>
      </template>
    </Table>
    <div v-if="!isLoading && isEmpty(paginatedData)" class="table-empty">
      No Data Found
    </div>
    <Loader v-if="isLoading" />
    <Pagination
      :currentPage="currentPage"
      :itemsPerPage="itemsPerPage"
      :totalItems="totalItems"
      :totalPages="totalPages"
    />
  </aside>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue';
import Loader from '@/components/general/Loader.vue';
import Pagination from '@/components/general/pagination.vue';
import ExpandedText from '@/components/general/expanded-text.vue';
import Table from '@/components/general/table.vue';
import { isEmpty } from 'lodash';

interface Post {
  id: number;
  title: string;
  body: string;
}
const emit = defineEmits(['postSelected']);
const currentPage = ref(1);
const itemsPerPage = ref(10);
const searchQuery = ref('');

const props = defineProps<{
  posts: Post[];
  isLoading: boolean;
}>();

const tableHeader = reactive(['Title', 'Body']);

const selectPost = (postId: any) => {
  emit('postSelected', postId);
};

const totalItems = computed(() => filteredPosts.value.length);
const totalPages = computed(() =>
  Math.ceil(totalItems.value / itemsPerPage.value)
);

const filteredPosts = computed(() => {
  if (!searchQuery.value) {
    return props.posts;
  }

  const query = searchQuery.value.toLowerCase();
  return (
    props.posts.filter(
      (post: any) =>
        post.title.toLowerCase().includes(query) ||
        post.body.toLowerCase().includes(query)
    ) || []
  );
});

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  return filteredPosts.value.slice(start, start + itemsPerPage.value);
});
</script>
