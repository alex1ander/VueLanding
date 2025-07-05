<template>
  <div id="pop-up" :class="{ active: active }">
    <div class="pop-up-form reverse-style">
      <svg width="13" height="13" class="btn-pop-up" @click="$emit('close')">
        <use href="#close"></use>
      </svg>
      <div class="pop-up-container">
        <ContactForm :service="service" />
      </div>
    </div>
  </div>
</template>

<script>
import ContactForm from './ContactForm.vue';

export default {
  components: { ContactForm },

  props: {
    service: { type: String, default: '' },
    active: { type: Boolean, default: false },
  },
};
</script>
