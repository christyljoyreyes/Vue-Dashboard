<template>
  <div class="container mx-auto px-6 py-8 bg-white dark:bg-gray-700 h-auto">
    <h1 class="text-3xl font-medium text-gray-700 dark:text-white">Table</h1>
    <PostTable
      :posts="posts"
      @postSelected="selectPost"
      :isLoading="loading"
      :error="error"
    />
    <PostModal
      v-if="selectedPost"
      :post="selectedPost"
      @close="selectedPost = null"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import { useStore } from "vuex";
import PostTable from "@/components/PostTable.vue";
import PostModal from "@/components/PostModal.vue";

const selectedPost = ref(null);
const store = useStore();

const loading = computed(() => store.state.posts.loading);
const error = computed(() => store.state.posts.error);
const posts = computed(() => store.state.posts.posts);

const selectPost = async (postId: number) => {
  selectedPost.value = null;
  try {
    selectedPost.value = await store.dispatch("posts/fetchPostDetails", postId);
  } catch (err) {
    console.error("Error fetching post details:", err);
  }
};

onMounted(() => {
  store.dispatch("posts/fetchPosts");
});
</script>
