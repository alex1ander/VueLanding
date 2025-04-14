<template>
  <div id="pop-up">
    <div class="pop-up-form">
      <svg width="13" height="13" class="btn-pop-up">
        <use href="#close"></use>
      </svg>
      <div class="pop-up-container">
        <ContactForm />
      </div>
    </div>
  </div>
</template>

<script>
    import ContactForm from './ContactForm.vue';

    export default {
        components: {
            ContactForm,
        },
    };
</script>


<style>

.contact-selector {
  display: flex;
  gap: 10px;
  align-items: center;
}

.contact-type-select {
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 5px;
  appearance: none; /* Убирает стандартный стиль в браузерах */
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 16px;
  outline: none;
}
</style>