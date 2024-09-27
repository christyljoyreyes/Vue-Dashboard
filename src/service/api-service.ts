import axios from "axios";

export const fetchPostsFromApi = () =>
  axios.get("https://jsonplaceholder.typicode.com/posts");

export const fetchPostDetailsFromApi = (postId: any) => {
  const postRequest = axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const commentsRequest = axios.get(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );
  return Promise.all([postRequest, commentsRequest]);
};
