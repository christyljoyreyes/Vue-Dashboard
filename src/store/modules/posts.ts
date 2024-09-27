import {
  fetchPostsFromApi,
  fetchPostDetailsFromApi,
} from "../../service/api-service";

const state = {
  posts: [],
  loading: false,
  error: null,
};

const mutations = {
  SET_POSTS(state: any, posts: any) {
    state.posts = posts;
  },
  SET_LOADING(state: any, loading: any) {
    state.loading = loading;
  },
  SET_ERROR(state: any, error: any) {
    state.error = error;
  },
};

const actions = {
  async fetchPosts({ commit }: any) {
    commit("SET_LOADING", true);
    commit("SET_ERROR", null); // Reset error on new fetch
    try {
      const response = await fetchPostsFromApi();
      commit("SET_POSTS", response.data);
    } catch (error: any) {
      commit("SET_ERROR", error.message);
    } finally {
      commit("SET_LOADING", false);
    }
  },

  async fetchPostDetails({ commit }: any, postId: any) {
    try {
      const [postResponse, commentsResponse] = await fetchPostDetailsFromApi(
        postId
      );
      return { ...postResponse.data, comments: commentsResponse.data };
    } catch (error) {
      console.error("Failed to fetch post details:", error);
      throw error;
    }
  },
};

const getters = {
  posts: (state: any) => state.posts,
  loading: (state: any) => state.loading,
  error: (state: any) => state.error,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
