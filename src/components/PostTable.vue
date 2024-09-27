<template>
  <aside class="table-container">
    <input v-model="searchQuery" type="text" placeholder="Search..." />
    <table>
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Body</th>
        </tr>
      </thead>
      <tbody v-if="!isLoading">
        <tr v-for="post in paginatedData" :key="post.id">
          <td @click="selectPost(post.id)">
            {{ post.title }}
          </td>
          <td>
            <div v-if="!expandedPosts.includes(post.id)">
              <span>{{ post.body.slice(0, 100) }}...</span
              ><button @click="toggleReadMore(post.id)">Read more</button>
            </div>
            <div v-else>
              <span> {{ post.body }}</span>
              <button @click="toggleReadMore(post.id)">Show less</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="!isLoading && isEmpty(paginatedData)" class="table-empty">
      No Data Found
    </div>
    <Loader v-if="isLoading" />
    <div class="table-footer">
      <span class="table-footer-label">
        Showing {{ (currentPage - 1) * itemsPerPage + 1 }} to
        {{ Math.min(currentPage * itemsPerPage, totalItems) }} of
        {{ totalItems }} entries
      </span>
      <div class="pagination">
        <button
          @click="prevPage"
          :disabled="currentPage === 1"
          class="pagination-prev"
        >
          Previous
        </button>
        <button
          @click="nextPage"
          :disabled="currentPage >= totalPages"
          class="pagination-next"
        >
          Next
        </button>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref, computed, defineProps, defineEmits } from "vue";
import Loader from "@/components/Loader.vue";
import { isEmpty } from "lodash";

interface Post {
  id: number;
  title: string;
  body: string;
}
const emit = defineEmits(["postSelected"]);
const currentPage = ref(1);
const itemsPerPage = ref(10);
const expandedPosts = ref<number[]>([]);
const searchQuery = ref("");

const props = defineProps<{
  posts: Post[];
  isLoading: boolean;
}>();

const selectPost = (postId: any) => {
  emit("postSelected", postId);
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

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const toggleReadMore = (postId: number) => {
  if (expandedPosts.value.includes(postId)) {
    expandedPosts.value = expandedPosts.value.filter((id) => id !== postId);
  } else {
    expandedPosts.value.push(postId);
  }
};
</script>
