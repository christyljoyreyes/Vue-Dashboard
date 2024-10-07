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
        <slot />
        <div class="modal-footer">
          <button type="button" @click="$emit('close')">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>
