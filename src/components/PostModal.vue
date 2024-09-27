<template>
  <div class="modal">
    <div class="modal-overlay">
      <div class="modal-transparent"></div>
      <div
        class="modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div class="modal-body">
          <h2 class="modal-title">
            <strong>{{ items.title }}</strong>
          </h2>
          <p class="modal-description">{{ items.body }}</p>
          <strong class="modal-comment">Comments:</strong>
          <ul>
            <li
              v-for="comment in items.comments"
              :key="comment.id"
              class="modal-list"
            >
              <div class="modal-item">
                <strong class="modal-item-label">Email:</strong>
                {{ comment.email }}
              </div>
              <div class="modal-item">
                <strong class="modal-item-label">Title: </strong
                >{{ comment.name }}
              </div>
              <div class="modal-item">
                <strong class="modal-item-label">Message: </strong
                >{{ comment.body }}
              </div>
            </li>
          </ul>
        </div>
        <div class="modal-footer">
          <button type="button" @click="$emit('close')">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  post: {
    type: Object,
    default: () => {},
  },
});
const items = props.post;
</script>
